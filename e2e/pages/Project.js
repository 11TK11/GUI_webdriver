const Story = require('./Story');
const CommonActions = require('../core/ui/CommonActions.js');

/**
 * this class contains methods of project.
 */
class Project {
    constructor() {
        this.addStoryButton = 'button[data-aid="Sidebar__AddStoryButton"]';
    }
    /**
     * this method allows to check if the project
     * was create
     * @returns {*} the title of the page
     */
    getProjectName() {
        return CommonActions.waitGetTitle();
    }
    clickAddStoryButton() {
        CommonActions.waitAndClick(this.addStoryButton);
        return new Story();
    }


}
module.exports = Project;
