const assert = require('assert');
const autobot = require('../../autobot');


const { Browser, Builder, By, Key, until } = require('selenium-webdriver');
const { ignore, suite } = require('selenium-webdriver/testing');


// const { Browser, Builder, By, Key, until } = require('selenium-webdriver');
// const { ignore, suite } = require('selenium-webdriver/testing');

import { AbElement, driver } from '../../autobot';
import { googlePage } from '../../object/wordsmith/page/google';

// var asdf = require('../../object/wordsmith/page/google')

console.log("here######################")


// suite(function (env) {
describe('Google Search 2222222 3', function () {

    it('demo2222222222 3', async function () {
        console.log('andrey_dobra')


        // const abEl = new AbElement(`//*[@name='q']`);

        // await driver.get('https://www.google.com/ncr');

        await autobot.loadPage(googlePage.url);


        await googlePage.aboutLink.click();

        console.log("googlePage.testTitle: 3 : " + googlePage.testTitle);


        // const asdf = new AbElement('//*[text()="About"]');

        // await asdf.click();
        // abEl.sendKeys('lalalal');

        // await driver.findElement(By.name('q')).sendKeys('lalala', Key.RETURN);
        await driver.wait(until.titleIs('Our latest | Google'), 1000);
        console.log("goo3 messag 1");
        await driver.sleep(1000);
        console.log("goo3 messag 2");
        await driver.sleep(1000);
        console.log("goo3 messag 3");
        await driver.sleep(1000);
        console.log("goo3 messag 4");
        await driver.sleep(1000);
    });
    it('demo2222222222 222! 3', async function () {
        // this.timeout(10000);
        // console.log('andrey_dobra 2')
        // await driver.wait(until.titleIs('lalala - Google Search'), 1000);
        console.log("googlePage.testTitle: 3 : " + googlePage.testTitle);

    });
    it('demo2222222222 222 fail!! 3', async function () {
        // // this.timeout(10000);
        // console.log('andrey_dobra 2')
        // assert(false, "should be false just to fail the test");
        console.log("googlePage.testTitle: 3 : " + googlePage.testTitle);

    });

    // // // The ignore function returns wrappers around describe & it that will
    // // // suppress tests if the provided predicate returns true. You may provide
    // // // any synchronous predicate. The env.browsers(...) function generates a
    // // // predicate that will suppress tests if the  env targets one of the
    // // // specified browsers.
    // // //
    // // // This example is always configured to skip Chrome.
    // // ignore(env.browsers(Browser.CHROME)).it('demo 2', async function () {
    // //     this.timeout(10000);

    // //     await driver.get('http://www.google.com/ncr');
    // //     let url = await driver.getCurrentUrl();
    // //     assert.equal(url, 'https://www.google.com/');
    // // });


    after(() => {
        console.log('file after!')

        driver && driver.quit()
    });
});
// });





// const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
//     test = require('selenium-webdriver/testing'),
//     assert = require('assert');

// describe('PortfolioTestsAsyncAwait', function () {
//     before(async function () {
//         // driver = await new Builder().forBrowser('chrome').build();
//         driver = await new Builder().forBrowser('chrome').build();

//     });

//     it('01 Drums Access Await', async function () {
//         await driver.get('http://www.google.com/ncr');
//         await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//         await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

//     });
//     after(async function () {
//         await driver.quit()
//     });
// });



//   const {webdriver, Builder, By, Key, until} = require('selenium-webdriver'),
//   test = require('selenium-webdriver/testing'),
//   assert = require('assert');

//   test.describe('PortfolioTestsAsyncAwait', function() {
//       test.before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//       });

//       test.it('01 Drums Access Await', async function () {
//         await driver.get("https://andreidbr.github.io/JS30/");

//         const drumsLink = await driver.findElement(By.xpath('/html/body/div[2]/div[1]'));
//         await drumsLink.click();

//         const pageTitle = await driver.getTitle();
//         await assert.equal(pageTitle, "JS30: 01 Drums");
//       }
//     )
//     test.after(async function() { await driver.quit()});
//   });