'use strict';
const TIME_TO_WAIT = 30000;
const PAUSE_TIME = 20000;

/**
 * CommonActions class with CommonActions Methods.
 */
class CommonActions {

    /**
     * Method to wait for an element to be visible to get the text.
     * @param elementCSS WebElement locator.
     */
    static waitAndGetText(elementCSS) {
        browser.waitForVisible(elementCSS, TIME_TO_WAIT);
        return browser.getText(elementCSS);
    }

    /**
     * Wait for element to be visible to set the value
     * @param elementCSS
     * @param value
     */
    static waitAndSetValue(elementCSS, value) {
        browser.waitForVisible(elementCSS, TIME_TO_WAIT);
        browser.setValue(elementCSS,value);
    }

    /**
     * Wait for element to be visible to click
     * @param elementCSS
     */
    static waitAndClick(elementCSS) {
        browser.waitForVisible(elementCSS,TIME_TO_WAIT);
        browser.click(elementCSS);
    }

    /**
     * Wait for element to be visible to click
     * @param elementCSS
     */
    static waitAndDoubleClick(elementCSS) {
        browser.waitForVisible(elementCSS,TIME_TO_WAIT);
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
     * Method to return a element.
     * @param elementCSS WebElement locator.
     * @returns WebElement.
     */
    static getElements(elementCSS) {
        browser.waitForExist(elementCSS);
        return browser.elements(elementCSS);
    }

    /**
     * Method to set WebElement value.
     * @param elementCSS WebElement locator.
     * @param text to set
     */
    static setInputTextField(elementCSS, text) {
        browser.waitForExist(elementCSS);
        browser.element(elementCSS).setValue(text);
    }

    /**
     * Method which wait for an element
     * to be visible.
     * @param elementCSS
     */
    static waitVisibleElement(elementCSS) {
        browser.waitForVisible(elementCSS, TIME_TO_WAIT);
    }

    /**
     * Method to get the title of the page
     * after it loads.
     * @returns {*}
     */
    static waitGetTitle() {
        browser.pause(PAUSE_TIME);
        return browser.getTitle();
    }

    static waitAndGetValue(elementCSS) {
        browser.waitForExist(elementCSS);
        browser.getValue(elementCSS);
    }
}

module.exports = CommonActions;
