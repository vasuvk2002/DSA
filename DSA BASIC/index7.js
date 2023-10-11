class MyStack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefix) {
    const stack = new MyStack();
    const tokens = prefix.split(' ');
  
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
      if (!isOperator(token)) {
        stack.push(token);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1} ${token} ${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    return stack.pop();
  }
  
  const preExpression = '* + 2 3 4';
  const infixExpression = prefixToInfix(preExpression);
  
  console.log("Prefix Expression:", preExpression);
  console.log("Infix Expression:", infixExpression);