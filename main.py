def on_button_pressed_a():
    global n
    n += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global n
    n = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global n
    n += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

n = 0
n = 0

def on_forever():
    basic.show_number(n)
basic.forever(on_forever)
