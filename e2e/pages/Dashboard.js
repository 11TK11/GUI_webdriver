const Page = require('./Page');
const Workspaces = require('./Workspaces');
let CommonActions = require('../utils/CommonActions.js');
class Dashboard extends Page {
    constructor() {
        super();
        this.createProjectButton = '#create-project-button';
        this.createWorkspaceButton = '#create-workspace-button';
        this.accountSelector = '.tc-account-selector';
        this.workspacesTab = '//span[text()="Workspaces"]';
        this.workspaceNameTextField = '.tc-form__input';
        this.createSubmit = '.pvXpn__Button--positive';
    }
    open() {
        super.open('/dashboard');
    }
    clickCreateProjectButton() {
        CommonActions.waitAndClick(this.createProjectButton);
    }
    setProjectNameTextField(projectName) {
        CommonActions.waitAndSetValue(projectName);
    }
    clickSelectorAccountSelector() {
        CommonActions.waitAndClick(this.accountSelector);
    }
    setAccountPath(account) {
        return `//div[text()= "${account}"]`;
    }
    setAccountItem(account) {
        CommonActions.waitAndClick(this.setAccountPath(account));
        //browser.waitForVisible('.tc-account-selector__option-list',30000);
        //browser.click(`//div[text()= "${account}"]`);
    }
    setPrivacyRadioPath(privacy) {
        return `input[value="${privacy}"]`;
    }
    setProjectPrivacyRadio(privacy) {
        CommonActions.waitAndClick(this.setPrivacyRadioPath(privacy));
    }
    clickWorkspaceTab() {
        CommonActions.waitAndClick(this.workspacesTab);
    }
    clickCreateWorkspaceButton() {
        CommonActions.waitAndClick(this.createWorkspaceButton);
    }
    setWorkspaceNameTextField(workspaceName) {
        CommonActions.waitAndSetValue(this.workspaceNameTextField,workspaceName);
    }
    clickCreateSubmit() {
        CommonActions.waitAndClick(this.createSubmit);
    }
    createProject(projectData) {
        let dashboard = new Dashboard();
        dashboard.open();
        dashboard.clickCreateProjectButton();
        dashboard.setProjectNameTextField(projectData['name']);
        dashboard.clickSelectorAccountSelector();
        dashboard.setAccountItem(projectData['account']);
        dashboard.setProjectPrivacyRadio(projectData['privacy']);
        dashboard.clickCreateSubmit();
    }

    /**
     * Creates a new workspace
     * @param workspaceName for the new workspace
     * @returns {Workspaces} return an instance of workspace
     */
    createWorkspace(workspaceName)
    {
        let dashboard = new Dashboard();
        dashboard.open();
        dashboard.clickWorkspaceTab();
        dashboard.clickCreateWorkspaceButton();
        dashboard.setWorkspaceNameTextField(workspaceName);
        dashboard.clickCreateSubmit();
        return new Workspaces();
    }
}
module.exports = Dashboard;
