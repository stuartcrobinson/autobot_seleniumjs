import { Page, AbElement, currentTest, loadPage, driver } from "../../../../autobot_framework/autobot";
var assert = require('chai').assert;


const getNewProjectButton = () => { return new AbElement('//button[text()="New Project"]'); }
const getProjectsTabLink = () => { return new AbElement('//a[text()="Projects"]'); }


export const dashboardPage = new class Dashboard extends Page {

    // constructor() { this.url = 'https://www.google.com'; }


    // constructor() {
    //     super(getNewProjectButton(), getProjectsTabLink());
    //     this.cat = "kitty cat";
    //     //TODO start here -- build the waitForLoad and isLoaded in Page
    // }


    constructor() {
        super();
        // this.cat = "kitty cat";
        //TODO start here -- build the waitForLoad and isLoaded in Page


        // console.log("dashboard page construction sstttttttack!")
        // console.log(new Error().stack)


        this.newProjectButton = new AbElement('//button[text()="New Project"]').tagAsLoadCriterion();
        this.newProjectDropdown = new AbElement('//button[text()="New Project"]/following-sibling::div[@class="dropdown"]');
        this.createCsvDropdownOption = new AbElement('//a[text()="Create CSV"]');
        this.uploadCsvDropdownOption = new AbElement('//a[text()="Upload CSV"]');
        this.projectsTabLink = new AbElement('//a[text()="ProjecXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXts"]');
        this.downloadsTabLink = new AbElement('//a[text()="Downloads"]').tagAsLoadCriterion();


        // super.loadCriteriaElements = [this.newProjectButton, this.projectsTabLink];

        // console.log("this in dashboard constr")
        // console.log(this)


        // for (var propName in this) {
        //     let propValue = this[propName]

        //     console.log("dashboardPage constructor this:  " + propName, propValue);
        // }

        super.nameElements();
        console.log("this.loadCriteriaElements");
        console.log(this.loadCriteriaElements);
    }


    // get newProjectButton() { return new AbElement('newProjectButton', '//button[text()="New Project"]'); }
    // get newProjectDropdown() { return new AbElement('newProjectDropdown', '//button[text()="New Project"]/following-sibling::div[@class="dropdown"]'); }
    // get createCsvDropdownOption() { return new AbElement('createCsvDropdownOption', '//a[text()="Create CSV"]'); }
    // get uploadCsvDropdownOption() { return new AbElement('uploadCsvDropdownOption', '//a[text()="Upload CSV"]'); }
    // get projectsTabLink() { return new AbElement('projectsTabLink', '//a[text()="Projects"]'); }
    // get downloadsTabLink() { return new AbElement('downloadsTabLink', '//a[text()="Downloads"]'); }



}();
