const SingIn = require('../pages/SignIn');
let username = 'username';
let password = 'password';
let projectID = '11111111';
describe('pivotal tracker project page add task to story', () => {
    let project;
    let dashboard;
    let story;
    let storyTasks;

    before(() => {
        dashboard = SingIn.loginAs(username, password);
        project = dashboard.openProjectById(projectID);
        // create project from api
        // create story from api
    });

    it('should create a new task on the of this project', () => {
        story = project.getStoryPageOfProject();
        storyTasks = story.showStoryFields('test');
        storyTasks.clickStartAddingTaskButton();
        storyTasks.setTaskTitleTextField('new task');
        storyTasks.clickSaveAndAddNewTaskButton();
    });

    // after delete project from api
});
