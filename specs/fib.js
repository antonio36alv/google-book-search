fib(1, 1, 1)

function fib(x, y, i) {

    let jawn = i
    var ser = x + y
    console.log(1 + ": " + ser)
    i === 10 ? done() : fib(y, ser, jawn + 1)
}

function done() {
    console.log("black and yellow")
}