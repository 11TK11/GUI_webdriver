const Page = require('./Page');
const Dashboard = require('./Dashboard');
class SignIn extends Page {

    constructor() {
        super();
        this.userNameTextField = '#credentials_username';
        this.nextButton = '.app_signin_action_button';
        this.passwordTextField = '#credentials_password';
        this.signInButton = '.app_signin_action_button';
    }

    open() {
        super.open('/signin');
    }

    setUserNameTextField(username) {
        browser.waitForVisible(this.userNameTextField, 30000);
        browser.setValue(this.userNameTextField, username);
    }

    clickNextButton() {
        browser.waitForVisible(this.nextButton, 30000);
        browser.click(this.nextButton);
    }

    setPasswordPassField(password) {
        browser.waitForVisible(this.passwordTextField, 30000);
        browser.setValue(this.passwordTextField, password);
    }

    clickSignInButton() {
        browser.waitForVisible(this.signInButton, 30000);
        browser.click(this.signInButton);
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
