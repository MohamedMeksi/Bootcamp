import random
def get_random_temp(season):
    if season == "winter":
        return float( random.randint(-10, 16))
    elif season == "spring":
        return float( random.randint(16, 24))
    elif season == "summer":
        return float( random.randint(25, 40))
    elif season == "autumn":
        return float( random.randint(10, 20))
    else:
        return None

def main():
    season = input("What season is it 'wintre , spring ,summer,autumn'? ")
    temp = get_random_temp(season)
    print(f"Today's temperature is {temp} degrees Celsius.")
    if season == "winter" and temp > -10 and temp < 16:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif season == "spring" and temp > 16 and temp < 24:
        print("It's a scorcher out there! Remember to stay hydrated.")
    elif season == "summer" and temp > 25 and temp < 40:
        print("It's a scorcher out there! Remember to stay hydrated.")
    elif season == "autumn" and temp > 10 and temp < 20:
        print("It's a scorcher out there! Remember to stay hydrated.")
    else:
        print("It's a scorcher out there! Remember to stay hydrated.")



print (main())