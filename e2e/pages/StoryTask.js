const CommonActions = require('../core/ui/CommonActions.js');
/**
 * Page object to create task
 */
class StoryTask {
    constructor() {
        this.startAddingTaskButton = 'div[data-aid="TaskAdd"]';
        this.addNewTaskButton = 'button[data-aid="addTaskButton"]';
        this.taskTitleTextField = 'textArea[data-aid="new"]';
        this.saveStoryChanges = 'button[class="autosaves button std close"]';
    }
    clickStartAddingTaskButton() {
        CommonActions.waitAndClick(this.startAddingTaskButton);
    }
    setTaskTitleTextField(taskTitle) {
        CommonActions.setInputTextField(this.taskTitleTextField, taskTitle);
    }
    clickSaveAndAddNewTaskButton() {
        CommonActions.waitAndClick(this.addNewTaskButton);
    }
    clickSaveStoryChanges() {
        CommonActions.waitAndClick(this.saveStoryChanges);
    }
    // change input for a json value
    createTasks(tasksList) {
        this.clickStartAddingTaskButton();
        tasksList.forEach(task => {
            this.setTaskTitleTextField(task);
            this.clickSaveAndAddNewTaskButton();
        });
        this.clickSaveStoryChanges();
    }
}
module.exports = StoryTask;
