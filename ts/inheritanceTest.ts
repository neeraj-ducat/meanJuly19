import {Rectangle} from './rect';
import {Cuboid} from './cuboid';
console.log('Creating a rectangle object...');
let r = new Rectangle(5,6);
console.log('Object created, its dimensons are:');
 r.display();
 console.log('Its area is: '+r.area());
 console.log('Creating a Cuboid object...');
let c = new Cuboid(10,20,30);
console.log('Object created, its dimensons are:');
c.display();
console.log('Its volume is: '+c.volume());