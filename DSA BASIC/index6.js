// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression

function postfixToPrefix(postfixExpression) {
    const stack = [];
  
    function isOperator(char) {
      return ['+', '-', '*', '/'].includes(char);
    }
  
    for (const token of postfixExpression.split(' ')) {
      if (!isOperator(token)) {
        stack.push(token);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const newExpression = `${token} ${operand1} ${operand2}`;
        stack.push(newExpression);
      }
    }
    return stack[0];
  }
  const postfixExpression = '5 4 * 7 2 / +';
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log(`Postfix: ${postfixExpression}`);
  console.log(`Prefix: ${prefixExpression}`);