const CommonActions = require('../../core/ui/CommonActions');
const Dashboard = require('../../pages/Dashboard');
const {Then, When} = require('cucumber');
let project;
let projectName;

When(/^I click the create project button$/, () => {
    project = Dashboard.clickCreateProjectButton();
});

When(/^I create a new project with fields:$/, dataTable => {
    let rowsHash = dataTable.rowsHash();
    projectName = rowsHash.name + Date.now();
    rowsHash.name = projectName;
    project = project.createProject(rowsHash);
});

Then(/^I verify if the project is created$/, () => {
    expect(`${projectName} - Pivotal Tracker`).to.equal(CommonActions.waitGetTitle());
});

