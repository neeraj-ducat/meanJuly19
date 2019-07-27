export class Common {

    length: number;
    breadth: number;

    constructor(l: number, b:number) {
        this.length = l;
        this.breadth = b;
    }
    display() {
        console.log('Length : '+this.length);
        console.log('Breadth : '+this.breadth);
    }

}