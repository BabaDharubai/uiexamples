greet();
//function declaration - can be created as a class
function greet(){
    console.log("Hello");
}
//over writing the greet function
// function greet(name){
//     console.log("Welcome",name)
// }

//anonymous function
//function expression
var sum=function(x,y){
    console.log('sum',x+y);
}
sum(10,20)

//arrow functions
var greetfun=()=>console.log("Hello");
greetfun();
var sum1=(x,y)=>console.log('sum', x+y);
sum1(10,20);


//craete a function sayHello and print "Helloooo!!"
let sayHello=(username)=>console.log(`Hellooo!!! ${username}`);

let greetUser=(fn,str)=>fn(str);
greetUser(sayHello,"Jo");

setTimeout(()=>console.log(`Great Day`),3000);
greetUser((username)=>console.log(`Great Day ${username}`),'Baba');

setInterval(()=>console.log("Hi Baba"),1000);