"use strict";
exports.__esModule = true;
var rect_1 = require("./rect");
console.log('Creating a rectangle object...');
var r = new rect_1.Rectangle(5, 6);
console.log('Object created, its dimensons are:');
r.display();
console.log('Its area is: ' + r.area());
console.log('Creating another rectangle object...');
var s = new rect_1.Rectangle(10, 20);
console.log('Object created, its dimensons are:');
s.display();
console.log('Its area is: ' + s.area());
