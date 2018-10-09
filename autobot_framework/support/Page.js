import {AbElement} from '../autobot'


export class Page {
    async waitForStableDom() {
        throw new Error("not yet implemented.  see original wdio autobot project: https://github.com/stuartcrobinson/autobot");
    }

    nameElements() {
        for (var propName in this) {
            let propValue = this[propName]
            if (propValue instanceof AbElement) {
                propValue.name = propName
            }
        }
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
            await element.waitForExist();
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