const Page = require('./Page');
const StoryTask = require('./StoryTask');
let CommonActions = require('../core/ui/CommonActions.js');
/**
 * this class contains methods of dashboard.
 */
class Story extends Page {
    constructor() {
        super();
        this.addStoryButton = 'button[data-aid="Sidebar__AddStoryButton"]';
        this.storyTitleField = 'textArea[aria-label="story title"]';
        this.saveStoryButton = 'button[class="autosaves button std save"]';
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
    clickSaveStoryButton() {
        CommonActions.waitAndClick(this.saveStoryButton);
        return new StoryTask();
    }
    showStoryFields(storyName) {
        CommonActions.waitAndDoubleClick(`.tracker_markup=${storyName}`);
        return new StoryTask();
    }
}
module.exports = Story;
