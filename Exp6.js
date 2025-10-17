// Import the 'readline' module to handle command-line input and output
const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Performs the specified arithmetic operation.
 * @param {number} num1 - The first number.
 * @param {string} operator - The arithmetic operator (+, -, *, /).
 * @param {number} num2 - The second number.
 * @returns {number|string} The result of the operation, or an error message.
 */
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator. Please use +, -, *, or /.";
    }
}

/**
 * Main function to start the calculator interaction.
 */
function startCalculator() {
    console.log("--- Node.js Command Line Calculator ---");

    // 1. Get the first number
    rl.question('Enter first number: ', (answer1) => {
        const num1 = parseFloat(answer1);

        // Input validation for the first number
        if (isNaN(num1)) {
            console.log("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        // 2. Get the operator
        rl.question('Enter operator (+, -, *, /): ', (operator) => {

            // 3. Get the second number
            rl.question('Enter second number: ', (answer2) => {
                const num2 = parseFloat(answer2);

                // Input validation for the second number
                if (isNaN(num2)) {
                    console.log("Invalid input. Please enter a valid number.");
                    rl.close();
                    return;
                }

                // 4. Perform the calculation
                const result = calculate(num1, operator.trim(), num2);

                // 5. Display the result
                console.log(`\nResult: ${num1} ${operator.trim()} ${num2} = ${result}`);

                // Close the readline interface
                rl.close();
            });
        });
    });
}

// Start the program execution
startCalculator();
