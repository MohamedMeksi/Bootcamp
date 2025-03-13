class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} aboie"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} a gagné le combat"
        elif self_score < other_score:
            return f"{other_dog.name} a gagné le combat"
        else:
            return "Le combat est un match nul"

# Créer 3 chiens
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Max", 4, 25)

# Faire courir les chiens
print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())

# Faire combattre les chiens
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))