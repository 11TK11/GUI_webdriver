const assert = require('assert');
const request = require('request');
const SingIn = require('../pages/SignIn');
const Dashboard = require('../pages/Dashboard');
let username = '';
let password = '';
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

    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should create a new private project with first account',()=>{
        Dashboard.createProject(projectData1);
    });
    it('should create a new public project with second account',()=>{
        Dashboard.createProject(projectData2);
    });
    it('should not create a new private project with any account',()=>{
        Dashboard.createProject(projectData3);
    });
});