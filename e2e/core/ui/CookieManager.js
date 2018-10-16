/**
 * this class handle the cookies.
 */
class CookieManager {

    /**
     * return the actual user located into cookie
     */
    static getUserCookie() {
        return browser.getCookie('lastuser').value;
    }

    /**
     * switch one user from cookie
     */
    static setUserCookie(user, password) {
        browser.log('the user to set from cookies is: ' + user + ' ' + 'password:' + ' ' + password);
        browser.setCookie({name: user, value: password});
    }

    /**
     * delete one user from cookie
     */
    static deleteUserCookie(user) {
        browser.log('the user deleted from cookies is: ' + user);
        browser.deleteCookie();
    }

}

module.exports = CookieManager;
