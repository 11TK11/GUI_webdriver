const Page = require('./Page');
class Story extends Page {
    open(projectId) {
        super.open(`/n/projects/${projectId}`);
    }
    clickAddStoryButton() {
        browser.click('Sidebar__addStory__wMyRzEAE');
    }
    setStoryTitle(storyTitle) {
        browser.setValue('#NameEdit--c234', storyTitle);
    }
}
module.exports = Story;
