const Page = require('./Page');
class Dashboard extends Page {
    open() {
        super.open('/dashboard');
    }
    clickCreateProjectButton() {
        browser.click('#create-project-button');
    }
    setProjectNameTextField(projectName) {
        browser.setValue('.tc-form__input', projectName);
    }
    clickSelectorAccountSelector() {
        browser.click('.tc-account-selector');
    }
    setAccountItem(account) {
        browser.waitForVisible('.tc-account-selector__option-list');
        browser.click(`li:nth-child(${account})`);
    }
    setProjectPrivacyRadio(privacy) {
        browser.click(`input[value="${privacy}"]`);
    }
    clickCreateProjectSubmit() {
        browser.click('.pvXpn__Button--positive');
    }
    static createProject(projectData) {
        let dashboard = new Dashboard();
        dashboard.open();
        dashboard.clickCreateProjectButton();
        dashboard.setProjectNameTextField(projectData['name']);
        dashboard.clickSelectorAccountSelector();
        dashboard.setAccountItem(projectData['account']);
        dashboard.setProjectPrivacyRadio(projectData['privacy']);
        dashboard.clickCreateProjectSubmit();
    }
}

module.exports = Dashboard;
