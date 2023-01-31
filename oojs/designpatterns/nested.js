// //create a function average
// var average=function(...nums){
//     console.log('Find in average');
//     return function(){
//         let sum=0;
//         nums.forEach(num=>{
//             sum+=num;
//         });
//         return sum;
//     }()/nums.length;
// };

// let avg=average(10,20,30);
// console.log(avg);


var average=function(...nums){
    console.log('Find in average');
    return function(){
        let sum=0;
        nums.forEach(num=>{
            sum+=num;
        });
        return sum;
    };
};
console.log(average(10,20,30)()/3);


//create a function printDetails(username,salary,hobbies)
//print username
//iterate hobbies which is an array
//create an innerfunction which takes amount as parameter
//calculate the bonus
//print the salary

let printDetails=(function(username,salary,hobbies){
    console.log(`username ${username}`);
    hobbies.forEach(hobby=>{
        console.log(`hobbies ${hobby}`);
    });
    return function(amount){
        console.log(`salary ${salary}`);
        let bonus=salary+amount;
        console.log(bonus);
    };
})('Baba',50000,['sports','music'])

printDetails(5000);