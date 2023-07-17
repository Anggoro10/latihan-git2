    function calculator1(a, b, callback) {
        callback(a + b)
    }

    function displayer(something) {
        console.log(something)
    }

    calculator1(5,5,(something) => {    
        console.log("test")
        console.log("res => ", something)
    })  


    // function calculate (a,b, callme) {
    //     callme(a+b)
    // }

    // function displayer(number) {
    //     console.log(number)
    // }


    const jajanan = [
        {item:"pisang goreng", price:2000},
        {item:"chiki", price:5000},
        {item:"kopi", price:6000}
    ]

    function jajan(duit, item, callback) {
        const sisa = duit - item.price
        callback(sisa)
    }
     jajan(15000, jajanan[0], (sisa) => {
        console.log(sisa)
        jajan(sisa, jajanan[2], (sisa) => {
            console.log(sisa)
            jajan(sisa, jajanan[1], sisa => {
                console.log(sisa)
                jajan(sisa, jajanan[1], sisa => {
                    console.log(sisa)
                })
            })
        })
     })
