const Page = require('./Page');
let CommonActions = require('../utils/CommonActions.js');
class Workspaces extends Page {

    constructor(){
        super();
        this.workspaceContext = '.raw_context_name';
    }
    open() {
        super.open('/n/workspaces/${workspaceId}');
    }
    getWorkspaceName() {
        return CommonActions.waitAndGetText(this.workspaceContext);
    }

}
module.exports = Workspaces;
