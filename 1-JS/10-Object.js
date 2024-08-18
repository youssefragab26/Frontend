let car = {
    title: "BMW",
    color: ["red", "blue", "green"],
    price: 100000,
    model: 2024,

    sale: function(){
        console.log("Car is for sale");
    }
}
document.write(car.color);
console.log(car);
console.log(car.sale())