console.log("Stack...");

class Stack{
    constructor(){
        this.stack = []
    }

    pushItemInStack=(item)=>{
        this.stack.push(item)
    }

    peekOfStack(){
        const stackLength=this.stack.length
        const topIndex = stackLength-1
        return this.stack[topIndex]
    }

    popItemFromStack(){
        const deletedItem= this.stack.pop()
        return deletedItem
    }

    findLenthOfStack(){
        return this.stack.length
    }

    traverseStack(){
        let stackItemsInString=""
        for(let count=0;count<this.stack.length;count++){
            const currentItem=this.stack[count]
            stackItemsInString+=currentItem+" "
            console.log("currentItem:",currentItem);
        }
        return stackItemsInString;
    }
}

const stack = new Stack()   // creating object of class Stack

const peek1 = stack.peekOfStack()
console.log("peek1:",peek1);

console.log(stack);

stack.pushItemInStack("Arun");
stack.pushItemInStack("Neeraja");
stack.pushItemInStack("Lahari");
console.log(stack);


stack.pushItemInStack("Virat")
console.log(stack)

stack.pushItemInStack("Kohli")
console.log(stack)

console.log("lenghtOfStack:",stack.findLenthOfStack());


let popItem1=stack.popItemFromStack()
console.log("popItem1:",popItem1)
console.log(stack)

console.log("lenghtOfStack:",stack.findLenthOfStack());


popItem1=stack.popItemFromStack()
console.log("popItem1:",popItem1)
console.log(stack)

console.log("lenghtOfStack:",stack.findLenthOfStack());

const stackString=stack.traverseStack()
console.log("stackString:",stackString);