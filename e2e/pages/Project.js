const Page = require('./Page');
const Story = require('./Story');
const CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of project.
 */
class Project extends Page {
    //TODO remove constructor and open methods
    constructor() {
        super();
    }
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
        return new Story();
    }
    //TODO improve method
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
