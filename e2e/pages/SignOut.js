const CommonActions = require('../core/ui/CommonActions.js');
const config = require('../../config.json');
/**
 * this class contains methods of SignOut.
 */
class SignOut {
    constructor() {
        this.userNameProfileLabelButton = 'button[aria-label="Profile Dropdown"]';
        this.signOutButton = 'button[data-aid="ProfileDropdown__signout"]';
    }

    clickProfileButton() {
        CommonActions.waitAndClick(this.userNameProfileLabelButton);
    }

    /**
     * method which do the sign out.
     * @returns the main signin page
     */
    clickSignOutButton() {
        //move function to new class Toolbar
        CommonActions.waitAndClick(this.signOutButton);
        //back signin link
        browser.uri(config.home_page_url.concat('/signin?signin_with_different=true'));
    }
}

module.exports = SignOut;
