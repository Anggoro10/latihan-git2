    function binarySearch(arr, l, range, x) {
        if(range >= l) {
            let mid = l + Math.floor((range - l) / 2)

            if(arr[mid] == x) return mid
            console.log("ketemu di index => ")
            return mid

            if(arr[mid] > x) {
                console.log("jika lebih besar dari"+x+", mid")

                return binarySearch(arr, l, mid-1, x)
            }
            return binarySearch(arr, mid + 1, range, x)
        }
        return -1
    }
   console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],0,8,11))

   
