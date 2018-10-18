import { assert } from 'chai';
import { AbElement, Page } from "../../../../autobot_framework/autobot";
import {toaster} from '../component/toaster'

export const loginPage = new class Login extends Page {

    constructor() {
        super();
        this.emailInput = new AbElement('input.email').tagAsLoadCriterion();
        this.passwordInput = new AbElement('input.password').tagAsLoadCriterion();
        this.logInButton = new AbElement('input[value="Log In"]');
        this.toaster_signedOutSuccessfully = toaster.withMessage("Signed out successfully."); 
        this.toaster_invalidEmailOrPwd = toaster.withMessage("Invalid Email or password."); 
        super.nameElements();
    }

    // get toaster_signedOutSuccessfully() { return ToasterComp.withMessage("Signed out successfully."); }
    // get toaster_invalidEmailOrPwd() { return ToasterComp.withMessage("Invalid Email or password."); }


    async logIn(email, password, url) {

        assert.isDefined(email, "email should be defined")
        assert.isDefined(password, "password should be defined")

        // await loadPage(url);

        // super.
        await this.loadPage(url);

        // console.log("page is loaded");

        // var screenshotId = livy.logAction("Load " + url);
        // livy.setMouseoverEventScreenshotFunction(screenshotId);

        await this.emailInput.sendKeys(email);
        await this.passwordInput.sendKeys(password);
        await this.logInButton.click();

    }

}();
