var SingIn = require('../pages/SignIn');
var Dashboard = require('../pages/Dashboard');
var username = 'hapsneeze';
var pass = 'test12345';
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
        Dashboard.setProjectPrivacyRadioButton();
        Dashboard.clickCreateSubmit();
    });
});
