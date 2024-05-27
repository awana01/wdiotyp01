import moment, { Moment } from 'moment'
import path from 'path'


export async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

/**
 * 
 * @param min 
 * @param max 
 * @returns 
 * Random Function using Math.random() 0 <= r < 1
 * To get the random number: generateRandomInteger(-20, 20); 
 */
export async function generateRandomInteger(min:any, max:any) {
    return Math.floor(min + Math.random()*(max - min + 1))
  }

export async function generateTimeToken(){
    return new Date().toLocaleString();
}

export async function generateTimeToken1(){
    var date = Date.now();
    let formattedDate = (moment(date)).format('YYYY-MM-DD HH:mm:ss');
    return formattedDate;
}

export const basePath = path.resolve('.')