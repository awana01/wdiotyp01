import {$,browser} from '@wdio/globals'
import FoxySignUpPage from '../pages/foxy/foxy.signup.page'

import {delay,generateRandomInteger,generateTimeToken1,generateTimeToken, basePath, joinUserPath} from '../utils/auto.helper'
import path from 'path'
import allureReporter from '@wdio/allure-reporter'






describe("Basic Foxy Cart Tests",()=>{
    it("Signup new user",async ()=>{
        await FoxySignUpPage.OpenFoxyApp();
        await FoxySignUpPage.SignUpNewUser();
        await delay(3000)
    })

    it("take element screenshot",async()=>{
        let ele = $$("//form[@id='signup']/fieldset")[0];
        await ele.click();
        const screenShotDir = await joinUserPath('screens/')
        var p= `${screenShotDir}aboutyou.png`
        console.log("element-screenshot: "+p);
        allureReporter.addAttachment("element",await ele.saveScreenshot(p),"image/png");
        
    })
})


