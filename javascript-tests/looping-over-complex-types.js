
window.onload = () => {

function divider() {
    console.log('---------');
    console.log();
    console.log('---------');
}
const myArray=[];

const numbers = [1, 2, 3, 5, 7];

console.log(numbers);

console.log("fourth item:",numbers[3]);
console.log(numbers[0]);
console.log("length:",numbers.length);
console.log("number 3", numbers[numbers.length - 3]);
numbers.push(25);
console.log(numbers);

divider();

const cloudy= true;
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    //console.log('value of i:', i);
    console.log('item', items[i]);
}

divider();
for (let item of items){
    console.log('Item:', item);
}

divider();


function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}

divider();

const files = ["bundle.js", "*.js.map", ".c9"];

console.log(files.join(', '));

const fileNames = "bundle.js, js.map, .c9"

console.log(fileNames.split(','));

divider();
let myObject = [];

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}
console.log("objects", myObject, smallNumbers)
console.log("values in our object",
    smallNumbers.one,
    smallNumbers.two,
    smallNumbers.three,
    smallNumbers["one"]
);

divider();

myObject = {
    five: 5,
    six: "six"
};

myObject.newItem= "this is a new item in my object"

console.log("object with new item", myObject);

divider();

console.log(items);
items.push(myObject);
console.log(items);
}