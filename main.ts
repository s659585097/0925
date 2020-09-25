input.onButtonPressed(Button.A, function () {
    n += 1
    if (n > 9) {
        n = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (n == random) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        random = randint(0, 9)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        if (n > random) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                # . # . #
                . # # . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    n += -1
    if (n < 0) {
        n = 9
    }
})
let random = 0
let n = 0
n = 0
random = randint(0, 9)
basic.forever(function () {
    basic.showNumber(n)
})
