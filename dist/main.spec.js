(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./main"], function (require, exports) {
    "use strict";
    var main_1 = require("./main");
    describe('main', function () {
        it("should be defined", function () {
            var m = new main_1.Main();
            expect(m).toBeTruthy();
        });
        it("should be true", function () {
            expect(true).toBeTruthy();
        });
    });
});
