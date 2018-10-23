const CommonActions = require('../core/ui/CommonActions.js');
/**
 * Page object to create task
 */
class StoryTask {
    constructor() {
        this.addNewTaskButton = 'button[data-aid="addTaskButton"]';
        this.taskTitleTextField = 'textArea[data-aid="new"]';
    }
    setTaskTitleTextField(taskTitle) {
        CommonActions.setInputTextField(this.taskTitleTextField, taskTitle);
    }
    clickSaveAndAddNewTaskButton() {
        CommonActions.waitAndClick(this.addNewTaskButton);
    }
    // teskValue should be a json: e.g. {name:'task test'}
    createTasks(taskValue) {
        let fillTaskForm = {
            'name': () => this.setTaskTitleTextField(taskValue.name),
        };
        Object.keys(taskValue).forEach(key => {
            fillTaskForm[key].call();
        });
        this.clickSaveAndAddNewTaskButton();
    }
}
module.exports = StoryTask;
