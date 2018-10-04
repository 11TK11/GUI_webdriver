const Page = require('./Page');
const waitingTime = 30000;
class Dashboard extends Page {
    open() {
        super.open('/dashboard');
    }
    clickCreateProjectButton() {
        browser.click('#create-project-button');
    }
    setProjectNameTextField(projectName) {
        browser.waitForVisible('.tc-form__input',waitingTime);
        browser.setValue('.tc-form__input', projectName);
    }
    clickSelectorAccountSelector() {
        browser.click('.tc-account-selector');
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
        browser.click(`input[value="${privacy}"]`);
    }
    clickWorkspaceTab() {
        browser.click('//span[text()="Workspaces"]');
    }
    clickCreateWorkspaceButton() {
        browser.click('#create-workspace-button');
    }
    setWorkspaceNameTextField(workspaceName) {
        browser.setValue('.tc-form__input', workspaceName);
    }
    clickCreateSubmit() {
        browser.click('.pvXpn__Button--positive');
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
}
module.exports = Dashboard;
