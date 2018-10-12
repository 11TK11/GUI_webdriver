const SingIn = require('../pages/SignIn');
let username = 'kevinherrera2';
let password = '70723844';
let projectID = '2203114';
describe('pivotal tracker project page add task to story', () => {
    let project;
    let dashboard;
    let story;
    let storyTasks;
    let taskList = ['task1', 'task2', 'task3'];

    before(() => {
        dashboard = SingIn.loginAs(username, password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new task on the of this project', () => {
        story = project.getStoryPageOfProject();
        storyTasks = story.showStoryFields('test');
        storyTasks.clickStartAddingTaskButton();
        storyTasks.setTaskTitleTextField('new task');
        storyTasks.clickSaveAndAddNewTaskButton();
        //expect(`${taskList[0]}`).to.equal(storyTasks.searchTask(taskList[0]));
    });
});