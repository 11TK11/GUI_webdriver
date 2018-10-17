/**
 * this class contains the main url.
 */
//TODO remove page class
class Page {
    constructor() {
        this.title = 'https://www.pivotaltracker.com';
    }
    //TODO remove all open methods
    open(path) {
        browser.url(this.title + path);
    }
}
module.exports = Page;
