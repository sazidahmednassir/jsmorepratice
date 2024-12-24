let mySet = new Set();

mySet.add("javascript");
mySet.add("nx");
mySet.add(23);
mySet.add(34);
mySet.add(true);

console.log(mySet);

console.log(`is element present ? ${mySet.has("javascript")}`);

mySet.forEach((val) => {
  console.log(`the values are: ${val}`);
});

let setVal = mySet.values();

for (let vl of setVal) {
  console.log(`another ways values printing on the set: ${vl}`);
}

mySet.delete(34);

console.log(mySet);

/* clear all the values on the set
mySet.clear();
*/
