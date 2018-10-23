const StoryTask = require('./StoryTask');
const CommonActions = require('../core/ui/CommonActions.js');
/**
 * this class contains methods of dashboard.
 */
class Story {
    constructor() {
        this.storyTitleField = 'textArea[aria-label="story title"]';
        this.saveStoryButton = 'button[class="autosaves button std save"]';
        this.startAddingTaskButton = 'div[data-aid="TaskAdd"]';
    }
    setStoryTitleField(storyTitle) {
        CommonActions.waitAndSetValue(this.storyTitleField,storyTitle);
    }
    clickSaveStoryButton() {
        CommonActions.waitAndClick(this.saveStoryButton);
        return new StoryTask();
    }
    // story name should be a json e.g. {name:'story test'}
    showStoryFields(storyName) {
        CommonActions.waitAndDoubleClick(`.tracker_markup=${storyName.name}`);
    }
    clickAddTaskButton() {
        CommonActions.waitAndClick(this.startAddingTaskButton);
        return new StoryTask();
    }
}
module.exports = Story;
