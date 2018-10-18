// import L from '../../autobotElement';
import { AbElement } from '../../../../autobot_framework/autobot';


export const toaster = new class Toaster extends AbElement {

    constructor(message) {
        const container = new AbElement('//div[contains(@class, "loaded-message")]');

        if (message) {
            return super(container.getChild('//*[contains(text(),"' + message + '")]/..').selector);
        }
        else {
            super(container.selector);
        }

        this.xCloseIcon = this.getChild('//i[@title="Dismiss alert"]');
        this.messageSpan = this.getChild('//span[contains(@class="message__text"]');
        super.nameElements();
    }

    // get xCloseIcon() { return this.getChild('//i[@title="Dismiss alert"]'); }
    // get messageSpan() { return this.getChild('//span[contains(@class="message__text"]'); }

    async close() {
        await this.xCloseIcon.click();
        // browser.waitUntil(() => (!browser.isExisting(this.xCloseIcon.selector)));
        await this.xCloseIcon.waitForNotExist()
    }

    async getMessage() {
        return await this.messageSpan.getWebElement().getText();
    }

    /**
     * Not supported for messages that contain apostrophes!
     * @param {*} message 
     */
    withMessage(message) {
        if (message.includes('"') || message.includes("'")) {
            throw new Error("Apostrophes not yet supported.  This sounds like a good job for you.");
        }
        return new Toaster(message);
    }
}();

// export default new ToasterComp();



// import { assert } from 'chai';
// import { AbElement, Page } from "../../../../autobot_framework/autobot";

// export const loginPage = new class Login extends Page {

//     constructor() {
//         super();
//         this.emailInput = new AbElement('input.email').tagAsLoadCriterion();
//         this.passwordInput = new AbElement('input.password').tagAsLoadCriterion();
//         this.logInButton = new AbElement('input[value="Log In"]');
//         super.nameElements();
//     }

//     async logIn(email, password, url) {

//         assert.isDefined(email, "email should be defined")
//         assert.isDefined(password, "password should be defined")

//         // await loadPage(url);

//         // super.
//         await this.loadPage(url);

//         // console.log("page is loaded");

//         // var screenshotId = livy.logAction("Load " + url);
//         // livy.setMouseoverEventScreenshotFunction(screenshotId);

//         await this.emailInput.sendKeys(email);
//         await this.passwordInput.sendKeys(password);
//         await this.logInButton.click();
//     }

// }();
