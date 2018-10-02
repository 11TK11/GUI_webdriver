const Page = require('./Page');
class Project extends Page {
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
    }
}
module.exports = Project;
