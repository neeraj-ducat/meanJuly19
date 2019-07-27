import {Common} from './common';
export class Rectangle extends Common
 {

    constructor(l:number, b: number) {
        super(l,b);
    }  
   area():number {
        return this.length * this.breadth;
    }
 }

 