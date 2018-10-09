const { Browser, Builder, By, Key, until } = require('selenium-webdriver');
export  {AbElement} from './support/AbElement';
export  {Page} from './support/Page';

var fs = require('fs');
var stringArgv = require('string-argv');
var yargsParse = require('yargs-parser');


console.log("here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")


// for (let j = 0; j < process.argv.length; j++) {  
//     console.log(j + ' -> ' + (process.argv[j]));
// }

// console.log("file contents!!!! " + fs.readFileSync('file.txt'));


let argv = stringArgv(fs.readFileSync('file.txt'));

// for (let i = 0; i < argv.length; i++) {
//     argv[i] = '--' + argv[i]
// }

export let options = yargsParse(argv);
console.log(options);

// timeout(15000);

export function throwerror() {
    throw new Error('dummy error to test stacktrace debugging');
}

beforeEach(function () {
    currentTest = this.currentTest;
});
afterEach(function () {
});

export let driver;
export let currentTest;

before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    // this.timeout(15000);

    // await driver.manage().setTimeouts(
    //     {
    //         implicit: 10000,
    //         pageLoad: 10000,
    //         script: 10000
    //     })
    console.info(await driver.manage().getTimeouts())

    console.log('autobot before!')

    Livy.initialize();

});

after(() => {
    console.log('autobot after!')

    driver && driver.quit()
});

export async function loadPage(url) {
    await driver.get(url);
}



export class Livy {

    static async initialize() {
        //build log file tree
        //print log file header (test file name, date, fun fact, etc)
        console.log("in initialize livy")
    }


    //write absolute and relative filepath getters

    //write loggers:  how to deal with different styles and colors in console and html?

}









/**********************************************************
************************* Testing *************************
**********************************************************/

// //v1 - not clickable links through files

// module.exports['Rectangle'] =
//     class Rectangle {
//         constructor(height, width) {
//             this.height = height;
//             this.width = width;
//         }
//     };


// module.exports['circle'] =
//     new class Circle {
//         constructor(radius) {
//             this.radius = radius;
//         }
//     }(99);


//v2

export class Triangle {
    constructor(height) {
        this.height = height;
    }
}
export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
export const circle = new class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}(67);
