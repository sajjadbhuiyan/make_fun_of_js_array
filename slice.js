const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

/* 
## slice method returns a new array. which first element works inclusive way and last element works exclusive way
*/

/* 
## Clone an array
            const numbers2 = numbers.slice();
*/

/* 
## make array which look like array
*/

function toArray() {
  const newArray = Array.prototype.slice.call(arguments);
  return newArray;
}

console.log(toArray(1, 2, 3));

console.log(numbers.slice(4, 15));
// console.log(numbers2 === numbers);
