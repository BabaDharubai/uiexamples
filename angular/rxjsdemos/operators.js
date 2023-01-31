import { interval,of,take,filter,map,from,first, skip, skipLast } from "rxjs";

const obs1$=interval(1000).pipe(take(4),map(v=>v*5),filter(val=>val==10));
obs1$.subscribe(data=>console.log(data));

let fruits=['blueberry','blackberry','apple','orange','guava','mango','pineapple'];
const fruit$=from(fruits).pipe(filter(val=>val.includes('berry')),first());
fruit$.subscribe(data=>console.log(data));

const obs3$=interval(1000).pipe(take(4),skipLast());
obs3$.subscribe(data=>console.log(data));
