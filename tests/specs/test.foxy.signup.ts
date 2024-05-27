import {$,browser} from '@wdio/globals'
import FoxySignUpPage from '../pages/foxy/foxy.signup.page'
import {delay,generateRandomInteger,generateTimeToken1,generateTimeToken, basePath, joinUserPath} from '../utils/auto.helper'
import allureReporter from '@wdio/allure-reporter'
import foxyNewstorePage from '../pages/foxy/foxy.newstore.page'

describe("Basic Foxy Cart Tests",()=>{
    it("Signup new user",async ()=>{
        await FoxySignUpPage.OpenFoxyApp();
        await FoxySignUpPage.EnterAboutYouData()
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

    it("enter other store data",async ()=>{
        await FoxySignUpPage.EnterConsiderYourselfData()
        await FoxySignUpPage.EnterStoreData()
        await FoxySignUpPage.ClickCaptcha();
        await FoxySignUpPage.SubmitStoreData();
        await delay(5000)
    })

    it("logout foxy store app",async ()=>{
        await foxyNewstorePage.LogoutFoxyApp();
        await delay(5000)
    })

})


