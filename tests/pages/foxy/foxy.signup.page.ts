import {$} from '@wdio/globals'
import {Faker,fakerEN_US} from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter'
import foxyNewstorePage from './foxy.newstore.page';


var Fake = fakerEN_US;

class FoxySignUpPage{
    constructor(){
    }

    public get EmailAvailibilityCheck(){
       return $("div[id='email_found']>span");
    }

    


   public async OpenFoxyApp(){
     await browser.url("https://admin.foxycart.com/signup/");
   }


    public async EnterAboutYouData(){
       
      let fName = Fake.person.firstName();
      let lName = Fake.person.lastName();
      let newEmail = `${fName}.${lName}123@yopmail.com`;

      await $("[id='first_name']").setValue(fName);
      await $("[id='last_name']").setValue(lName)
      await $("[id='email']").setValue(newEmail)
      await $("[id='pwd']").click();
      await expect(this.EmailAvailibilityCheck).toHaveText("Available"); 
      await $("[id='foxy_desire']").click();
      await $("fieldset:nth-child(2)").click()
      await $("[id='pwd']").setValue("Test@12341234");
      allureReporter.addAttachment("Screenshot",await browser.takeScreenshot(),"image/png")
      
    }

    public async EnterConsiderYourselfData(){
      await $("[id='is_programmer']").click();
      await $("[id='is_developer']").click();
      await $("[id='is_designer']").click();
      await $("[id='is_merchant']").click();
      
    }

    public async EnterStoreData(){
      
      let storeName = Fake.commerce.productMaterial()+'33'

      await $("[id='store_name']").setValue(storeName)
      await $("[id='store_domain']").setValue(storeName)
      //terms and condition checkbox
      await $(".row > .label_checkbox").click();
      
    }

    public async ClickCaptcha(){
      await browser.switchToFrame(0)
      await $(".recaptcha-checkbox-border").click()
      await browser.pause(2000)
      await browser.switchWindow('Admin - FoxyCart')
    }

    public async SubmitStoreData(){
      await $("[id='next']").click()
    }



}

export default new FoxySignUpPage();


