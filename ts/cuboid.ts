import {Common} from './common';
export class Cuboid extends Common
 {
    height: number;
    
    constructor(l:number, b: number, h: number) {
        super(l,b);
        this.height = h;
    }
    display() {
        super.display();
        console.log('Height : '+this.height);
    }

    volume():number {
        return this.length * this.breadth * this.height;
    }
 }