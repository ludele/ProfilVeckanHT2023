from gpiozero import LED
from time import sleep

red_lamp_pins = [2, 3, 4, 5, 6] # GPIO pins
green_lamp_pins = [7, 8, 9, 10, 11]

red_lamps = [LED(pin) for pin in red_lamp_pins]
green_lamps = [LED(pin) for pin in green_lamp_pins]

def activate_lamp(lamp, delay):
    print(f"Activating lamp on pin {lamp.pin}")
    lamp.on()
    sleep(delay)

def turn_off_lamp(lamp, delay):
    print(f"Turning off lamp on pin {lamp.pin}")
    lamp.off()
    sleep(delay)

def begin_race():
    delay = 1
    for red_lamp in red_lamps:
        activate_lamp(red_lamp, delay)

    for red_lamp in reversed(red_lamps):
        turn_off_lamp(red_lamp, 0.5)

    for green_lamp in green_lamps:
        activate_lamp(green_lamp, 0)

begin_race()