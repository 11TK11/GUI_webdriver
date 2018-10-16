const Page = require('./Page');
let CommonActions = require('../core/ui/CommonActions.js');
/**
 * Page object to create task
 */
class StoryTask extends Page {
    constructor() {
        super();
        this.startAddingTaskButton = 'div[data-aid="TaskAdd"]';
        this.addNewTaskButton = 'button[data-aid="addTaskButton"]';
        this.taskTitleTextField = 'textArea[data-aid="new"]';
        this.saveStoryChanges = 'button[class="autosaves button std close"]';
    }
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
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
