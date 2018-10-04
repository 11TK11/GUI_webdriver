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
    clickNewAccount() {
        browser.click('.tc-account-selector__create-account');
    }
    setNewAccountName(accountName) {
        browser.waitForVisible('.tc-account-creator__name',waitingTime);
        browser.setValue('.tc-account-creator__name', accountName);
    }
    setAccountItem(account) {
        this.clickSelectorAccountSelector();
        browser.waitForVisible('.tc-account-selector__option-list',waitingTime);
        try {
            browser.getText(`//div[text()= "${account}"]`);
            browser.click(`//div[text()= "${account}"]`);
        }catch (e) {
            this.clickNewAccount();
            this.setNewAccountName(account);
        }
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

    createProject(projectValue) {
        this.clickCreateProjectButton();
        let fillProjectInformation = {
            'name': () => this.setProjectNameTextField(projectValue.name),
            'account': () => this.setAccountItem(projectValue.account),
            'privacy': () => this.setProjectPrivacyRadio(projectValue.privacy)
        }
        Object.keys(projectValue).forEach(key => {
            fillProjectInformation[key].call();
        });
        this.clickCreateSubmit();
        this.open();
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
