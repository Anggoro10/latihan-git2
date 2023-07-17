// function romanNumera() {
//     var romanNum = {
//     M:1000,
//     CM:900,
//     D:500,
//     CD:400,
//     C:100,
//     L:50,
//     XL:40,
//     IX:9,
//     IV:4,
//     I:1

//     }
    
//     var strSplit = numera.split("")
//     var result = 0

//     for(var i = 0; i < strSplit.length; i++) {
//         // result += romanNum(strSplit[i])
//         if(romanNum[strSplit[i]] < romanNum[strSplit[i+1]]) {
//             result += romanNum[strSplit[i+1]] - romanNum[strSplit[i]]
//             i += 1
//         }else{
//             result += [strSplit[i]] 
//         }
//     }
//     return result

// }

// console.log(romanNumera("XIX"))

console.log("===== exercise stocks =====")
var profit = 0
function stockExchange(stock) {

    for(var i = 0; i < stock.length; i++) {
        for(var j = i+1; j < stock.length; j++) {
            if(stock[j] - stock[i] > profit) {
                profit = stock[j] - stock[i]
            }
        }

    }
    return profit
}

console.log((7,1,5,3,6,4))

console.log("===== exercise segitga pascal ======")
function pascalTriangle (row) {
    var result = []
    for(var i = 0; i < row; i++) {
        var temp = []
        if(i == 0) {
            temp.push(1)
        }else if(i == 1) {
            temp.push(1,1)
        }else{
            for(var j = 0; j <= i; j++) {
                if(j == 0 || j == i) {
                    temp.push(1)
                }else{

                    temp.push( result[i-1][j-1] +  result[i - 1][j])
                }
            }
        }
        result.push(temp)
    }
    return result
}
console.log(pascalTriangle(2))

console.log(pascalTriangle(3))
console.log(pascalTriangle(4))