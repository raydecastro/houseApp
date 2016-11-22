'use strict';

var assert = require('chai').assert;
var App = require('../source-code/app.js');

describe('App', function () {
    it('should exist', function () {
        var app = new App(); 

        assert.notEqual(app, undefined);
    });

    it('should return true when run', function () {
        var app = new App(); 

        assert.equal(app.run(), true);
    });
});
