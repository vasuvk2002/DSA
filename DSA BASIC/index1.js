//Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  const integerArray = [2, 4, 3, 1, 5, 6];
  const targetSum = 7;
  const result = findPairsWithSum(integerArray, targetSum);
  
  console.log(`Pairs with sum ${targetSum}:`);
  result.forEach(pair => {
    console.log(`(${pair[0]}, ${pair[1]})`);
  });