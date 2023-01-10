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

// Function to prompt user for password options
function getPasswordOptions() {
    var length = parseInt(prompt('Enter the desired length of the password (10-64 characters):'));
    var hasLower = confirm('Include lowercase characters in the password?');
    var hasUpper = confirm('Include uppercase characters in the password?');
    var hasNumeric = confirm('Include numeric characters in the password?');
    var hasSpecial = confirm('Include special characters in the password?');

    if (isNaN(length) || length < 10 || length > 64) {
        alert('Password length must be a number between 10 and 64 characters.');
        return;
    }

    if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
        alert('At least one character type must be selected.');
        return;
    }

    return {
        length: length,
        hasLower: hasLower,
        hasUpper: hasUpper,
        hasNumeric: hasNumeric,
        hasSpecial: hasSpecial
    };
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(passwordOptions) {
    var password = '';
    var characters = [];

    if (passwordOptions.hasLower) {
        characters = characters.concat(lowerCasedCharacters);
    }
    if (passwordOptions.hasUpper) {
        characters = characters.concat(upperCasedCharacters);
    }
    if (passwordOptions.hasNumeric) {
        characters = characters.concat(numericCharacters);
    }
    if (passwordOptions.hasSpecial) {
        characters = characters.concat(specialCharacters);
    }

    for (var i = 0; i < passwordOptions.length; i++) {
        password += getRandom(characters);
    }

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var passwordOptions = getPasswordOptions();
    var password = generatePassword(passwordOptions);
    var passwordText = document.querySelector('#password');
    console.log(password);
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
