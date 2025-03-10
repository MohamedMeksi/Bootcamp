import random

games_won = 0
games_lost = 0

while True:
    num = int(input("Enter a number between 1 and 9 (or 0 to quit): "))
    if num == 0:
        break

    random_number = random.randint(1, 9)

    if random_number == num:
        print("Winner")
        games_won += 1
    else:
        print("You lost")
        games_lost += 1

    print(f"The random number was {random_number}")

print(f"Total games won: {games_won}")
print(f"Total games lost: {games_lost}")