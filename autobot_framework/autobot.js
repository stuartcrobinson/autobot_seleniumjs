import { readFileSync } from 'fs';
import path from 'path';
import { Builder, logging } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import stringArgv from 'string-argv';
import yargsParse from 'yargs-parser';
import { Livy } from './support/Livy';
export { AbElement } from './support/AbElement';
export { Page } from './support/Page';
export { fxName } from './support/Tools';
import * as os from 'os'
// require('longjohn');

// const chrome = require('selenium-webdriver/chrome');

/******************************** config *************************************/
export let options = yargsParse(stringArgv(readFileSync('file.txt')));


// /******************************** browser ************************************/
// export async function loadPage(url) {
//     await driver.get(url);
// }


/**
 * TODO promisify this - return a promise
 * @param {String} file 
 */
export async function saveScreenshot(file) {

    driver.takeScreenshot()
        .then(
            function (image, err) {
                require('fs').writeFile(file, image, 'base64', function (err) {
                    if (err !== null) {
                        console.log("err: ");
                        console.log(err);
                    }
                });
            }
        );
    // throw new Error('dummy error from async function saveScreenshot(fil');

}

export function clarifyStack(stack) {
    const blackList = ['regenerator-runtime/runtime.js', 'at new Promise (<anonymous>)', '/lib/runnable.js', '/lib/runner.js', 'at runCallback (timers.js', 'at tryOnImmediate (timers', 'at processImmediate (timers'];
}

export async function getFullDom() {
    // https://stackoverflow.com/questions/19103635/executing-commands-using-selenium-webdriver-in-node-javascript
    return "not yet supported";
}

/******************************** hooks **************************************/

// /**
//  * 
//  * @param {*} d 
//  */
// function asdf(d){

// }

export let driver;
export let currentTest, currentSpec, currentTestCustom;
export let livy = new Livy();

beforeEach(function () {
    currentTest = this.currentTest;

    let fullName = "";

    let ancestor = currentTest;

    let testGrandparentsTitle = "";

    let count = 0;
    while (ancestor !== undefined) {

        fullName = ancestor.title + " " + fullName;

        if (count >= 2) {
            testGrandparentsTitle = ancestor.title + " " + testGrandparentsTitle;
        }

        ancestor = ancestor.parent;

        count++;
    }
    livy.initializeNewTestCase(currentTest.title, currentTest.parent.title, fullName, testGrandparentsTitle);

    livy.logTestStart();
});

afterEach(function () {
    console.log("afterEachafterEachafterEach");

    // if test passed, ignore, else take and save screenshot.
    if (this.currentTest.state === "passed") {
        livy.logPassed();
    }
    else {

        // let stackStr = "";
        // for (var i = 0; i < this.currentTest.err.length; i++) {
        //     stackStr += this.currentTest.err[i] + os.EOL;
        // }

        livy.logFailed(this.currentTest.err.stack);

        saveScreenshot(livy.getErrorScreenshotFileAbsPath());

        livy.logErrorImage();
    }

    const reportClickablePath = 'file://' + path.resolve(livy.getFile()) + '#' + livy.getSpacelessTestCaseFullTitle();

    console.log('\n\tReport:\n\t\t', reportClickablePath, '\n');
});

before(async function () {

    logging.installConsoleHandler();
    logging.getLogger('promise.ControlFlow').setLevel(logging.Level.ALL);

    driver = await new Builder()
        .forBrowser('chrome')
        // .setChromeOptions(new chrome.Options().headless().windowSize({ width: 1280, height: 753 }))
        .build();

    // .setChromeOptions(new chrome.Options().headless().windowSize(screen))

    // this.timeout(15000);

    // await driver.manage().setTimeouts(
    //     {
    //         implicit: 10000,
    //         pageLoad: 10000,
    //         script: 10000
    //     })
    // console.info(await driver.manage().getTimeouts())


    // livy.initialize();


    // for (var propName in this) {
    //     let propValue = this[propName]
    //     console.log("before: this:  " + propName, propValue);
    // }


    // // for (var propName in this['_runnable']) {
    // //     let propValue = this['_runnable'][propName]
    // //     console.log("before: this['_runnable']:  " + propName, propValue);
    // // }
    // for (var propName in this['test'].parent) {
    //     let propValue = this['test'].parent[propName]
    //     console.log("before: this['test'].parent:  " + propName, propValue);
    // }

    // console.log("this.test.parent.suites[0].tests[0].file")
    // console.log(this.test.parent.suites[0].tests[0].file)

    const filePath = this.test.parent.suites[0].tests[0].file

    livy.construct(filePath);

});

after(async function () {


    console.log("afterafterafterafter");

    // console.log("this");
    // console.log(this);

    // console.log("this.test");
    // console.log(this.test);
    // console.log("this.test.parent");
    // console.log(this.test.parent);

    // console.log(this);

    // for (var propName in this) {
    //     let propValue = this[propName]
    //     console.log("after: this:  " + propName, propValue);
    // }

    driver && driver.quit()
});
