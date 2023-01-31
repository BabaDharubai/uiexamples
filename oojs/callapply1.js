let Product=function(productname,price,brand,category){
    this.productname=productname;
    this.price=price;
    this.brand=brand;
    this.category=category;
}

let Mobile=function(model,price,brand,category){
    this.model=model;
    this.price=price;
    this.brand=brand;
    this.category=category;
}

let getDetails=function(){
    if(this instanceof Product){
        console.log(`${this.productname} `);
    }
    else if(this instanceof Mobile){
        console.log(`${this.model} ${this.price} ${this.brand} ${this.category}`);
    }
}

const product=new Product('notebook',100,'classmate','books');
getDetails.call(product);
const mobile=new Mobile('j3',15000,'samsung','mobiles');
getDetails.call(mobile);

let showDiscountedPrice=function(amount1,amount2){
    if(this.brand==='mobile'){
        console.log(`${this.price-amount1}`);
    }
    else if(this.brand==='classmate'){
        console.log(`${this.price-amount2}`);
    }
}
showDiscountedPrice.call(product,5,10);
showDiscountedPrice.call(mobile,50,10);