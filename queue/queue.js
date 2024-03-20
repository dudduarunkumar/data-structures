class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(newItem){
        this.queue.push(newItem)
    }
    
    dequeue(){
        const delItem=this.queue.shift()
        return delItem
    }
    
    size(){
        return this.queue.length
    }
    
    findFront(){
        return this.queue[0]
    }
    
    isEmpty(){
        if(this.queue.length>0){
            return false
        }
        return true
    }

    traverseQueue(){
        console.log(JSON.stringify(this.queue))
        console.log(this.queue.join("-"))
        console.log(this.queue.toString())
    }
}

const queue = new Queue()

console.log("before enqueue:",queue);

console.log(queue.findFront())

queue.enqueue("Virat")
queue.enqueue("Kohli")

queue.enqueue("Neeraja")
queue.enqueue("Arun")
queue.enqueue("Lahari")
console.log("after enqueue:",queue);



queue.dequeue()
console.log("delItem:",queue.dequeue())
console.log("after dequeue:",queue);

sizeOfQueue=queue.size()
console.log("sizeOfQueue:",sizeOfQueue)

console.log(queue.findFront())

console.log("isQueueEmpty:",queue.isEmpty())

console.log("finalQueue:",queue.queue)

queue.traverseQueue()


const queue2 = new Queue()

for(let i=1;i<=10;i++){
    queue2.enqueue(i)
}

console.log(queue.queue)
queue2.traverseQueue()

while (!queue2.isEmpty()){
    queue2.dequeue()
}
console.log(queue2.queue)