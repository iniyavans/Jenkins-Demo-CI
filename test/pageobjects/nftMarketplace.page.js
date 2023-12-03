const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    open() {
        return super.open('nft-marketplace-development');
    }
}

module.exports = new LoginPage();
