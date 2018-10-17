const SingIn = require('../pages/SignIn');
let username = 'hapsneeze';
let password = 'test12345';
describe('pivotal tracker page new project', () => {

    let dashboard;
    let project;
    let projectData1 = {
        name: 'test1',
        account: 'TEST'
    };
    let projectData2 = {
        name: 'test2',
        account: 'testAccount',
        privacy: 'public'
    };
    let projectData3 = {
        name: 'test3',
        privacy: 'private'
    };
    let projectData4 = {
        name: 'test4',
        account: 'newAccount',
        privacy: 'public'
    };

    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should create a new private project with first account', () => {
        project = dashboard.createProject(projectData1);
        expect(`${projectData1.name} - Pivotal Tracker`).to.equal(project.getProjectName());
        //TODO add assert on dashboard page
    });
    it('should create a new public project with second account', () => {
        project = dashboard.createProject(projectData2);
        expect(`${projectData2.name} - Pivotal Tracker`).to.equal(project.getProjectName());
    });
    it('should not create a new private project with any account', () => {
        project = dashboard.createProject(projectData3);
        expect(`${projectData3.name} - Pivotal Tracker`).to.not.equal(project.getProjectName());
    });
    it('should create a new private project with a new account', () => {
        project = dashboard.createProject(projectData4);
        expect(`${projectData4.name} - Pivotal Tracker`).to.equal(project.getProjectName());
    });
});
