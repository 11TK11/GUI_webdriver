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

    clickCreateProjectButton() {
        CommonActions.waitAndClick(this.createProjectButton);
        return new Project();
    }

    clickCreateWorkspaceButton() {
        CommonActions.waitAndClick(this.workspacesTab);
        CommonActions.waitAndClick(this.createWorkspaceButton);
        return new Workspaces();
    }

    openProjectById(projectId) {
        browser.url(config.home_page_url.concat(`/n/projects/${projectId}`));
        return new Project();
    }
}
module.exports = Dashboard;
