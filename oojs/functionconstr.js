//function constructor
function Student(name,city){
    this.name=name;
    this.city=city;
    this.getInfo=()=>{
        console.log(`welcome ${name} from ${city}`);
    }

}


const student=new Student('Avinash','Kodur');
console.log(student);
console.log(`Department is ${student.department}`)
student.getInfo();

const student1=new Student('Bhargav','Puttaparthi');
console.log(student1);
student1.getInfo();

//add new property to the prototype
//arrow functions does not support new keyword
Student.prototype.department='CSE';
Student.prototype.printHobbies=function(...hobbies){
    console.log(`Department is ${this.department}`)
    hobbies.forEach(value=>console.log(value));
};

const student2=new Student('Kathy','Banglore');
student2.getInfo();
student2.printHobbies('sports','music');
console.log(`Department is ${student2.department}`)

student1.department='ECE';
student1.printHobbies('games','dance');
console.log(`Department is ${student1.department}`)