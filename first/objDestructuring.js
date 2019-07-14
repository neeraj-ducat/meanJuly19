function changeName(person) {
 person.name = "Mr. "+person.name;
 console.log('Mr is added to the name.');
}

function changeAge({age}) {
    age = age +10;
    console.log('Age is increased by 10.');
}

function display({name:n, age: a}) {
console.log('Name is '+n);
console.log('Age is: '+a);
}

let person = {name: 'Raman', age: 50};
display(person);
console.log('Invoking changeName function...');
changeName(person);
display(person);
console.log('Invoking changeAge function...');
changeAge(person);
display(person);