import {Rectangle} from './rect';

console.log('Creating a rectangle object...');
let r = new Rectangle(5,6);
console.log('Object created, its dimensons are:');
 r.display();
 console.log('Its area is: '+r.area());
 console.log('Creating another rectangle object...');
let s = new Rectangle(10,20);
console.log('Object created, its dimensons are:');
s.display();
console.log('Its area is: '+s.area());