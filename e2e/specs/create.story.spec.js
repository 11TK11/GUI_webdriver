const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const Config = require('../../config.json');
describe('pivotal tracker page add story on project', () => {
    let project;
    let story;
    let projectID ;
    before(() => {
        let postProjectData = { name:'project created from api '+ new Date().getMilliseconds()};
        let response = browser.call(() => { return APIrequest.postRequest('/projects', postProjectData);});
        projectID = response.data.id;
        let dashboard = SingIn.loginAs(Config.username, Config.password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new story on this project', () => {
        story = project.clickAddStoryButton();
        let storyName = 'story test wdio';
        story.setStoryTitleField(storyName);
        story.clickSaveStoryButton();
        expect(story.clickAddTaskButton(storyName)).to.not.equal(null);
    });

    after(() =>{
        APIrequest.DelRequest(`/projects/${projectID}`);
    });
});
