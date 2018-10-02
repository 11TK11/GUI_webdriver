const Page = require('./Page');
const Dashboard = require('./Dashboard');
class SignIn extends Page {
    open() {
        super.open('/signin');
    }

    setUserNameTextField(username) {
        browser.setValue('#credentials_username', username);
    }

    clickNextButton() {
        browser.click('.app_signin_action_button');
    }
    setPasswordPassField(password) {
        browser.setValue('#credentials_password',password);
    }

    clickSignInButton() {
        browser.click('.app_signin_action_button');
        return new Dashboard();
    }

    // metodo inteligente
    // si esta en session con el usuario
    static loginAs(userName, password) {
        let signIn = new SignIn();
        signIn.open();
        signIn.setUserNameTextField(userName);
        signIn.clickNextButton();
        signIn.setPasswordPassField(password);
        return signIn.clickSignInButton();
    }

}
module.exports = SignIn;
