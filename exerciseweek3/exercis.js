// Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// ● Example :
// ○ Input : AB
// ○ Output : 28
function ConvertExcel(number) {
    let hasil = 0;
    for (let i = 0; i < number.length; i++) {
      let hasil1 = (number[i].charCodeAt(0) - 65) + 1; // 65 - 65 + 1 = 1
      hasil = (hasil * 26) + hasil1
    }
    return hasil;
  }
  const huruf ='AB'
  console.log(ConvertExcel(huruf)); // 28
//   let a = 'A'
//   console.log('A'.charCodeAt(0));
//   console.log(a.charAt(0));


//
// console.log("=========== NO 2 ============")
// // Given a non-empty array of integers nums, every element appears twice except for one. Find
// // that single one.
// // ● You must implement a solution with a linear runtime complexity and use only constant extra
// // space.
// // ● Example 1:
// // ○ Input: nums = [2,2,1]
// // ○ Output: 1
// // ● Example 2:
// // ○ Input: nums = [4,1,2,1,2]
// // ○ Output: 4
// // ● Example 3:
// // ○ Input: nums = [1]
// // ○ Output: 1
// console.log("====== CARA PERTAMA ======")
// var nums = [2,3,3,4,4,1]
// function SingleNum(nums) { // [2,3,2,3,4]
//     let templete = 0
//     for (let i = 0; i < nums.length; i++){ //MASIH ADA SALAHNYA JIKA DITAMBAHIN ANGAK YG BEDA SALAH HASILNYA
//         templete[i] ^= nums
//     }
//     return templete
// }
// console.log(SingleNum(nums))

// console.log("===== CARA KEDUA =====")
           
// var nilai = [2,3,2,1,1,5]
// function cekDouble(nilai) {
//     let hasil = nilai
//     for (let i = 0; i < nilai.length; i++) { //[2,32,2,1,1]
//         for (let j = 0; j < nilai.length; j++) { 
//             if(hasil[i] == nilai[j] && i !== j) {
//                 hasil[i] = undefined
//                 nilai[j] = undefined
//             }
//         }
//     }
//     for (let k = 0; k < hasil.length; k++) { // MASIH ADA YANG SALAH
//         if (hasil[k] !== undefined) {
//             return hasil[k]
//         }
        
//     }
// }
// console.log(cekDouble(nilai));

// console.log("====== CARA KETIGA =======")
// function single(arr){
//     let result=[]
//     for(var i = 0; i < arr.length; i++){
//         let benar = true
//         for(var j = 0; j < arr.length; j++){
//             if(i != j && arr[i] === arr[j]){
//                 benar = false
//                 }
//             }
//             if(benar == true){
//             result.push(arr[i])
//             }
//         }
//         return result
//     }
// console.log(single([4,4,3,2,1,1,2,5,5,6]))

//
// console.log("====== NO 1 ======")
// function excelCell(cell) {
//      let ress= 0
//      let cellLength = cell.length

//      for(var i = 0; i < cellLength; i++) {
//         let charVal = findAlpha(cell[i])
//         ress += (26 ** (cellLength-1-i)) * charVal
//      }
//      return ress
// }
// function findAlpha(char) {
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for(var i = 0; i < alphabet.length; i++) {
//         if(char == alphabet[i]) {
//             return i+1
//         }
//     }
//     return null
// }

// console.log(excelCell("AB"))
// console.log(excelCell("AC"))
// console.log(excelCell("A"))


// function bandingkanSama(number) {
//     for(var i = 0; i < number.length; i++) {
//         var single = true
//         for(var j = 0; j < number.length; j++) {
//             if(number[i] == number[j] && i != j){
//                 single = false
//                 break

//             }
//         }
//         if(single) {
//             result.push(arr[j])
//         }
//     }
//     return result
// }
// console.log(bandingkanSama([1,1,2,2,3,4,5,5.2,3]))



// function anagram(str, str2) {
//     var arr = str.split("")
//     var arr2 = str2.split("")
//     if(arr.length != arr2.length) {
//         return false
//     }

//     for(var i = 0; arr.length; i++) {
//         var res = false
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr[i] == arr2[j] == arr2[j] && arr[i] !== null || arr2[j] != null) {
//                 arr[i] = null
//                 arr2[j] = null
//                 res = true
//                 break
//             }
//             if(!res) {
//                 break
//             }
//         }
//     }
//     return res
// }

// console.log(anagram("dimas" , "samid"))

function tangga(n) {
    if(n > 1) {
        return tangga(n-1) + tangga(n-2)
    }else {
        return 1
    }
}
 console.log(tangga(10))