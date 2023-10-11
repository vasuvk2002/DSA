//Write a program to check if all the brackets are closed in a given code snippet

function areBracketsClosed(codeSnippet) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (const char of codeSnippet) {
      if (brackets[char]) {
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        const topBracket = stack.pop();
        if (brackets[topBracket] !== char) {
          return false; // Mismatched brackets
        }
      }
    }
    return stack.length === 0;
  }
  
  const codeSnippet = 'function foo() { if (true) { return [1, 2]; } }';
  if (areBracketsClosed(codeSnippet)) {
    console.log('All brackets are closed properly.');
  } else {
    console.log('Brackets are not closed properly.');
  }