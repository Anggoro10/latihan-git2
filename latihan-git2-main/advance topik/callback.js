function foo() {
    // foo()
    console.log("ini foo")
    return "nilai foo"
}

function bar() {
    console.log(foo) // nilai foo
    // apalah()
}
// bar(foo)

bar(() => {
    console.log("ini function")
})
// bar(apalah)



function calculator(a, b) { 
    return a+b
}

function displayer(something) {
    console.log(something(5,5))
}

let result = calculator
displayer(result)

function calculator2(a,b) {
    let res = a + b
    displayer(res)
}
calculator2(4,5)
