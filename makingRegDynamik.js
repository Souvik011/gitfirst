class MyStack {
    constructor(size) {
        this.stackArray = [];
        this.maxSize = size;
        this.top = -1;

    }
    
    push(element) {
        this.top = this.top + 1;
        return this.stackArray.push(element);
        
    }
    
    
    pop() {
            
        this.top = this.top - 1;
        return this.stackArray.pop();
        
        
    }
    
    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }
    
    isEmpty(){
       return this.top == -1;
    }

    isFull() {
         return (this.top == this.maxSize - 1);
    }
   
    
}

let theStack = new MyStack();
theStack.push(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);
theStack.push(50);
console.log(theStack.peek());
var printStack = "";
while(!theStack.isEmpty()){
    printStack += theStack.pop() + " ";
}
console.log(printStack);


