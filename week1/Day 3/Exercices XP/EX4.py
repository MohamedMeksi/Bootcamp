class Zoo:
    def __init__(self, zoo_name="Default Zoo"):
        self.name = zoo_name
        self.animals = []  # Liste des animaux
        self.grouped_animals = {}  # Dictionnaire pour stocker les groupes d'animaux

    def add_animal(self, animal):
        """Ajoute un animal s'il n'est pas déjà présent."""
        if animal not in self.animals:
            self.animals.append(animal)
            print(f"{animal} ajouté au zoo.")
        else:
            print(f"{animal} est déjà dans le zoo.")

    def get_animals(self):
        """Affiche la liste des animaux."""
        if self.animals:
            print("Animaux dans le zoo :", ", ".join(self.animals))
        else:
            print("Le zoo ne contient aucun animal.")

    def sell_animal(self, animal_sold):
        """Supprime un animal s'il existe."""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} a été vendu.")
        else:
            print(f"{animal_sold} n'est pas dans le zoo.")

    def sort_animals(self):
        """Trie les animaux et les groupe par première lettre."""
        self.grouped_animals.clear()
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = []
            self.grouped_animals[first_letter].append(animal)
        print("Animaux triés et groupés.")

    def get_groups(self):
        """Affiche les groupes d'animaux."""
        if self.grouped_animals:
            for letter, animals in self.grouped_animals.items():
                print(f"{letter}: {animals}")
        else:
            print("Les animaux n'ont pas encore été triés.")

# Création d'un zoo
new_york_zoo = Zoo("New York Zoo")

# Ajout d'animaux
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Tiger")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Zebra")

# Affichage des animaux
new_york_zoo.get_animals()

# Vente d'un animal
new_york_zoo.sell_animal("Lion")

# Affichage après vente
new_york_zoo.get_animals()

# Tri et groupement des animaux
new_york_zoo.sort_animals()

# Affichage des groupes d'animaux
new_york_zoo.get_groups()
