const Page = require('./Page');
let CommonActions = require('../utils/CommonActions.js');
/**
 * this class contains methods of dashboard.
 */
class Story extends Page {
    constructor() {
        super();
        this.addStoryButton = 'Sidebar__addStory__wMyRzEAE';
        this.storyTitleField = '#NameEdit--c234';
    }
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
    }
    clickAddStoryButton() {
        CommonActions.waitAndClick(this.addStoryButton);
    }
    setStoryTitleField(storyTitle) {
        CommonActions.waitAndSetValue(this.storyTitleField,storyTitle);
    }
}
module.exports = Story;
