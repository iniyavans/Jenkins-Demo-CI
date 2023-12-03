const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/nftMarketplace.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Verifing the NFT Marketplace page has a valid content', () => {
    it('should have a NFT Marketplace heading', async () => {
        await LoginPage.open()
        await expect(SecurePage.flashAlert).toBeExisting()
    })
})

