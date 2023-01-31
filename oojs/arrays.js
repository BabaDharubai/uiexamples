let arr=new Array(10);
console.log(arr.length);
arr[0]='Java';
arr[1]='Spring';
arr[11]='node';
console.log(arr);
console.log(arr[5]);
arr.forEach(value=>console.log(value));
arr.forEach((cal,index,arr)=>console.log(`${arr[index]}`));
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let arrone=new Array(10,20);
console.log(arrone);
arrone.push(30);
arrone.push(5);
console.log(arrone);
arrone.pop();
console.log(arrone);
