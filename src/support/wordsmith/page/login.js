import { Page, AbElement, currentTest, loadPage, driver } from "../../../../autobot_framework/autobot";
var assert = require('chai').assert;



export const loginPage = new class Login extends Page{

    // constructor() { this.url = 'https://www.google.com'; }

    constructor(){
        super(null);
        // this.cat = "kitty cat";
        this.emailInput = new AbElement('input.email').tagAsLoadCriterion();
        this.passwordInput = new AbElement( 'input.password').tagAsLoadCriterion(); 
        this.logInButton = new AbElement( 'input[value="Log In"]'); 
        // super.loadCriteriaElements = [this.emailInput, this.passwordInput];

        super.nameElements();
        console.log("this.loadCriteriaElements");
        console.log(this.loadCriteriaElements);

    }

    // get emailInput() { return new AbElement(this, 'emailInput', 'input.email'); }
    // get passwordInput() { return new AbElement(this, 'passwordInput', 'input.password'); }
    // get logInButton() { return new AbElement(this, 'logInButton', 'input[value="Log In"]'); }


    async logIn(email, password, url) {

        assert.isDefined(email, "email should be defined")
        assert.isDefined(password, "password should be defined")

        //TODO how to deal with opens?  declare per test?  embed in certain/all actions?
        // autobot.goToUrl(url);

        //TODO move this to autobot or something.  but why says "not a function" ?????
        // browser.url(url);
        await loadPage(url);
        // var screenshotId = livy.logAction("Load " + url);
        // livy.setMouseoverEventScreenshotFunction(screenshotId);

        await this.emailInput.sendKeys(email);
        await this.passwordInput.sendKeys(password);
        await this.logInButton.click();
        // this.logInButton.waitForNotExist();  //this can't be here for when we want to test invalid login creds
        // so actions must confirm they're at the right spot BEFORE execution


        // LoginPage.open();
        // LoginPage.emailInput.setValue(email);
        // LoginPage.passwordInput.setValue(password);
        // LoginPage.logInButton.click();
        // LoginPage.logInButton.waitForNotExist();
    }

}();
