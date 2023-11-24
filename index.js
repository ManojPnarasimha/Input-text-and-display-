// script.js
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "String game";
    } else {
        document.title = " 😭Come Back To game ";
    }
});

let name = '',
    inputField = document.getElementById('inputField'),
    outputName = document.getElementById('outputName'),
    errorMessageElement = document.getElementById('errorMessage');

inputField.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    if (!isValidString(inputValue)) {
        displayErrorMessage('Please enter a string value');
        return;
    }

    displayErrorMessage('');
    name = inputValue;
    outputName.textContent = name;
});

function isValidString(input) {
    return /^$|^[A-Za-z]+$/.test(input);
}

function displayErrorMessage(message) {
    errorMessageElement.textContent = message;
}
