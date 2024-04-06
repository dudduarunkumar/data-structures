class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next
    }
}
   

class LinkedList{
    constructor(){
        this.head= null;
        this.size = 0
    }

    printLinkedList(){
        let current = this.head
        let res = ""
        // console.log(current)
        while(current!==null){
            res+=current.data+"-->"
            current=current.next
        }
        console.log("res:",res)
    }

    insertAtStart(data){
        const newNode = new Node(data,this.head)
        this.head = newNode
        this.size++
    }

    insertAtEnd(data){
        const newNode = new Node(data,null)
        let current = this.head

        while(current.next!==null){
            current = current.next
        }
        this.size++
        current.next = newNode
    }

    insertAt(data,index){
        if(index<0 || index>this.size){
            console.log("Invalid Index")
            return
        }
        else if(index==0){
            this.insertAtStart(data)
        }
        else{
            const newNode = new Node(data)
            let current=this.head;
            let previous;
            let counter=0;
            while(counter<index){
                previous= current
                counter+=1
                current=current.next
            }
            this.size++
            previous.next = newNode;
            newNode.next = current
        }
    }

    deleteFirst(){
        let current = this.head
        this.head = current.next
        this.size--
    }

    deleteLast(){
        let current = this.head
        let prev;
        while(current.next!==null){
            prev = current
            current= current.next
        }
        this.size--
        prev.next = current.next
    }

    getSize(){
        return this.size
    }



}

const ll = new LinkedList()
ll.printLinkedList()

ll.insertAtStart("apple.com")
ll.printLinkedList()


ll.insertAtEnd("Samsung.com")
// ll.printLinkedList()


ll.insertAtStart("mi.com")
ll.insertAtStart("oppo.com")

ll.insertAtEnd("oneplus.com")
ll.printLinkedList()


ll.insertAt("vivo.com",2)
ll.insertAt("vivo1.com",12)
ll.printLinkedList()
ll.insertAtStart("deleteFirst.com")
ll.printLinkedList()

ll.deleteFirst()
ll.printLinkedList()

ll.insertAtEnd("delteLast.com")
ll.printLinkedList()

ll.deleteLast()
ll.printLinkedList()


const size = ll.getSize()
console.log(size);

