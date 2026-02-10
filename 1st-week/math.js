// Create a custom module named 'math.js' that exports basic mathematical functions then import and use these functions in another file.

// Function to add two numbers
export function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// function to find factorial with error handling for negative numbers
export function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
} 