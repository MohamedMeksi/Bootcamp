class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Creating instances of each cat breed
bengal_cat = Bengal("Bengal", 2)
chartreux_cat = Chartreux("Chartreux", 3)
siamese_cat = Siamese("Siamese", 1)

# Creating a list of all cats
all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Creating an instance of Pets with all_cats
sara_pets = Pets(all_cats)

# Taking all cats for a walk
sara_pets.walk()