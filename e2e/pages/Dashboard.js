const Workspaces = require('./Workspaces');
const Project = require('./Project');
const CommonActions = require('../core/ui/CommonActions.js');
const config = require('../../config.json');

/**
 * this class contains methods of dashboard.
 */
class Dashboard {
    constructor() {
        this.createProjectButton = '#create-project-button';
        this.createWorkspaceButton = '#create-workspace-button';
        this.workspacesTab = 'span[class="Dashboard__Tabs__tab"]';
    }

    static clickCreateProjectButton() {
        CommonActions.waitAndClick('#create-project-button');
        return new Project();
    }

    static clickCreateWorkspaceButton() {
        CommonActions.waitAndClick('#create-workspace-button');
        return new Workspaces();
    }

    static switchTabs() {
        CommonActions.waitAndClick('span[class="Dashboard__Tabs__tab"]');
    }

    static openProjectById(projectId) {
        browser.url(config.home_page_url.concat(`/n/projects/${projectId}`));
        return new Project();
    }

}
module.exports = Dashboard;
