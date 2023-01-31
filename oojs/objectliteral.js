// var employee={
//     employeeName:'Baba',
//     age:21,
//     employeeId:200,
//     salary:30000,
//     hobbies:['sports','music'],
//     address:{
//         city:'Proddatur',
//         state:'AndhraPradesh'
//     },
//     mobile:8500655261
// }

// for(const key in employee){
//     let temp=employee[key];
//     if(Array.isArray(temp)){
//         for(const val in temp){
//             console.log("hobby" ,temp[val]);
//         }
//     }
//     else if(typeof temp=='object'){
//         for(const val in temp){
//             console.log(val ,temp[val]);
//         }
//     }
//     else{
//         console.log(key,employee[key]);
//     }
// }



let products=[
    {
    productname:'mobile',
    price:20000,
    brand:'samsung',
    category:'Technology'
},
{
productname:'laptop',
price:50000,
brand:'Dell',
category:'Technology'
},
{productname:'Headset',
price:3000,
brand:'samsung',
category:'Gadgets'
}]

for(const key in products){
    let temp=products[key];
    for(const val in temp){
        console.log(val,temp[val]);
    }
}