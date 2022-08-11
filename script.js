// Assignment Code
// Select generate button element and store in a constant
const generateBtn = document.querySelector('#generate');

// Arrays that contain all options for potential characters: uppercase, lowercase, numeric, and special
const uppercaseChar = [
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
  'Z',
];
const lowercaseChar = [
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
  'z',
];
const numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChar = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];

// Function to get user input regarding the options needed to generate password
const userOptions = () => {
  // Prompt user for desired length of password
  const length = +prompt(
    'How many characters should password contain? Please enter a length between 8 - 128'
  );
  // Validate user entered an integer between 8 - 128
  if (
    Number.isInteger(length) === false ||
    Number.isNaN(length) === true ||
    length < 8 ||
    length > 128
  ) {
    alert('Character length must be a whole number between 8 and 128');
    return;
  }

  // Prompt user to confirm if should have a lowercase character
  const hasLowercase = confirm(
    'Click ok if password should contain lowercase characters.'
  );

  // Prompt user to confirm if should have an uppercase character
  const hasUppercase = confirm(
    'Click ok if password should contain uppercase characters.'
  );

  // Prompt user to confirm if should have a number
  const hasNumber = confirm('Click ok if password should contain numbers.');

  // Prompt user to confirm if should have special characters
  const hasSpecial = confirm(
    'Click ok if password should contain special characters.'
  );

  // Validate user selected at least one character type
  if (!hasLowercase && !hasUppercase && !hasNumber && !hasSpecial) {
    alert('You must select at least one type of character');
    return;
  }

  // store user input in an object and return it
  const userInput = {
    length,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecial,
  };

  console.log(userInput);

  return userInput;
};

// function to get a random character from character arrays and return it
const getRandChar = (arr) => {
  // generate a random number equal one of the array's indexes
  const randIndx = Math.floor(Math.random() * arr.length);
  const randChar = arr[randIndx];
  return randChar;
};

// function to generate password given user input
const generatePassword = () => {
  // get user options and store in a constant
  const options = userOptions();

  // array to store the password as its made
  let generatedPassword = [];

  // array to store characters that can possibly used in password
  let possible = [];

  // array that contains each type of character to be used
  const characters = [];

  // if user wants lowercase letters
  if (options.hasLowercase) {
    possible = possible.concat(lowercaseChar);
    characters.push(getRandChar(lowercaseChar));
  }

  // if user wants uppercase letters
  if (options.hasUppercase) {
    possible = possible.concat(uppercaseChar);
    characters.push(getRandChar(uppercaseChar));
  }

  // if user wants numeric characters
  if (options.hasNumber) {
    possible = possible.concat(numericChar);
    characters.push(getRandChar(numericChar));
  }
  // if user wants special characters
  if (options.hasSpecial) {
    possible = possible.concat(specialChar);
    characters.push(getRandChar(specialChar));
  }

  console.log(options.length);
  // Based on length user chose select random indexes from possible array and push to password
  for (let i = 0; i < options.length; i++) {
    const passwordChar = getRandChar(possible);
    generatedPassword.push(passwordChar);
  }
  console.log(generatedPassword);
  // Add one of each from characters array to password
  for (let i = 0; i < characters.length; i++) {
    generatedPassword[i] = characters[i];
  }

  // join password array into a string and return
  return generatedPassword.join('');
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
