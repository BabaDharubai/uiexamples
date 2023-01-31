let menuDetails=(username,type)=>{
    let vegFood=['Gobi Manchurian','paneer','Methi'];
    let nonVegFood=['mutton','chicken','prawns'];
    console.log(`Welcome ${username}`);
    if(type==='veg'){
        vegFood.forEach(item=>console.log(item));
    }
    else if(type==='nonveg'){
        nonVegFood.forEach(item=>console.log(item));
    }
    else{
        console.log('not available');
    }
}
menuDetails('Baba','nonveg');
menuDetails('Praveen','veg');
menuDetails('Avinash','other');