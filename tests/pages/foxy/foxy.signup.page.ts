import {$} from '@wdio/globals'
import {Faker,fakerEN_US} from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter'


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


    public async SignUpNewUser(){
       
      let fName = Fake.person.firstName();
      let lName = Fake.person.lastName();
      let newEmail = `${fName}.${lName}123@yopmail.com`;

      await $("[id='first_name']").setValue(fName);
      await $("[id='last_name']").setValue(lName)
      await $("[id='email']").setValue(newEmail)
      await $("[id='pwd']").click();
      await expect(this.EmailAvailibilityCheck).toHaveText("Available"); 
      
      //await $.takeElementScreenshot(("//form[@id='signup']/fieldset")[0],false);

      // allureReporter.addAttachment("Aboutyou",await $$("//form[@id='signup']/fieldset")[0].takeScreenshot(),"image/png");

      
      await $("[id='foxy_desire']").click();
      await $("fieldset:nth-child(2)").click()
      allureReporter.addAttachment("Screenshot",await browser.takeScreenshot(),"image/png")

    }

}

export default new FoxySignUpPage();


