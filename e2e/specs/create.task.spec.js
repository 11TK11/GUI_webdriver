const SingIn = require('../pages/SignIn');
const Config = require('../../config.json');
describe('pivotal tracker project page add task to story', () => {
    let dashboard;
    let projectID = '123123';
    before(() => {
        // create project from api
        // create story from api
        dashboard = SingIn.loginAs(Config.username, Config.password);
        dashboard.openProjectById(projectID);
    });

    it('should create a new task on the of this story', () => {
        //test create task on story
    });

    // after delete project from api
});
