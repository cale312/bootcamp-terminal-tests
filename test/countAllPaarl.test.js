const countAllPaarl = require('../countAllPaarl.js');
const assert = require ('assert');

describe('countFromPaarl function', function () {
    'use strict';
    it('Should return the lenght of the plates that start with "CJ"', function () {
        assert.equal(2, countAllPaarl('CJ 123, CL 123, CJ 123'));
    });
});
