const axios = require('axios');
const API_PROJECTS_URL = 'https://www.pivotaltracker.com/services/v5/projects';
const API_WORKSPACE_URL = 'https://www.pivotaltracker.com/services/v5/my/workspaces';
class APIPivotalManager {
    static RequestPostProject(token, body) {
        axios({
            method: 'POST',
            url: API_PROJECTS_URL,
            headers: {'X-TrackerToken': token, 'Content-Type':'application/json'},
            data: body
        });
    }
    static RequestDeleteProject(token, projectID) {
        axios({
            method: 'DELETE',
            url: API_PROJECTS_URL.concat(`/${projectID}`),
            headers: {'X-TrackerToken': token}
        });
    }
    static RequestPostWorkspace(token, body) {
        axios({
            method: 'POST',
            url: API_WORKSPACE_URL,
            headers: {'X-TrackerToken': token, 'Content-Type':'application/json'},
            data: body
        });
    }
    static RequestDeleteWorkspace(token, workspaceID) {
        axios({
            method: 'DELETE',
            url: API_WORKSPACE_URL.concat(`/${workspaceID}`),
            headers: {'X-TrackerToken': token}
        });
    }
}
module.exports = APIPivotalManager;
