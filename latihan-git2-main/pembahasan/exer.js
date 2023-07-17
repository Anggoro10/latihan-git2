module.exports = class Queue {
    constructor(){
        this.list = []
    }

    addQueue(item) {
        this.list.push(item)
    }

    print(){
        console.log(this.list)
    }

    itemShift(){
        return new Promise((resolve, reject) => {
            if(this.list.length > 0){
                var timeProcessing = Math.floor(Math.random() * 10)
                setTimeout(() => {
                    console.log("Queue ",this.list[0],"done in ",timeProcessing," second")
                    resolve(this.list.shift())
                }, timeProcessing*1000)
            }else{
                reject("Pesanan Selesai")
            }
        })
    }
    async run(){
        while(this.list.length > 0){
            try {
                await this.itemShift()
            } catch(err){
                console.log("err => ",err)
            }
        }
    }
}