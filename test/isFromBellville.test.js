var isFromBellville = require('../isFromBellville.js');
const assert = require('assert');

describe('The isFromBellville function', function () {
    'use strict';
    it('should return true', function () {
        assert.equal(true, isFromBellville('CY 123'));
    });
    
    it('should return false', function () {
        assert.equal(false, !isFromBellville('CY 123'));
    });
});