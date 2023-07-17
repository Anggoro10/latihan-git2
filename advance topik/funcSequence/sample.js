    var result
    
    function great (str) {
        result = str
    }

    function hello() {
        great("hello")
    }

    function arigatou() {
        great("arigatou")
    }

    arigatou()
    hello()
    console.log(result)