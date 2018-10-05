const Page = require('./Page');
const Dashboard = require('./Dashboard');
let CommonActions = require('../utils/CommonActions.js');

/**
 * this class contains methods of SignIn.
 */
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
        CommonActions.waitAndSetValue(this.userNameTextField,username);
    }
  
    clickNextButton() {
        CommonActions.waitAndClick(this.nextButton);
    }

    setPasswordPassField(password) {
        CommonActions.waitAndSetValue(this.passwordTextField,password);
    }

    /**
     * method which do the sign in.
     * @returns {Dashboard} return the dashboard page
     */
    clickSignInButton() {
        CommonActions.waitAndClick(this.signInButton);
        return new Dashboard();
    }

    /**
     * Smart method for login
     * @param userName to login with
     * @param password to login with
     */
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
