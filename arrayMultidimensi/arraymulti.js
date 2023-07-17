// let arr = [
//     [1, 1, 1]
//     [1, 1, 1]
//     [1, 1, 1]
// ]

// for(var i = 0; i < 3; i++){ 
//     var temp = []
//     for(var j = 0; j < 3; j++) {
//         temp.push[1]
//     }
//     result.push(temp)
// }
// console.log(result)


// let arr1 = [
//     [1,1,1]
//     [1,1,1]
//     [1,1,1]
// ]
 
// for(let i = 0; i < 3; i++) {
//     let tempt = []
//     for(let j = 0; j < 3; j++) {
//         tempt.push(1)
//     }
//     ress.push(tempt)
// }
// console.log(ress)


// function kedua(arr2)
// for(let i = 0; i < arr2; i++) {
//     tempt2 = []
//     tampungan= []
//     for (let j = 0; j < arr2; j++) {
//         tampungan += []

//     }
//     if(i == 0 && i !== 0) {
//         tempt2 += arr2[i]
//         tempt2.push(tampungan)
//     }
//     return 
// }
// console.log(result)




function ketiga(n) {
    var temp3 = [] //
    var kosong = [] //

    for (let i = 1; i <= 9; i++){
        

                if(i % 2 === 0) {
                    kosong.push("X")
                } else if (i % 2 === 1 ){
                    kosong.push("O")     
                }if(i % 3 === 0 && i !== 0) {
                    temp3.push(kosong)
                    kosong = []
                }
            }
            return temp3
        }
           
        console.log(ketiga(9))