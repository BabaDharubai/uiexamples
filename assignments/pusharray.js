function showCourses(...courses){
    let temp=new Array(0);
    courses.forEach(course=>{
        if(course.includes('a')){
            temp.push(course);
        }
    });
    return temp;
}
let newArray=showCourses('Java','HTML','Javascript', 'Spring');
console.log(newArray);