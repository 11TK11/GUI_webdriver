class Page {
    constructor() {
        this.title = 'https://www.pivotaltracker.com';
    }
    open(path) {
        browser.url(this.title+path);
    }
}
module.exports = Page;
