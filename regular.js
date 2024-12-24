var word = "welcomE to js practicE";

var regex = /javascript/;

console.log(regex.test(word));

var regex = /Js/i;

console.log(regex.test(word));

/* ^ sign used to check the first word in the sentence
 i sign used for the case senstive purpose */
var regex = /^welcome/i;
console.log(regex.test(word));

var regex = /practice$/i;
console.log(regex.test(word));

var word2 = "Harry is very very boy";

/* g sign used for the globally ckeck means it will check how many very are there */
regex = /very/g;

console.log(word2.replace(regex, "Very"));
