var SingIn = require('../pages/SignIn');
var username = 'hapsneeze';
var password = 'test12345';
describe('pivotal tracker page', () => {

    let dashboard;
    let workspace;
    let workspaceName = 'TestWorkspace'+Math.floor(Math.random() * 100);
    //Sign in precondition
    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should create a new workspace named: '+workspaceName, () => {
        //create workspace
        workspace = dashboard.createWorkspace(workspaceName);
        expect(workspaceName).to.equal(workspace.getWorkspaceName());
    });
});
