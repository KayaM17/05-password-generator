// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Password properties
var password = {
    length: 0,
    special: "",
    numeric: "",
    lowercase: "",
    uppercase: "",
};
// Changed prompt on line 104 to please enter a valid number between 8 - 128' from How long would you like your password to be? (8-128 characters to make more clearer to the user)
// Function to prompt user for password options
// Had to chnage the function to a while loop to make sure the user input is valid.
function getPasswordOptions() {
    while (password.length < 8 || password.length > 128) {
    password.length = prompt("Please enter a valid number between (8-128 characters)");
    }
    password.special = confirm("Would you like to include special characters?");
    password.numeric = confirm("Would you like to include numbers?");
    password.lowercase = confirm("Would you like to include lowercase letters?");
    password.uppercase = confirm("Would you like to include uppercase letters?");
    return password;
}

// Function for getting a random element from an array
function getRandom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
}

// Function to generate password with user input
// Had to chnage the selection process for the user to make sure they can select any option they want.
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if (options.numeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
    }
    if (options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    if (options.uppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
    }
    for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
    }
    return result.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);