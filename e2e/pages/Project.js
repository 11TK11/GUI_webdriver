const Page = require('./Page');
let CommonActions = require('../utils/CommonActions.js');

/**
 * this class contains methods of project.
 */
class Project extends Page {
    constructor() {
        super();
    }
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
    }

    /**
     * this method allows to check if the project
     * was create
     * @returns {*} the title of the page
     */
    getProjectName() {
        return CommonActions.waitGetTitle();
    }
}
module.exports = Project;
