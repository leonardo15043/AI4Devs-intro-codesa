// script.js

// Function to reverse a string
function reverseString() {
    // Get the input value
    const inputText = document.getElementById('textInput').value;
  
    // Reverse the string
    const reversedText = inputText.split('').reverse().join('');
  
    // Display the result
    document.getElementById('result').textContent = `Texto invertido: ${reversedText}`;
  }
  