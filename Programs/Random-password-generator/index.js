// Random password generator

function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase) {
  const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
  const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numberChars = "1234567890";
  const symbolChars = "!@#$%^&*()-+=/*;:''`";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of characters needs to be included)`;
  }

  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

generatePasswordBtn.addEventListener("click", function () {
  const passwordLength = 12;
  const includeLowercase = true;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  const password = generatePassword(passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase);

  const displayPassword = document.getElementById("displayPassword");
  displayPassword.textContent = password;
});
