import {$,browser} from '@wdio/globals'
import FoxySignUpPage from '../pages/foxy/foxy.signup.page'

import {delay,generateRandomInteger,generateTimeToken1,generateTimeToken, basePath} from '../utils/auto.helper'
import path from 'path'

describe("Basic Foxy Cart Tests",()=>{
    it("Signup new user",async ()=>{
        await FoxySignUpPage.OpenFoxyApp();
        await FoxySignUpPage.SignUpNewUser();
        await delay(3000)
    })

    it("take element screenshot",async()=>{
        let ele = $$("//form[@id='signup']/fieldset")[0];
        await ele.click();
        await ele.saveScreenshot('../img.png');

    })

    it.only("Testing Helper Methods",async()=>{
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`DateTime: ${await generateTimeToken1()}`)

        var basePath1 = path.resolve('.')
        var imgPath = path.resolve('../img.png')
        var joinPath = path.join(basePath,"/tests/specs");
        console.log("Base Path: "+basePath1)
        console.log("Image Path: "+imgPath)
        console.log("base util path:"+basePath)
        console.log("join user path:"+joinPath)
    })

})


