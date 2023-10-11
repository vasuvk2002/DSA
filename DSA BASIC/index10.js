//Write a program to find the smallest number using a stack

class MinStack {
    constructor() {
      this.dataStack = []; // Stack to store elements
      this.minStack = [];  // Stack to track minimum elements
    }
    push(item) {
      this.dataStack.push(item);
      if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        if (this.dataStack[this.dataStack.length - 1] === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
        }
        return this.dataStack.pop();
      }
      return null;
    }
  
    top() {
      if (!this.isEmpty()) {
        return this.dataStack[this.dataStack.length - 1];
      }
      return null;
    }
  
    getMin() {
      if (!this.isEmpty()) {
        return this.minStack[this.minStack.length - 1];
      }
      return null;
    }
    isEmpty() {
      return this.dataStack.length === 0;
    }
  }
  
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(1);
  
  console.log(`Minimum element: ${minStack.getMin()}`); // Output: 1