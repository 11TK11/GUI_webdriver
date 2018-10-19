const CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of workspace.
 */
class Workspaces {

    constructor() {
        this.workspaceContext = '.raw_context_name';
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
