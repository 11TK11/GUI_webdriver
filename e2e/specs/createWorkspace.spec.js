var assert = require('assert');
var SingIn = require('../pages/SignIn');
var Dashboard = require('../pages/Dashboard');
var Workspaces = require('../pages/Workspaces');
var username = 'hapsneeze';
var pass = 'test12345';
describe('pivotal tracker page',function () {
    it('should create a new workspace', function () {
        //Sign in - precondition
        SingIn.open();
        SingIn.setUserNameTextField(username);
        SingIn.clickSignInButton();
        SingIn.setPasswordPassField(pass);
        SingIn.clickSignInButton();
        Dashboard.open();
        //create workspace
        Dashboard.clickWorkspaceTab();
        Dashboard.clickCreateWorkspaceButton();
        Dashboard.setWorkspaceNameTextField('testWorkspace15');
        Dashboard.clickCreateSubmit();
    });
});