const countAllFromTown = require('../countAllFromTown.js');
const assert = require('assert');

describe('The countAllFromTown function', function () {
    'use strict';
    it('Should return the length of the plates that start with "CL"', function () {
        assert.equal(2, countAllFromTown('CL 123, CJ 123, CL 123'));
    });
});