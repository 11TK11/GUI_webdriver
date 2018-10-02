const Page = require('./Page');
class Project {
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
    }
}
module.exports = Project;
