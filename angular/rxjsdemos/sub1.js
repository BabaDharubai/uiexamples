import { Subject } from "rxjs";

const subject=new Subject();
subject.subscribe({
    next:(data)=>console.log(`first: ${data}`)
});
subject.next("Hi");

subject.subscribe({
    next:(data)=>console.log(`second: ${data}`)
});
subject.next("Hello");