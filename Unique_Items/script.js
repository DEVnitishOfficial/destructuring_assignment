

/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.
*/

// function find_unique_elements(inputArr){

//     const myUniqueArr = new Set(inputArr); // Set allow only the unique value and return object
//     console.log('nitish',myUniqueArr);
//    const uniqueArr =  Array.from(myUniqueArr) // Array.from convert from object to array
//    return uniqueArr;
//   }
//   const result = find_unique_elements([2,3,3,5,4,3,4,2,1,1,33,3,2])
//   console.log(result);


const button = document.getElementById('btn')
const output = document.getElementById('op_screen')

button.addEventListener('click',() => {
const userInput = document.getElementById('countUnique').value;

const uniqueArr = new Set(userInput);

const myUniqueArr = Array.from(uniqueArr);
output.innerText = `Unique num is : ${myUniqueArr}`  

})