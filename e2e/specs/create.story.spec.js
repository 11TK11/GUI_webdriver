const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/APIPivotalManager')
//TODO move to config.json
let username = 'kevinherrera2';
let password = '70723844';
let projectID = '2203114';
let token ='f89634fa55d2cb80fee84fd0d6a9fd2a'
describe('pivotal tracker project page add story', () => {
    let project;
    let dashboard;
    let story;

    before(() => {
        APIrequest.RequestPostProject()
        //TODO get project id from response
        dashboard = SingIn.loginAs(username, password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new private project with first account', () => {
        story = project.getStoryPageOfProject();
        story.clickAddStoryButton();
        story.setStoryTitleField('story test');
        story.clickSaveStoryButton();
        //TODO add assert
    });

    //TODO add after delete project from api
});
