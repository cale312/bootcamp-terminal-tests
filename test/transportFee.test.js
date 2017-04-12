var transportFee = require('../transportFee.js');
var assert = require('assert');

describe('The transportFee function', function () {
    'use strict';
    it('It should return R20 if passed in morning', function () {
        it('R20', transportFee('morning'));
    });
    
    it('It should return R10 if passed in afternoon', function () {
        it('R10', transportFee('afternoon'));
    });
    
    it('It should return free if passed in nightshift', function () {
        it('free', transportFee('nightshift'));
    });
    
});