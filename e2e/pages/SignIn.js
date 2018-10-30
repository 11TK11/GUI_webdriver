const Dashboard = require('./Dashboard');
const CommonActions = require('../core/ui/CommonActions.js');
const Config = require('../../config.json');
/**
 * this class contains methods of SignIn.
 */
class SignIn {
    constructor() {
        this.userNameTextField = '#credentials_username';
        this.nextButton = '.app_signin_action_button';
        this.passwordTextField = '#credentials_password';
        this.signInButton = '.app_signin_action_button';
    }

    setUserNameTextField(username) {
        CommonActions.waitAndSetValue(this.userNameTextField, username);
    }

    clickNextButton() {
        CommonActions.waitAndClick(this.nextButton);
    }

    setPasswordPassField(password) {
        CommonActions.waitAndSetValue(this.passwordTextField, password);
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
        browser.url(Config.home_page_url.concat('/signin'));
        let signIn = new SignIn();
        signIn.setUserNameTextField(userName);
        signIn.clickNextButton();
        signIn.setPasswordPassField(password);
        return signIn.clickSignInButton();
    }

    /**
     * Smart method for login
     * @param userName to login with
     * @param password to login with
     */
    //join with loginAs method
    static credentials(userName, password) {
        var currentUserSession = browser.getCookie('lastuser').value;
        //Check if user username is logged already.
        if (typeof userName !== currentUserSession) {
            browser.log('User logged was:' + ' ' + currentUserSession);
            browser.deleteCookie();
        }
        return this.loginAs(userName, password);
    }
}

module.exports = SignIn;
