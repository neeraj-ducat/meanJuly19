"use strict";
exports.__esModule = true;
var Common = /** @class */ (function () {
    function Common(l, b) {
        this.length = l;
        this.breadth = b;
    }
    Common.prototype.display = function () {
        console.log('Length : ' + this.length);
        console.log('Breadth : ' + this.breadth);
    };
    return Common;
}());
exports.Common = Common;
