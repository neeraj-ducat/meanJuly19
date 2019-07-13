function myHobbies(...hobbies) // Rest operator
{
 console.log(hobbies);
}
console.log('Hobbies of person A');
let a = ['Reading','Playing Video Games'];
myHobbies(...a); // spread operator
console.log('Hobbies of person B');
let b = ['Sleeping'];
myHobbies(...b); // spread operator
console.log('Hobbies of person C');
let c = ['Travelling','Eating','Listening Music'];
myHobbies(...c);// spread operator

