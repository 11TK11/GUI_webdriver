// var assert = require('assert');
var expect = require('chai').expect;
describe('pivotal tracker page',function () {
    it('should be title', function () {
        browser.url('/');
        var title = browser.getTitle();
        console.log(title);
        //assert.equal(title,'Agile Project Management | Pivotal Tracker');
        expect(title).to.equal('Agile Project Management | Pivotal Tracker');
    });
});