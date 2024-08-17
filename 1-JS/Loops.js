let cars = ["BMW", "Volvo", "Marcedes", "Ford", "Fiat", "Audi"];
let models = ["2020", "2021", "2022", "2023", "2024", "2025"];
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

for (let i = 0; i < cars.length; i++) {
    document.write(`<h1>Car: ${cars[i]}</h1>`);
    for (let j = 0; j < models.length; j++) {
        document.write(`<h3>Model: ${models[j]}</h3>`);
    }
    for (let k = 0; k < colors.length; k++) {
        document.write(`<h3>Color: ${colors[k]}</h3>`);
    }
    document.write("<h1>-----------------------------</h1>");
} 