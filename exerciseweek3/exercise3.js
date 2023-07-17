    class Antrian {
        constructor() {
            this.antri = []
        }

        pesanan(order) {
            this.antri.push(order);
        }
    
        finishOrder(waktuRandom) {
            let orderan = this.antri.shift();
            console.log(`Pesanan ${orderan} => Telah Selesai Dibuat Selama ${waktuRandom} DETIK`);

        }

        antrian() {
            this.antri.map((res, key) => {
                console.log(`pesanan antria ${key+1} adalah ${res}`)
            })
        }
        
        waktuTunggu(waktu) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, waktu * 1000);
            })
        }
        async process() {
            while (this.antri.length > 0) {
                const waktuRandom = Math.floor(Math.random() * 10);
                await this.waktuTunggu(waktuRandom);
                this.finishOrder(waktuRandom);
            }
            console.log("pesanan selesai, selamat menikmati makanannya");
        }
    }
    module.exports = Antrian

    // const Antrian = require("./antri");

    // const antri = new Antrian()

    // antri.pesan("chicken teriyaki")
    // antri.pesan("bistik ayam")
    // antri.pesan("beef burger")
    // antri.pesan("semur jengkol")
    // antri.pesan("telor balado")
    // antri.pesan("nasi uduk")
    // antri.pesan("ketoprak")