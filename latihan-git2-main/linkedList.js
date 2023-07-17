    // let list = {
    //     value:1,
    //     next:{
    //         value2:2,
    //         next:{
    //             value3 : 3,
    //             next: {
    //                 next:null
    //             }
    //         }
    //     }
    // }

    // console.log(list.value)
    // console.log(list.next.value)

    class Node{
        constructor(element) {
            this.element = element
            this.next = 0
        }
    }

    class LinkedList{
        constructor() { null
            this.head =
            this.size = 0
        }
        add(element) {
            let node = new Node(element)

            let current;
            
            if(this.head == null) {
                this.head = node;
            }else{
                current = this.head;


                while(current.next) {
                    current = current.next
                }
                current.next = this.node //object dari sebuah class node
            }
            this.Size += 1
        }

        printList() {
            let curr = this.head;
            console.log(curr)
            while(curr) {
                console,log(curr.element);
                curr = curr.next;
            }
        }
        
        insertAt(element, index) {
            if(index < 0 || index> this.size) {
                console.log("please enter a valid index")
            }else{
                const node = new Node(element);
                let curr = this.head;

                if(index == 0) {
                    node.next = this.head;
                    this.head = node
                }else {
                    curr = this.head
                    let prev 
                    let it = 0

                    while(it < index) {
                        it++
                    }

                    for(let i = 0; i < index; i++) {
                        prev = curr
                        curr = curr.next

                    }

                    prev.next = node
                    node.next = curr
                }
                this.size += 1
            }
        }
    }

    var objlinkedList = new LinkedList() 

    objlinkedList.add("A")
    objlinkedList.add("B")

    objlinkedList.insertAt("C",0)
    objlinkedList.insertAt("D", 2)