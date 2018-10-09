import {currentTest} from '../autobot'


/**
 * 
 */
export class AbElement {
    /**
     * 
     * @param {Page} that - to write parent class in logs
     * @param {String} name - to describe element in logs bc we shouldn't use readable selectors cos future multi language testing
     * @param {String} selector - xpath or css selector
     */
    constructor(selector) {
        this.selector = selector;
        this.parentString = this.getParentFromStack(new Error().stack);
        this.isLoadCriterion = false;
    }
    getParentFromStack(stack) {
        let line = stack.split(' at ')[2];
        let endPart = line.split('src/support/')[1];
        let result = endPart.split('.js')[0];
        return result;
    }
    tagAsLoadCriterion() {
        this.isLoadCriterion = true;
        return this;
    }

    get by() {
        if (this.selector.startsWith("//")) {
            return By.xpath(this.selector);
        }
        else {
            return By.css(this.selector);
        }
    }

    getWebElement() {
        return driver.findElement(this.by);
    }

    getChild(selector) {

        if ((this.selector.startsWith("//") && !selector.startsWith("//")) || (!this.selector.startsWith("//") && selector.startsWith("//"))) {
            throw new Error(`Parent and child elements must have selectors of the same time. Parent: <${this.selector}>, Child: <${selector}>.`)
        }
        return new AbElement(this.selector + selector);
    }

    async click() {
        await this.waitForExist();
        await this.getWebElement().click();
    }


    async sendKeys(keys) {
        console.log("in sendKeys: " + keys)
        await this.waitForExist();
        await this.getWebElement().sendKeys(keys);
    }

    async waitForExist() {
        const timeout = 1000;
        try {
            await driver.wait(until.elementLocated(this.by), timeout);
        } catch (err) {
            currentTest.scrStack = new Error().stack
            throw new Error(`waitForExist: failed to locate "${this.name}" within ${timeout} ms ${this.by}`);
        }
    }

    async waitForNotExist() {
        const timeout = 5000;
        let _this = this;

        try {
            await driver.wait(async function () {
                try {
                    await _this.getWebElement();
                    return false;
                }
                catch (err) {
                    return true;
                }
            }, timeout);
        } catch (err) {
            currentTest.scrStack = new Error().stack
            throw new Error(`waitForNotExist: "${this.name}" still found after ${timeout} ms ${this.by}`);
        }
    }
}
