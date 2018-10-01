const Page = require('./Page');
const WithPass = require('../pages/ShowWithPass');
class SignIn extends Page {
    open() {
        super.open('/signin');
    }

    setUserNameTextField(username) {
        browser.setValue('#credentials_username', username);
    }

    setPasswordPassField(password) {
        browser.setValue('#credentials_password',password);
    }

    clickSignInButton() {
        browser.click('.app_signin_action_button');
    }

}
module.exports = new SignIn();