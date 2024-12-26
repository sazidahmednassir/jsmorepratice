let myMap = new Map();

myMap.set("one", "monday");
myMap.set("two", "tuesday");
myMap.set("three", "friday");
myMap.set("four", 500);

console.log(myMap.size);
console.log(myMap.has("three"));

console.log(myMap.get("two"));
console.log(myMap.get("three"));

for (let map of myMap.keys()) {
  console.log(map);
}

for (let map of myMap.values()) {
  console.log(map);
}

myMap.forEach((value, key) => {
  console.log(`Keys are : ${key} and Values are : ${value}`);
});

for (let [key, value] of myMap.entries()) {
  console.log(`Keys are = ${key} and Values are = ${value}`);
}

myMap.delete("two");

console.log(myMap);
