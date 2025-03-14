import random
class Game:
    def __init__(self):
        self.win = 0
        self.draw = 0
        self.lose = 0
    def get_user_item(self):
        user_item = input("Select (R)ock, (P)aper, or (S)cissors: ")
        if user_item == "R" or user_item == "r" or user_item == "P" or user_item == "p" or user_item == "S" or user_item == "s":
            print("User selected: " + user_item.upper())
        else:
            print("Invalid input")
            self.get_user_item()
        return user_item.upper()
    
    def get_computer_item(self):
        computer_item = random.choice(["R", "P", "S"])
        print("Computer selected: " + computer_item)
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            print("You drew!")
            self.draw += 1
            return self.draw
        elif user_item == "S" and computer_item == "R":
            print("You selected scissors. The computer selected rock. You lose")
            self.lose += 1
            return self.lose
        elif user_item == "P" and computer_item == "S":
            print("You selected paper. The computer selected scissors. You lose")
            self.lose += 1
            return self.lose
        elif user_item == "R" and computer_item == "P":
            print("You selected rock. The computer selected paper. You lose")
            self.lose += 1
            return self.lose
        else:
            print("User wins!")
            self.win += 1
            return self.win
    
    def play(self):
            user_item = self.get_user_item()
            computer_item = self.get_computer_item()
            self.get_game_result(user_item, computer_item)
            play_again = input("Play again? (y/n): ")
            if play_again == "y" or play_again == "Y": 
                self.play()
            else:
                print("Game results:")
                print("Wins: " + str(self.win))
                print("Draws: " + str(self.draw))
                print("Losses: " + str(self.lose))
                print("Thanks for playing!")
                return self.win, self.draw, self.lose
                
            
