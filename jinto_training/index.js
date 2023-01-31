const {concat} = require("./util");
var arr=[3];
var other=concat(1,2,333,arr,[[4,5]]);
console.log(other)

const add=(a,b)=>{
    return a+b;
}
module.exports={
    add,
    concat,
}