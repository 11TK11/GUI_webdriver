const CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of workspace.
 */
class Workspaces {

    constructor() {
        this.workspaceContext = '.raw_context_name';
        this.workspaceNameTextField = '.tc-form__input';
        this.createSubmit = '.pvXpn__Button--positive';
    }
    /**
     * method which allow to check if the workspace was create.
     * @returns {*} returns the text of the given context
     */
    getWorkspaceName() {
        return CommonActions.waitAndGetText(this.workspaceContext);
    }

    setWorkspaceNameTextField(workspaceName) {
        CommonActions.waitAndSetValue(this.workspaceNameTextField,workspaceName);
    }

    clickCreateSubmit() {
        CommonActions.waitAndClick(this.createSubmit);
    }

    /**
     * Creates a new workspace
     * @param workspaceName for the new workspace
     * @returns {Workspaces} return an instance of workspace
     */
    createWorkspace(workspaceValue) {
        let fillWorkspaceForm = {
            'name': () => this.setWorkspaceNameTextField(workspaceValue.name),
        };
        Object.keys(workspaceValue).forEach(key => {
            fillWorkspaceForm[key].call();
        });
        this.clickCreateSubmit();
    }
}
module.exports = Workspaces;
