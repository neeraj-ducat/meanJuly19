"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var common_1 = require("./common");
var Cuboid = /** @class */ (function (_super) {
    __extends(Cuboid, _super);
    function Cuboid(l, b, h) {
        var _this = _super.call(this, l, b) || this;
        _this.height = h;
        return _this;
    }
    Cuboid.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log('Height : ' + this.height);
    };
    Cuboid.prototype.volume = function () {
        return this.length * this.breadth * this.height;
    };
    return Cuboid;
}(common_1.Common));
exports.Cuboid = Cuboid;
