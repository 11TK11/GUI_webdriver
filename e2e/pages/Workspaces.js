const Page = require('./Page');
class Workspaces extends Page {
    open() {
        super.open('/n/workspaces/${workspaceId}');
    }
    getWorkspaceName() {
        browser.waitForVisible('.raw_context_name');
        return browser.getText('.raw_context_name')
    }

}
module.exports = Workspaces;
