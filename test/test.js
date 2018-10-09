var assert = require('assert');
var asdf = require('./helpers');


// for (let j = 0; j < process.argv.length; j++) {  
//     console.log(j + ' -> ' + (process.argv[j]));
// }

describe('Array', function () {

    describe('#indexOf()', function () {

        beforeEach(function () {
            // do async stuff
            console.log('1 in  beforeEach!')
            // done();
        });

        afterEach(function () {
            // do async stuff
            console.log('1 in  afterEach!')
            // done();
        });

        before(function () {
            // do async stuff
            console.log('1 in  before!')
            // done();
        });

        after(function () {
            // do async stuff
            console.log('1 in  after!')
            // done();
        });

        it('should return -1 when the value is not present 1', function () {
            console.log('Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return -1 when the value is not present 2', function () {
            console.log('Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return -1 when the value is not present 3', function () {
            console.log('Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return -1 when the value is not present 4', function () {
            console.log('Array #indexOf()')
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

    });

});