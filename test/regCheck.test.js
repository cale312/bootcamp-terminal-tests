var regCheck = require('../regCheck.js');
const assert = require('assert');

describe('The regCheck function', function () {
    'use strict';
    it('Should return true if plate ends with "GP"', function () {
        assert.equal(true, regCheck('123 GP', 'GP'));
    });
    
    it('Should return false if plate does not end with "GP"', function () {
        assert.equal(false, regCheck('123 CJ', 'GP'));
    });
});