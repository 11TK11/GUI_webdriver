const SignIn = require('../../pages/SignIn');
const config = require('../../../config.json');
const {Given} = require('cucumber');

Given(/^I log in as "([^"]*)"$/, username => {
    let password = username.replace('username','password');
    SignIn.loginAs(config[username], config[password]);
});


