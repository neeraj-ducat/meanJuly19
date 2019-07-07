var counter = 1;
var myInterval = setInterval(function(){
   console.log('Counter is: '+counter);
   counter = counter + 1;
},1000);

setTimeout(function(){
    clearInterval(myInterval);
},5500);