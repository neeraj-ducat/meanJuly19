function myHobbies(...hobbies) {
 /*
 console.log(hobbies);
 // printing elements using for-in loop.
 for(let i in hobbies) 
    console.log(hobbies[i]);
*/
// printing elements using for-of loop.
for(let hobby of hobbies) 
console.log(hobby);
}
console.log('Hobbies of person A');
myHobbies('Reading','Playing Video Games');
console.log('Hobbies of person B');
myHobbies('Sleeping');
console.log('Hobbies of person C');
myHobbies('Travelling','Eating','Listening Music');

