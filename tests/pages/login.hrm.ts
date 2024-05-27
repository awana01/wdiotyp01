import { $,browser} from '@wdio/globals'
import { delay } from '../utils/auto.helper';


class HRMLoginPage {
    constructor(){ }

    
    public get userName () {
        return $('[name="username"]');
    }

    public get userPassword () {
        return $('[name="password"]');
    }

    public get submitButton () {
        return $("//button[@type='submit']");
    }

    public async openHRMApp(){
        browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await delay(5000);
    }

    public async loginToHRM(uname:string,pw:string){
        await this.userName.setValue(uname);
        await this.userPassword.setValue(pw);
        await delay(2000);
        await this.submitButton.click()
        await delay(2000);
    }

    //delay = ms => new Promise(res => setTimeout(res, ms));



}

 
export default new HRMLoginPage();

