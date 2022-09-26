/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-enviroment jsdom
 */

var assert = require('assert')
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
    })
})
