import { Page, AbElement, currentTest } from "../../../autobot";

export const googlePage = new class Google{
    constructor() { this.url = 'https://www.google.com'; }

    get aboutLink() { return new AbElement('//*[text()="About"]') };

    get testTitle() { return currentTest.title;}

}();
