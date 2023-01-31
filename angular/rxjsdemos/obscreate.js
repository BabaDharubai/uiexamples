import {from,interval,Observable,of} from "rxjs"
const obs$=of(10,20,30);

const observer={
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("Completed")
}

obs$.subscribe(observer);

obs$.subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("Completed")
});


// const obs1$=interval(1000);
// obs1$.subscribe(data=>console.log(data));

// const obs2$=from([1,2,3]);
// obs2$.subscribe(data=>console.log(data));


const observable$=new Observable(function subscribe(subscriber){
    subscriber.next(20);
    subscriber.next(30);
    subscriber.next(40);
    subscriber.next(50);
    setTimeout(()=>{
        subscriber.next('hello');
    },1000);
    setTimeout(()=>{
        subscriber.next('Print after 5 sec');
    },5000)
    subscriber.complete();
    subscriber.next("this will not print");
});

console.log("creating observable");
observable$.subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("Complted")
})