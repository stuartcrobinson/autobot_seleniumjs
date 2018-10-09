// init.js
before(function () {
    // do async stuff
    console.log('in before!')
    // done();
});

after(function () {
    // do async stuff
    console.log('in after!')
    // done();
});// init.js

beforeEach(function () {
    // do async stuff
    console.log('in init beforeEach!')
    // done();
});

afterEach(function () {
    // do async stuff
    console.log('in init afterEach!')
    // done();


    for (var propName in this) {
        let propValue = this[propName]

        console.log("1. in init.js afterEach - this --   " + propName, propValue);
    }


    for (var propName in this.parent) {
        let propValue = this.parent[propName]

        console.log("1. in init.js afterEach - this.parent --   " + propName, propValue);
    }

});