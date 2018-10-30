const CommonActions = require('../../core/ui/CommonActions');
const Dashboard = require('../../pages/Dashboard');
const {When, Then} = require('cucumber');
let workspace;
let workspaceName;

When(/^I switch tabs to workspaces$/, () => {
    Dashboard.switchTabs();
});
When(/^I click the create workspace button$/, () => {
    workspace = Dashboard.clickCreateWorkspaceButton();
});
When(/^I create a new workspace with fields:$/, dataTable => {
    let rowsHash = dataTable.rowsHash();
    workspaceName = rowsHash.name + Date.now();
    rowsHash.name = workspaceName;
    workspace = workspace.createWorkspace(rowsHash);
});
Then(/^I verify if the workspace is created$/, () => {
    expect(`${workspaceName} - Pivotal Tracker`).to.equal(CommonActions.waitGetTitle());
});
