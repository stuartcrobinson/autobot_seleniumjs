import { AbElement, driver } from '../autobot';
// import {driver} from ''


export class Page {
    async waitForStableDom() {
        throw new Error("not yet implemented.  see original wdio autobot project: https://github.com/stuartcrobinson/autobot");
    }

    nameElements() {
        for (var propName in this) {
            let propValue = this[propName]
            if (propValue instanceof AbElement) {
                propValue.stuartname = propName
            }
        }
    }

    async loadPage(url) {
        await driver.get(url);
        // console.log("here after get url " + url)
        await this.waitForLoad();
    }


    get loadCriteriaElements() {
        let abElements = [];

        for (var propName in this) {
            let propValue = this[propName]
            if (propValue instanceof AbElement && propValue.isLoadCriterion) {
                abElements.push(propValue);
            }
        }
        return abElements;
        //
    }

    async waitForLoad() {

        for (let i = 0; i < this.loadCriteriaElements.length; i++) {
            let element = this.loadCriteriaElements[i];
            // console.log("here waitForLoad: " + element);
            // console.log(element)

            await element.waitForExist(12000);
        }
    }

    async isLoaded() {

        for (let i = 0; i < this.loadCriteriaElements.length; i++) {
            let element = this.loadCriteriaElements[i];
            await element.getWebElement();
        }
        return true;
    }
}