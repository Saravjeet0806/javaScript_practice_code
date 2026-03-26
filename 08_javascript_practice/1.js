//higher order function
function greet(name){
 console.log(`hello ${name}`)
}

function meow(callback){
    const name= 'Saravjeet';
    callback(name);
}

meow(greet);

//objects in js
const obj1={
    name: 'Scorpio',
    company: 'Toyota',
    price: '50k',

    getCarDetails: function(){
        console.log(this.name);
        console.log(this.price);
    }
}

console.log(obj1)
obj1.getCarDetails();

function Car(carname, price, isBought){
    this.carname=carname;
    this.price=price;
    this.isBought=isBought;

    this.greeting=function(){
        console.log(`Welcome to ${this.carname} showroom`)
    }
}

const car1 = new Car('Fortuner', 700000, true);
const car2 = new Car('Thar', 600000, false);

console.log(car1);
console.log(car2);
