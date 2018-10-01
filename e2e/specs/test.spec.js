var assert = require('assert');
var SingIn = require('../pages/SignIn');
var Dashboard = require('../pages/Dashboard');
var username = 'kevin.sanchezpeep@gmail.com';
var pass = '72495431TANIAtk!';
describe('pivotal tracker page',function () {
    it('should create a new project', function () {
        SingIn.open();
        SingIn.setUserNameTextField(username);
        SingIn.clickSignInButton();
        SingIn.setPasswordPassField(pass);
        SingIn.clickSignInButton();
        Dashboard.open();
        Dashboard.clickCreateProjectButton();
        Dashboard.setProjectNameTextField('test1');
        Dashboard.clickSelectorAccount();
        Dashboard.clickAccountSelector();
        Dashboard.setProjectPrivacyRadio();
        Dashboard.clickCreateProjectSubmit();
    });
});