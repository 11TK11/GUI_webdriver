const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const config = require('../../testconfig.json');
describe('pivotal tracker project page add story', () => {
    let project;
    let story;
    let projectID ;
    before(() => {
        let postProjectData = { name:'project created from api '+ new Date().getMilliseconds()};
        let response = browser.call(() => APIrequest.postRequest('projects', postProjectData));
        projectID = response.data.id;
        let dashboard = SingIn.loginAs(config.username, config.password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new private project with first account', () => {
        story = project.clickAddStoryButton();
        story.setStoryTitleField('story test wdio');
        story.clickSaveStoryButton();
        //TODO add assert
    });

    after(() =>{
        APIrequest.DelRequest(`projects/${projectID}`);
    });
});
