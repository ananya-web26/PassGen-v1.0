// 1. DATA: The character sets
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

// 2. SELECTORS: Getting the HTML elements
const btn = document.getElementById('generateBtn');
const display = document.getElementById('display');
const lengthInput = document.getElementById('length');

// 3. THE LOGIC: The function that runs when you click
function createPassword() {
    // Get the current length from the input box
    const length = lengthInput.value;

    // Combine all characters into one big pool
    const pool = alpha + numbers + symbols;

    let result = "";

    // Loop as many times as the length (e.g., 12 times)
    for (let i = 0; i < length; i++) {
        // Pick a random number between 0 and the length of the pool
        const randomIndex = Math.floor(Math.random() * pool.length);

        // Add the character at that random position to our result
        result += pool.charAt(randomIndex);
    }

    // Put the final string into the HTML box
    display.innerText = result;
}

// 4. EVENT: Listen for the click
btn.addEventListener('click', createPassword);