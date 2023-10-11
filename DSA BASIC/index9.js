//Write a program to reverse a stack.

class Stack {
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
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  }
  
  function reverseStack(stack) {
    const reversedStack = new Stack();
    const originalStackArray = [];
  
    while (!stack.isEmpty()) {
      const item = stack.pop();
      reversedStack.push(item);
      originalStackArray.push(item);
    }
  
    const reversedStackArray = [];
    while (!reversedStack.isEmpty()) {
      reversedStackArray.push(reversedStack.pop());
    }
  
    return { reversedStackArray, originalStackArray };
  }
  
  // Example usage:
  const originalStack = new Stack();
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  originalStack.push(4);
  
  const { reversedStackArray, originalStackArray } = reverseStack(originalStack);
  
  console.log("Original Stack (Array):", originalStackArray);
  console.log("Reversed Stack (Array):", reversedStackArray);