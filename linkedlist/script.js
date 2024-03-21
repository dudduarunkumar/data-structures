console.log("linked list")

class Node{
    constructor(data,next=null){
        this.data=data,
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    // insertAtFirst : Insert the item at the first position / starting
    insterAtFirst(data){
        const newNode = new Node(data,this.head)
        this.head = newNode
    }

    // insertAtLast : Insert the item at the last position / Ending
    insertAtLast(data){
        const newNode = new Node(data)
        let current= this.head

        while(current.next!==null){
            current=current.next
        }

        current.next = newNode
    }
    // insertAt : Insert at specific index/middle 
    // getItemAtStarting : Get the first item from the LL
    // getItemAtEnding : Get the last item from the LL
    // getItemAt : Get item at nth index in the LL


    printList(){
        let current = this.head;
        let itemString=""
        while(current !== null){
            console.log(current)
            console.log("item---:",current.data)
            itemString+=current.data+" --> "
            current=current.next
        }
        console.log("itemString:",itemString)
    }
}
// let node =new Node("google",null)
// console.log(node)

const ll = new LinkedList()
ll.insterAtFirst("www.apple.com")
// console.log(ll.head)
ll.insterAtFirst("www.samsung.com")
// console.log(ll.head)

ll.insterAtFirst("www.nokia.com")
// console.log(ll.head)

ll.insterAtFirst("www.mi.com")


ll.printList();

ll.insertAtLast("www.oneplus.com")
ll.printList();
