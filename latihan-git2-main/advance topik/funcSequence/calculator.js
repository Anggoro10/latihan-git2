function calculator(a, b) { 
    return a+b
}

function displayer(something) {
    console.log(something)
}

let result = calculator(5,5)
displayer(result)

function calculator2(a,b) {
    let res = a + b
    displayer(res)
}
calculator2(4,5)


// function callback
