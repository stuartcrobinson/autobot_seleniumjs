import { By, until } from 'selenium-webdriver';
import { currentTest, driver, fxName, livy } from '../autobot';

export class AbElement {
    /**
     * 
     * @param {Page} that - to write parent class in logs
     * @param {String} name - to describe element in logs bc we shouldn't use readable selectors cos future multi language testing
     * @param {String} selector - xpath or css selector
     */
    constructor(selector) {
        this.selector = selector;
        try {
            this.parentString = this.getParentFromStack(new Error().stack);
        } catch (err) {
            this.parentString = "ERROR_GETTING_PARENT"
        }
        this.isLoadCriterion = false;
    }
    nameElements() {
        for (var propName in this) {
            let propValue = this[propName]
            if (propValue instanceof AbElement) {
                propValue.stuartname = propName
            }
        }
    }
    getParentFromStack(stack) {
        // console.log("stack");
        // console.log(stack);
        let line = stack.split(' at ')[2];

        // console.log("line");
        // console.log(line);
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



    async logAndWait(message, waiteeSelector) {

        var screenshotId = livy.logAction(message);
        if (waiteeSelector) {
            await this.waitForExist();
        }

        livy.setMouseoverEventScreenshotFunction(screenshotId)
    }

    async hover() {
        await this.logAndWait(`"${this.parentString}> ${fxName(new Error().stack)} ${this.stuartname} ${this.by}`,
            this.selector);

        // https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#move

        await driver
            .actions({ bridge: true })
            .move({ x: 0, y: 0, origin: this.getWebElement() })
            .perform();
    }

    async click() {
        await this.logAndWait(`"${this.parentString}> ${fxName(new Error().stack)} ${this.stuartname} ${this.by}`,
            this.selector);
        await this.getWebElement().click();

        console.log(new Error('clickdummy').stack)
        // throw new Error('dummy error from async click()');

    }


    async sendKeys(keys) {
        await this.logAndWait(`"${this.parentString}> ${fxName(new Error().stack)} "${keys}" to ${this.stuartname} ${this.by}`,
            this.selector);
        await this.getWebElement().sendKeys(keys);
    }

    async waitForExist(timeout) {
        const stack = new Error().stack;

        // console.log("stack1:")
        // console.log(stack)

        if (!timeout) {
            timeout = 5000;
        }
        try {
            await driver.wait(until.elementLocated(this.by), timeout);

        } catch (err) {
            console.log(err)
            currentTest.scrStack = stack

            // console.log("stack2:")
            // console.log(new Error().stack)
            throw new Error(`${fxName(stack)}: failed to locate "${this.parentString}> ${this.stuartname}" within ${timeout} ms ${this.by}`);
        }

    }

    async waitForNotExist(timeout) {

        const stack = new Error().stack;

        if (!timeout) {
            timeout = 5000;
        }
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
            currentTest.scrStack = stack
            throw new Error(`${fxName(stack)}: "${this.parentString}> ${this.stuartname}" still found after ${timeout} ms ${this.by}`);
        }
    }
}
