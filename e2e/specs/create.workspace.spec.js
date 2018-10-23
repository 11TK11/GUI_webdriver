const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const Config = require('../../config.json');
describe('pivotal tracker page create workspaces', () => {
    let dashboard;
    let workspaceData = {name: 'Test Workspace '+ new Date().getMilliseconds()};
    //Sign in precondition
    before(() => {
        dashboard = SingIn.loginAs(Config.username, Config.password);
    });

    it('should create a new workspace', () => {
        let workspace = dashboard.clickCreateWorkspaceButton();
        //create workspace
        workspace.createWorkspace(workspaceData);
        expect(workspaceData.name).to.equal(workspace.getWorkspaceName());
    });

    after(() => {
        let response = browser.call(() => {return APIrequest.GetRequest('/my/workspaces');});
        let workspaceID = Object.values(response.data).map((workspace) => {
            if (workspace.name === workspaceData.name) {
                return workspace.id;
            }
            return null;
        });
        APIrequest.DelRequest(`/my/workspaces/${workspaceID}`);
    });

});
