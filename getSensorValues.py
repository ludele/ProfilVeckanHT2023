from gpiozero import DistanceSensor
import time

ultrasonic = DistanceSensor(echo=17, trigger=4)

try:
    while True:
        distance = ultrasonic.distance
        print(distance)
        time.sleep(0.001)
except KeyboardInterrupt:
     pass

