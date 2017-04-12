var countRegNumber = require('../countRegNumber.js');
var assert = require('assert');

describe('The countRegnumber function', function () {
    'use strict';
    it('Should return the length of the entered plates', function () {
        assert.equal(3, countRegNumber('d,d,d'));
    });
});