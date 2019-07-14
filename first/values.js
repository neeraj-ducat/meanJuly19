function swap(x ,y ) {
 let z = x;
 x = y;
 y = z;
}

let a = 5, b = 6;

console.log(`Before Swapping a is ${a}, b is ${b}`);
swap(a,b);
console.log(`After Swapping a is ${a}, b is ${b}`);