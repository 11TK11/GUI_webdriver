const Story = require('./Story');
const CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of project.
 */
class Project {
    constructor() {
        this.accountSelector = '.tc-account-selector';
        this.newAccountName = '.tc-account-creator__name';
        this.projectName = 'input[name="project_name"]';
        this.createAccountButton = '.tc-account-selector__create-account';
        this.accountListSelector = '.tc-account-selector__option-list';
        this.addStoryButton = 'button[data-aid="Sidebar__AddStoryButton"]';
        this.projectNameRaw = '.raw_context_name';
        this.createSubmit = '.pvXpn__Button--positive';
        this.projectNameSetting = 'input[name="project[name]"]';
    }
    /**
     * this method allows to check if the project
     * was create
     * @returns {*} the title of the page
     */
    getProjectNameRaw() {
        return CommonActions.waitAndGetText(this.projectNameRaw);
    }
    getProjectNameOnSettings() {
        return CommonActions.waitAndGetValue(this.projectNameSetting);
    }
    clickAddStoryButton() {
        CommonActions.waitAndClick(this.addStoryButton);
        return new Story();
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



}
module.exports = Project;
