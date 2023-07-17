// let obj = {
//     'dimas': "001",
//     'haekal': "002"
// }

const myMap = new Map()

    myMap.set("dimas", "001")
    myMap.set("haekal","002")

    console.log(myMap)
    console.log(myMap.size)

    for(let [key, value] of myMap) {
        console.log(key, ' and ', value)
}