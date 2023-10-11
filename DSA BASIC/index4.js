//Write a program to print the first non-repeated character from a string

function findFirstNonRepeatedChar(str) {
    const charCount = new Map();
    for (const char of str) {
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const inputString = "hello";
  const firstNonRepeatedChar = findFirstNonRepeatedChar(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log(`The first non-repeated character in "${inputString}" is "${firstNonRepeatedChar}".`);
  } else {
    console.log("There are no non-repeated characters in the string.");
  }