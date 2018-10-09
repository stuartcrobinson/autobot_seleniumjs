var assert = require('assert');
var asdf = require('./helpers');

describe('Array2', function () {

    describe("top DESCRIBE", function () {
        console.log(this.title);
        console.log(this.fullTitle());

        it("test IT", function () {
            console.log(this.test.title);
            console.log(this.test.parent.title);
            console.log(this.test.fullTitle());


            // for (var propName in this.test) {
            //     let propValue = this.test[propName]

            //     console.log( "1 in test IT -- this.test --   " + propName, propValue);
            // }


            // for (var propName in this) {
            //     let propValue = this[propName]

            //     console.log("2 in test IT -- this --   " + propName, propValue);
            // }



            // for (var propName in this.test.parent) {
            //     let propValue = this.test.parent[propName]

            //     console.log("3 in test IT -- this.test.parent --   " + propName, propValue);
            // }

        });
    });

    describe('#indexOf()2', function () {

        beforeEach(function () {
            // do async stuff
            console.log('2 in  beforeEach!')
            // done();
        });

        afterEach(function () {
            // do async stuff
            console.log('2 in  afterEach!')
            // done();
        });

        before(function () {
            // do async stuff
            console.log('2 in  before!')
            console.log(this.test.file)
            // done();



            for (var propName in this) {
                let propValue = this[propName]

                console.log("3 #indexOf()2  before - this: --   " + propName, propValue);
            }
        });

        after(function () {
            // do async stuff
            console.log('2 in  after!')
            // done();
        });


        it('2should return -1 when the value is not present 1', function () {
            console.log('2 Array #indexOf()')
            assert.equal(1, 2);
        });

        it('2should return -1 when the value is not present 2', function () {
            console.log('2 Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('2should return -1 when the value is not present 3', function () {
            console.log('2 Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('2should return -1 when the value is not present 4', function () {
            console.log('2 Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

    });

});