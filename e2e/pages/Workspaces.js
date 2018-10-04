const Page = require('./Page');
class Workspaces extends Page {
    open() {
        super.open('/workspaces');
    }
    getWorkspaceName() {
        return browser.getText('.tc_context_name');
    }

}
module.exports = new Workspaces();
