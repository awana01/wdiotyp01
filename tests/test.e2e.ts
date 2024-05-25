import { expect } from '@wdio/globals'
import LoginPage from './login.page'
import SecurePage from './secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})
