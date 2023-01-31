function total(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(total(10,20));
console.log(total(10,20,30));
console.log(total(20,50,500,70));

//rest operator
function totalSum(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}
console.log(total(10,20));
console.log(total(10,20,30));
console.log(total(20,50,500,70));