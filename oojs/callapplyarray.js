//employees->empname,employeeId and salary

let Employee=function(empname,empId,salary){
    this.empname=empname;
    this.empId=empId;
    this.salary=salary;
}

const employees=[new Employee('Raj',197,30000),
new Employee('Baba',200,35000),
new Employee('Avinash',198,50000),
];

for(const key in employees){
    for(const val in employees[key]){
        console.log(`${val} ${employees[key][val]}`)
    }
}

let details=function getDetails(message,amount){
    console.log(message,this.empname);
    console.log('Id',this.empId);
    console.log('salary',this.salary);
    console.log('bonus',(this.salary+amount)+'\n');

};

employees.forEach(emp=>{
    details.apply(emp,["welcome",3000]);
});


