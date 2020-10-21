input.onButtonPressed(Button.A, function () {
    if (change == 2) {
        if (x == 4) {
            x = 1
        } else {
            x += 1
        }
    } else {
        x += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (change == 4) {
        change = 1
        x = 0
    } else {
        change += 1
        x = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (change == 2) {
        if (x == 1) {
            x = 4
        } else {
            x += -1
        }
    } else {
        x += -1
    }
})
let x = 0
let change = 0
let number1 = 0
let number2 = 0
let pheptinh = 1
let ketqua = 0
change = 1
basic.forever(function () {
    if (change == 2) {
        pheptinh = x
        if (pheptinh == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (pheptinh == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if (pheptinh == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (pheptinh == 4) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
    }
})
basic.forever(function () {
    if (change == 1) {
        number1 = x
        basic.showNumber(number1)
    } else if (change == 3) {
        number2 = x
        basic.showNumber(number2)
    } else if (change == 4) {
        basic.showString("= ")
        if (pheptinh == 1) {
            basic.showNumber(number1 + number2)
        } else if (pheptinh == 2) {
            basic.showNumber(number1 - number2)
        } else if (pheptinh == 3) {
            basic.showNumber(number1 * number2)
        } else if (pheptinh == 4) {
            basic.showNumber(number1 / number2)
        }
    }
})
