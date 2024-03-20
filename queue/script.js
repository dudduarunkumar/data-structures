console.log("queues...");

let queue = []

function enqueue(newItem){
    queue.push(newItem)
}

function dequeue(){
    const delItem=queue.shift()
    return delItem
}

function size(){
    return queue.length
}

function findFront(){
    return queue[0]
}

function isEmpty(){
    if(queue.length>0){
        return false
    }
    return true
}
console.log("before enqueue:",queue);

console.log(findFront())

enqueue("Virat")
enqueue("Kohli")

enqueue("Neeraja")
enqueue("Arun")
enqueue("Lahari")
console.log("after enqueue:",queue);



dequeue()
console.log("delItem:",dequeue())
console.log("after dequeue:",queue);

sizeOfQueue=size()
console.log("sizeOfQueue:",sizeOfQueue)

console.log(findFront())

console.log("isQueueEmpty:",isEmpty())
