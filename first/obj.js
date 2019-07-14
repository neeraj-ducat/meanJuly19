function swap(x ) {
 let z = x.a;
 x.a = x.b;
 x.b = z;
}

let obj = {a: 5, b: 6};

console.log(`Before Swapping a is ${obj.a}, b is ${obj.b}`);
swap(obj);
console.log(`After Swapping a is ${obj.a}, b is ${obj.b}`);