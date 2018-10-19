const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const config = require('../../testconfig.json');
describe('pivotal tracker page create new project', () => {

    let dashboard;
    let projectData1 = {
        name: 'test wdio 1 -' + new Date().getMilliseconds(),
        account: 'test'
    };
    before(() => {
        dashboard = SingIn.loginAs(config.username, config.password);
    });

    it('should create a new private project with first account', () => {
        dashboard.clickCreateProjectButton();
        let project = dashboard.createProject(projectData1);
        expect(`${projectData1.name} - Pivotal Tracker`).to.equal(project.getProjectName());
        //TODO add assert on dashboard page using locators
    });

    //TODO create 1 project more on the same test

    after(() =>{
        let projectID1;
        //let projectID2;
        //endpoint to get all user projects
        let response = browser.call(() => APIrequest.GetRequest('projects'));
        Object.values(response.data).map((project) => {
            if (projectData1.name === project.name) {
                projectID1 = project.id;
            }
        });
        browser.call(() => APIrequest.DelRequest(`projects/${projectID1}`));
        //browser.call(() => APIrequest.DelRequest(`projects/${projectID2}`));

    });
});
