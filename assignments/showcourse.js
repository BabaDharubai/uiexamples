function showCourses(...courses){
    courses.forEach(course=>{
        if(course.includes('a')){
            console.log(course);
        }
    });
}

showCourses('Java','HTML','Javascript', 'Spring');