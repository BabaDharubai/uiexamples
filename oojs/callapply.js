//create a user object using function con
//with username and city
let User=function(name,city){
    this.name=name;
    this.city=city;
}

//create another employee object with name alone
let Employee=function(name){
    this.name=name;
}
//create a separate function as getDetails()
//inside this print this.name and this.city
let greet=function(message,newMessage){
    console.log(message,this.name);
    console.log(newMessage);
}

const user=new User('Hayathi','Goa');
//use the call method for greet
//first parameter is the object name
//second one is the values for the argument in greet function
greet.call(user,"Hello","GoodBye");

const emp=new Employee('George');
greet.call(emp,"Great Day","Welcome back");

greet.apply(user,["Hello","GoodBye"]);
greet.apply(emp,["Great Day","Welcome back"]);
