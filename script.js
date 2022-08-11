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
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
