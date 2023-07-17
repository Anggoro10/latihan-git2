    function tryThrow() {
        try {
            let isFalse = true
            console.log("task1")
            if(isFalse) {
                throw "This is error"
            }
            console.log("success")

        }catch (err) {
            console.log("black catch =>", err)
        }
    }

    function tryThrow() {

            let isFalse = true
            console.log("task1")
            if(isFalse) {
                throw new Error("This is error")
            }
            console.log("success")
        }
   

    tryThrow()
    