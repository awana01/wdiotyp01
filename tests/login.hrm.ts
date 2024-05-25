import { $ } from '@wdio/globals'



class HRMLoginPage {
    public HRMLoginPage(){
         
    }
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
        await this.delay(8000);
    }

    public async loginToHRM(uname:string,pw:string){
        await this.userName.setValue(uname);
        await this.userPassword.setValue(pw);
        await this.delay(5000);
        await this.submitButton.click()
        await this.delay(5000);
    }

    delay = ms => new Promise(res => setTimeout(res, ms));



}

 
export default new HRMLoginPage();

