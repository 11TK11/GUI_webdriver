const Page = require('./Page');
let CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of SignOut.
 */
class SignOut extends Page {
    constructor() {
        super();
        this.userNameProfileLabelButton = '//button[@aria-label="Profile Dropdown"]';
        this.signOutButton = '//button[@data-aid="ProfileDropdown__signout"]';
    }

    clickProfileButton() {
        CommonActions.waitAndClick(this.userNameProfileLabelButton);
    }

    /**
     * method which do the sign out.
     * @returns the main signin page
     */
    clickSignOutButton() {
        CommonActions.waitAndClick(this.signOutButton);
        //back signin link
        super.open('/signin?signin_with_different=true');
    }
}

module.exports = SignOut;
