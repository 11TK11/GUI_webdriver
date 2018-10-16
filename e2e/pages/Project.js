const Page = require('./Page');
const Story = require('./Story');
let CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of project.
 */
class Project extends Page {
    constructor() {
        super();
    }
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
        return new Story();
    }

    getStoryPageOfProject() {
        return new Story();
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
