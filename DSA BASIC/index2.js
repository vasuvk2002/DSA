//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array

function reverseArrayInPlace(arr) {
    const length = arr.length;
    const mid = Math.floor(length / 2);
  
    for (let i = 0; i < mid; i++) {
      const temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3, 2, 1]