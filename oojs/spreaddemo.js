//using spreadoperator spread on array

let arr=[10,20,40,450,420];
console.log(Math.max(...arr));      //to expand the array

var emp={empName:'Sandeep',empId:186};
var address={city:'Hyderabad'};
var empdetails={...emp,
                ...address,
                mobile:1234567890,
                dept:'Admin'
            };
console.log(empdetails);

var betty='betty bought a bit of butter, but the butter was so bitter, So she bought some better butter, To make the bitter butter better';

let count=0;
for(const key in betty){
    if(betty.match('b')){
        count=count+1;
    }
    
}

console.log(count);