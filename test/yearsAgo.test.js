var yearsAgo = require('../yearsAgo.js');
var assert = require('assert');

describe('The yearsAgo function', function () {
    'use strict';
    it('Should return the number of years ago', function () {
        assert.equal(21, yearsAgo(1996));
    });
});