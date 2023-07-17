 class Stack {
    #maxSize
    #container = []

    constructor(maxSize = 10) {
        this.#maxSize = maxSize
    }

    isFull() {
        return this.#container.length >= 0
    }

    isEmpty() {

    }

    push(element) {
        if(this.#container.length < this.#maxSize){
            this.#container.push(element)
        }else {
            console.log("stack overflow")
        }
    }

    pop() {
        // this.#container.pop()
        if(!this.#isEmpty()) {
            this.#container.pop()
        }else{
            console.log("stack overflow")
        }

    }

    getElements() {
        return this.#container
    }

 }

let stack1 = new stack(5)
stack1.push(1)
stack1.push(3)
stack1.pus(7)
stack1.pop()
stack1.push(8)
stack1.pus(9)
stack1.pus(0)
stack1.pus(3)