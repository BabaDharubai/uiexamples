let courses=['java','spring','js'];
let choice='js';
let flag=false;
for(const key in courses){
    if(choice==courses[key]){
        flag=true;
    }
}
if(flag){
    console.log(`course fee of ${choice} is 2000`);
}
else{
    console.log(`course is not available`);
}