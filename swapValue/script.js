// 03. Swap the values.

// You are working on a project that requires you to swap the values of two variables without using a temporary variable. You decide to write a function that takes two variables as input and swaps their values using destructuring assignment with an array. The function should take the two variables as arguments, destructure them into an array, and then swap their positions within the array. Finally, the function should return an array with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should return an array [10, 5] with x now equal to 10 and y equal to 5.



const output = document.querySelector('#opScreen');
const button = document.getElementById('btn');


button.addEventListener('click', () => {
    const userInput = document.querySelector('#swapInput').value;

    // Split the input into two values
    const values = userInput.split(',');
    console.log('nitish',values);

    // Ensure that two values are provided
    if (values.length !== 2) {
        output.textContent = 'Please enter two values separated by a comma.';
        output.style.color = "red"
        output.style.fontWeight = "600"
        return;
    }

    // Convert the values to numbers
    const x = parseFloat(values[0]);
    const y = parseFloat(values[1]);

    // Check if the conversion is successful
    if (isNaN(x) || isNaN(y)) {
        output.textContent = 'Please enter valid numerical values.';
        output.style.color = "red"
        output.style.fontWeight = "600"


        return;
    }

    // Swap the values using a function
    function swapValues(x, y) {
        [x, y] = [y, x];
        return [x, y];
    }

    // Swap the user's values
    let swapped = swapValues(x, y);

    // Display the swapped values
    output.textContent = `Swapped values: [${swapped.join(', ')}]`;
    output.style.color = "green"
    output.style.fontWeight = "600"


});
