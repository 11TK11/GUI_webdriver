const Workspaces = require('./Workspaces');
const Project = require('./Project');
const CommonActions = require('../core/ui/CommonActions.js');
const config = require('../../testconfig.json');

/**
 * this class contains methods of dashboard.
 */
class Dashboard {
    constructor() {
        this.createProjectButton = '#create-project-button';
        this.createWorkspaceButton = '#create-workspace-button';
        this.accountSelector = '.tc-account-selector';
        this.workspacesTab = '//span[text()="Workspaces"]';
        this.workspaceNameTextField = '.tc-form__input';
        this.createSubmit = '.pvXpn__Button--positive';
        this.newAccountName = '.tc-account-creator__name';
        this.projectName = 'input[name="project_name"]';
        this.createAccountButton = '.tc-account-selector__create-account';
        this.accountListSelector = '.tc-account-selector__option-list';
    }

    clickCreateProjectButton() {
        CommonActions.waitAndClick(this.createProjectButton);
    }

    setProjectNameTextField(projectName) {
        CommonActions.waitAndSetValue(this.projectName, projectName);
    }

    clickSelectorAccountSelector() {
        CommonActions.waitAndClick(this.accountSelector);
    }

    setAccountSelector(account) {
        return `//div[text()= "${account}"]`;
    }

    setPrivacy(privacy) {
        return `input[value="${privacy}"]`;
    }

    clickNewAccount() {
        CommonActions.waitAndClick(this.createAccountButton);
    }

    setNewAccountName(accountName) {
        CommonActions.waitAndSetValue(this.newAccountName,accountName);
    }

    setAccountItem(account) {
        this.clickSelectorAccountSelector();
        CommonActions.waitVisibleElement(this.accountListSelector);

        // this try will set the account if it existe and
        // create it if it doesn't
        try {
            CommonActions.waitAndGetText(this.setAccountSelector(account));
            CommonActions.waitAndClick(this.setAccountSelector(account));
        }catch (e) {
            this.clickNewAccount();
            this.setNewAccountName(account);
        }
    }

    setProjectPrivacyRadio(privacy) {
        CommonActions.waitAndClick(this.setPrivacy(privacy));
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

    /**
     * intelligent method for fields.
     * @param projectValue json object to set in the form
     * @returns {Project} instance of page project
     */
    createProject(projectValue) {
        let fillProjectInformation = {
            'name': () => this.setProjectNameTextField(projectValue.name),
            'account': () => this.setAccountItem(projectValue.account),
            'privacy': () => this.setProjectPrivacyRadio(projectValue.privacy)
        };
        Object.keys(projectValue).forEach(key => {
            fillProjectInformation[key].call();
        });
        this.clickCreateSubmit();
        return new Project();
    }

    /**
     * Creates a new workspace
     * @param workspaceName for the new workspace
     * @returns {Workspaces} return an instance of workspace
     */
    //TODO move to new class - workspace.js
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

    openProjectById(projectId) {
        browser.url(config.home_page_url.concat(`/n/projects/${projectId}`));
        return new Project();
    }

}
module.exports = Dashboard;
