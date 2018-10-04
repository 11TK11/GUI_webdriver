const SingIn = require('../pages/SignIn');
let username = '';
let password = '';
describe('pivotal tracker page new project', () => {

    let dashboard;
    let projectData1 = {
        name: 'test1',
        account: 'Kev SD\'s Projects'
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
        dashboard.createProject(projectData1);
    });
    it('should create a new public project with second account', () => {
        dashboard.createProject(projectData2);
    });
    it('should not create a new private project with any account', () => {
        dashboard.createProject(projectData3);
    });
    it('should create a new private project with a new account', () => {
        dashboard.createProject(projectData4);
    });
});
