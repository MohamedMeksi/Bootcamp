import random
from EX2 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{dog_names} tous jouent ensemble")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} fait un tonneau",
                f"{self.name} se tient sur ses pattes arrières",
                f"{self.name} te serre la main",
                f"{self.name} fait le mort"
            ]
            print(random.choice(tricks))