const Page = require('./Page');
let CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of workspace.
 */
class Workspaces extends Page {

    constructor() {
        super();
        this.workspaceContext = '.raw_context_name';
    }

    open(workspaceId) {
        super.open(`/n/workspaces/${workspaceId}`);
    }

    /**
     * method which allow to check if the workspace was create.
     * @returns {*} returns the text of the given context
     */
    getWorkspaceName() {
        return CommonActions.waitAndGetText(this.workspaceContext);
    }
}
module.exports = Workspaces;
