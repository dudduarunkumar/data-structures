console.log("Stack");
const stack = []

const pushItemInStack=(item)=>{
    stack.push(item)
}

function peekOfStack(){
    const stackLength=stack.length
    const topIndex = stackLength-1
    return stack[topIndex]
}

function popItemFromStack(){
    const deletedItem= stack.pop()
    return deletedItem
}

function findLenthOfStack(){
    return stack.length
}

const peek1 = peekOfStack()
console.log("peek1:",peek1);

console.log(stack);
pushItemInStack("Arun");
pushItemInStack("Neeraja");
pushItemInStack("Lahari");
console.log(stack);

const peek2= peekOfStack()
console.log("peek2:",peek2);

pushItemInStack("Virat")
console.log(stack)

pushItemInStack("Kohli")
console.log(stack)

console.log("lenghtOfStack:",findLenthOfStack());


let popItem1=popItemFromStack()
console.log("popItem1:",popItem1)
console.log(stack)

console.log("lenghtOfStack:",findLenthOfStack());


popItem1=popItemFromStack()
console.log("popItem1:",popItem1)
console.log(stack)

console.log("lenghtOfStack:",findLenthOfStack());
