const SingIn = require('../pages/SignIn');
let username = 'kevinherrera2';
let password = '70723844';
let projectID = '2203114';
describe('pivotal tracker project page add story', () => {
    let project;
    let dashboard;
    let story;

    before(() => {
        dashboard = SingIn.loginAs(username, password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new private project with first account', () => {
        story = project.getStoryPageOfProject();
        story.clickAddStoryButton();
        story.setStoryTitleField('story test');
        story.clickSaveStoryButton();
    });
});
