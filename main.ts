basic.forever(function () {
    if (input.temperature() < 18) {
        basic.showString("muito frio!!!")
    } else if (input.temperature() > 24) {
        basic.showString("muito quente!!!")
    } else {
        basic.showString("na medida!!!")
    }
})
