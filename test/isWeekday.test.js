const isWeekday = require('../isWeekday.js');
const assert = require('assert');

describe('isWeekeday function', function () {
    'use strict';
    it('Should return true if the day passed is a weekDay', function () {
        assert.equal(true, isWeekday('Monday'));
    });
    it('Seould return false if the day passed is a weekEnd', function () {
        assert.equal(false, isWeekday('Sunday'));
    })
});