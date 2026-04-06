
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

const btn = document.getElementById('generateBtn');
const display = document.getElementById('display');
const lengthInput = document.getElementById('length');

function createPassword() {
   
    const length = lengthInput.value;

    const pool = alpha + numbers + symbols;

    let result = "";

   
    for (let i = 0; i < length; i++) {
       
        const randomIndex = Math.floor(Math.random() * pool.length);

        result += pool.charAt(randomIndex);
    }

   
    display.innerText = result;
}

btn.addEventListener('click', createPassword);
