const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const config = require('../../config.json');
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
    });

    after(() =>{
        let response = browser.call(() => {return APIrequest.GetRequest('projects');});
        let projectID = Object.values(response.data).map((project) => {
            if (projectData1.name === project.name) {
                return project.id;
            }
        });
        browser.call(() => {return APIrequest.DelRequest(`projects/${projectID}`);});
    });
});
