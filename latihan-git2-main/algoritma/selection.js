function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let tempt = null
       
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                tempt = arr[i]
                arr[i] = arr[j]
                arr[j] = tempt
            }
        }
    }
    return arr
}
console.log(selectionSort([2,5,6,1,3,9,4,8,7,10]))