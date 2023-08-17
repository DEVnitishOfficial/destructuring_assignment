

// let arr = [1,2,3,4,5]
// const [first,second, , , last] = arr
// console.log(first,second,last);
// Get references to the elements
const output = document.getElementById('opScreen');
const button = document.getElementById('btn');

button.addEventListener('click', () => {

    // Define an array
    let arr = [1,2,3,4,5];
    // Destructure the array
    const [first, second, , , last] = arr;
    const message = `First: ${first}, Second: ${second}, Last: ${last}`;
    output.textContent = message;
});
