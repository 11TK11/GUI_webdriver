const {Given, Then, When} = require('cucumber');
const SingIn = require('../../pages/SignIn');
const RequestManager = require('../../core/api/RequestManager');
const config = require('../../../config.json');
const CommonActions = require('../../core/ui/CommonActions.js');

let project;
let story;
let projectID ;
let rowsHash;

Given(/^user is on Pivotal Page$/, function () {
    let postProjectData = { name:'project created from api '+ new Date().getMilliseconds()};
    let response = browser.call(() => RequestManager.post('/projects', postProjectData));
    projectID = response.data.id;
    let dashboard = SingIn.loginAs(config.username, config.password);
    project = dashboard.openProjectById(projectID);
});

When(/^I click the Add story button$/, function () {
    story = project.clickAddStoryButton();
});

When(/^I create a new story with fields:$/, function (dataTable) {
    rowsHash = dataTable.rowsHash();
    story.setStoryTitleField(rowsHash.name);
});

When(/^I click on save button$/, function () {
    story.clickSaveStoryButton();
});

Then(/^I verify if the Story is created$/, function () {
    var elementValue = CommonActions.waitAndGetText('span[class="tracker_markup"]');
    expect(elementValue).to.equal(rowsHash.name);
});

Then(/^I verify the use requester is the user logged$/, function () {
    //Expand the element
    CommonActions.waitAndClick('button[class="expander undraggable"]');
    var userValue = CommonActions.waitAndGetText('div[class="name hbsAvatarName"]');
    //Click on profile
    CommonActions.waitAndClick('button[aria-label="Profile Dropdown"]');
    var userLogged = CommonActions.waitAndGetText('div[class="AvatarDetails__name"]');
    expect(userValue).to.equal(userLogged);
});
