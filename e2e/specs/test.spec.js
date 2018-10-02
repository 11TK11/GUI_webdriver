var assert = require('assert');
var SingIn = require('../pages/SignIn');
var Dashboard = require('../pages/Dashboard');
var username = 'kevin.sanchezpeep@gmail.com';
var password = '72495431TANIAtk!';
describe('pivotal tracker page new project',function () {

    let dashboard;
    let projectData1 = {
        name: "test1",
        account: "1",
        privacy: "private"
    };
    let projectData2 = {
        name: "test2",
        account: "2",
        privacy: "public"
    };
    let projectData3 = {
        name: "test3",
        account: "0",
        privacy: "private"
    };
    let projectData4 = {
        name: "test4",
        account: "-1",
        privacy: "public"
    };

    beforeEach(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should create a new private project with first account',()=>{
        Dashboard.createProject(projectData1);
    });
    it('should create a new public project with second account');
});