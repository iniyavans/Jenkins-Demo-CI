const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/nftMarketplace.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await expect(SecurePage.flashAlert).toBeExisting()
    })
})

