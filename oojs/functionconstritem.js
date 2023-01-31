function Product(itemname,brand,price,quantity){
    this.itemname=itemname;
    this.brand=brand;
    this.price=price;
    this.quantity=quantity;
    this.getTotal=()=>{
        console.log(`Toatal price ${price*quantity}`);
        return price*quantity;
    }
}


Product.prototype.category;
Product.prototype.showDiscountedPrice=function(amount){
    console.log(`Discounted price ${this.price-amount}`)
}
const product=new Product('Kaju','Balaji','500','2');
product.category='Dry Fruits';
console.log(product);
product.getTotal();
product.showDiscountedPrice(100);

console.log(product);
