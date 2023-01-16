/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2
console.log(firstEven === 2); // Output: true
console.log(numbers); */

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

/* 
## first element delete
shift method return that first array first element
*/

/* 
## last element delete
pop return delete element like shift mehtod. But last element.
Another process is decreasing array length.
*/

/* 
## delete specific elements whare I need
splice array method returns those elements which are deleted.
*/

/*                 const deletedvalue = 6;
                for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === deletedvalue) {
                    numbers.splice(numbers[i], 1);
                }
                }

                numbers.length = numbers.length - 1;
                numbers.splice(3, numbers.length, ...[20, 21]); */

/* Note that some methods like sort, reverse and splice modify the original array and some other methods like slice, map, filter etc. return a new array without changing the original array. */

/* 
when we call filter method we have to modify const to let that certain array. Because filter do not change original array like slice and map. It returns a new array. 
*/

/* 
## Array reset
To zero the certain array length.
            Rule: 1     const numbers2 = numbers;
                        numbers.length = 0;
                        
            Rule: 2     while (numbers.length) {
                        numbers.pop();
}
*/

// console.log(numbers2 === numbers);
console.log(numbers);
