var nums=[10,20,30,40];
// var sum=0;
// for(let i=0;i<nums.length;i++){
//     sum=sum+nums[i];
// }
// console.log(`sum of numbers =${sum}`);

// //use with objects
// for(const key in nums){
//     console.log(key,nums[key]);
// }
// //use with array
// for(const num of nums){
//     console.log(num);
// }

var callfn=(value,index,arrname)=>{
    console.log(value);
    console.log(index);
    console.log(arrname[index]);
}
nums.forEach(callfn);

nums.forEach(value=>console.log(value));