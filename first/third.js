(function f1(){

    console.log("It is a self-invoking named function.");
})();
(function(){

    console.log("It is a self-invoking anonymous function.");
})();
(() =>{

    console.log("It is a self-invoking arrow function.");
})();