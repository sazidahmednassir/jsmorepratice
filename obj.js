let car = {
  color: "red",
  brand: "benz",
  price: 23000000,
};

console.log(car);
console.log(car.color);
console.log(car.brand);
console.log(car.price);
console.log(car["color"]);

car.tires = 4;

console.log(car);

let colors = ["rED", "bLUE", "wHITE"];
console.log(colors[1]);

colors.push("grey");
console.log(colors);

colors.pop();
console.log(colors);
colors.push("nightwing");
console.log(colors);
console.log(colors[colors.length - 1]);
console.log(colors.reverse());

let weekend = ["sat", "sun", "mon"];

console.log(colors.concat(weekend));

console.log(colors);
