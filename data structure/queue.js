class Queue {
    #maxSize
    #container = []

    constructor(maxSize = 10){
    this.#maxSize = maxSize
    }
    enqueue(element){

        this.#container.push(element)

    }

    dequeue () {
        this.#container.shift()
    }

    getElement() {
        return this.#container
    }
}

let q1 = new Queue(4)

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

console.log(q1.getElement())