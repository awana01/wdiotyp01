import { expect } from '@wdio/globals'
import HRMLoginPage  from './login.hrm'

describe('My HRM Login application Test', () => {
    it('should login with valid credentials', async () => {
        await HRMLoginPage.openHRMApp();
        await HRMLoginPage.loginToHRM("Admin","admin123");
        
        await expect($('li.oxd-userdropdown')).toBeDisplayed()
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})
