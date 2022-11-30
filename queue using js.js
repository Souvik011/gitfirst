class Queue{
    constructor(capacity){
        this.queue = [];
        this.front = 0;
        this.size = 0;
        this.rear = capacity - 1;
        this.capacity = capacity;
    }
    isFull(){
        return (this.queue.length == this.capacity) ;
    }
    isEmpty(){
        return (this.queue.length === 0);
    }
    EnQueue(item){
        if(this.isFull()){
            console.log("Queue Overflowed");
            return ;
        } 
        this.queue.push(item);
        this.size += 1 ;
        this.rear = (this.rear + 1) % this.capacity;
    }
    DeQueue(){
        if(this.isEmpty()){
            console.log("Queue Underflowed");
            return ;
        }
        this.size -= 1;
        this.rear = -1;
        return this.queue.shift();
        
        
    }
    Display(){
        var s = "";
        while(!this.isEmpty()){
            s += this.DeQueue() + " ";
        }
        console.log(s);
    }


}

let q1 = new Queue(5);
q1.EnQueue(15);
q1.EnQueue(12);
q1.EnQueue(10);
q1.EnQueue(28);
q1.EnQueue(26);
q1.DeQueue();
q1.EnQueue(16);
q1.Display();

