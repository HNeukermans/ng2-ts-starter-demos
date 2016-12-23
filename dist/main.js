(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "@angular/platform-browser-dynamic", "./module"], function (require, exports) {
    "use strict";
    var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    var module_1 = require("./module");
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.AppModule);
});
//new Main(); 
