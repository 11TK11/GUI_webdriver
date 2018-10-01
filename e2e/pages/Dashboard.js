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
    clickSelectorAccount() {
        browser.click('.tc-account-selector');
    }
    clickAccountSelector() {
        browser.click('.tc-account-selector__option-account-name');
    }
    setProjectPrivacyRadio() {
        browser.click('.tc-project-type-chooser__icon--public');
    }
    clickCreateProjectSubmit() {
        browser.click('.pvXpn__Button--positive');
    }
}
module.exports = new Dashboard();