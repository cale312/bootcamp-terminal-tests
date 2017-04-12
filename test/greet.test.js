const greet = require('../greet.js');
const assert = require('assert');

describe('The greet function', function () {
    'use strict';
    it('Should greet Zikisa correctly', function () {
        assert.equal('Hello, Zikisa', greet('Zikisa'));
    });
});
