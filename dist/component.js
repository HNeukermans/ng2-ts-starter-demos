var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "@angular/core"], function (require, exports) {
    "use strict";
    var core_1 = require("@angular/core");
    var AppComponent = (function () {
        function AppComponent() {
            this.name = 'Angular';
        }
        AppComponent.prototype.click = function () {
            alert('clicked');
        };
        AppComponent.prototype.click2 = function () {
            alert('clicked2');
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <style>\n      .test { \n        border : solid red 1px;\n     }\n    </style>\n    <h1 class=\"test\">Hello {{name}} testing</h1>\n    <button (click)=\"click()\">click me</button>\n    <button (click)=\"click2()\">click me 2</button>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
