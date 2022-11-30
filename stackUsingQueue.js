class StackUsingQueue{
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }
    push(x){
        this.queue2.push(x);
        while(this.queue1.length != 0){
            this.queue2.push(this.queue1[0]);
            this.queue1.shift();
        }
        this.q = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = this.q;
    }
    pop(){
        if(this.queue1.length === 0){
            return ;
        }
        return this.queue1.shift();
    }
    display(){
        while(this.queue1.length != 0){
            console.log(this.pop());
        }
    }
    peek() {
        if(this.queue1.length === 0){
            return ;
        }
        return this.queue1[0];
    }
}

let s1 = new StackUsingQueue();
s1.push(5);
s1.push(10);
s1.push(15);
s1.pop();
console.log(s1.peek());