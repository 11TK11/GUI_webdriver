'use strict';
//TODO set uppercase const
const timeToWait = 30000;
const pauseTime = 20000;

/**
 * CommonActions class with CommonActions Methods.
 */
class CommonActions {

    /**
     * Method to wait for an element to be visible to get the text.
     * @param elementCSS WebElement locator.
     */
    //TODO remove wait from methods names
    static waitAndGetText(elementCSS) {
        browser.waitForVisible(elementCSS,timeToWait);
        return browser.getText(elementCSS);
    }

    /**
     * Wait for element to be visible to set the value
     * @param elementCSS
     * @param value
     */
    static waitAndSetValue(elementCSS, value) {
        browser.waitForVisible(elementCSS,timeToWait);
        browser.setValue(elementCSS,value);
    }

    /**
     * Wait for element to be visible to click
     * @param elementCSS
     */
    static waitAndClick(elementCSS) {
        browser.waitForVisible(elementCSS,timeToWait);
        browser.click(elementCSS);
    }

    /**
     * Wait for element to be visible to click
     * @param elementCSS
     */
    static waitAndDoubleClick(elementCSS) {
        browser.waitForVisible(elementCSS,timeToWait);
        browser.doubleClick(elementCSS);
    }
    /**
     * Method to click on element.
     * @param elementCSS WebElement locator.
     */
    static clickWebElement(elementCSS) {
        this.moveToComponent(elementCSS);
        browser.click(elementCSS);
    }

    /**
     * Method to return a element.
     * @param elementCSS WebElement locator.
     * @returns WebElement.
     */
    static getElement(elementCSS) {
        browser.waitForExist(elementCSS);
        return browser.element(elementCSS);
    }

    /**
     * Method to set WebElement value.
     * @param elementCSS WebElement locator.
     */
    static setInputTextField(elementCSS, value) {
        browser.waitForExist(elementCSS);
        browser.element(elementCSS).setValue(value);
    }

    /**
     * Method which wait for an element
     * to be visible.
     * @param elementCSS
     */
    static waitVisibleElement(elementCSS) {
        browser.waitForVisible(elementCSS, timeToWait);
    }

    /**
     * Method to get the title of the page
     * after it loads.
     * @returns {*}
     */
    static waitGetTitle() {
        browser.pause(pauseTime);
        return browser.getTitle();
    }
}

module.exports = CommonActions;
