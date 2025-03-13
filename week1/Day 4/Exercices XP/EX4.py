class Family:
    def __init__(self, nom_de_famille, membres=None):
        self.nom_de_famille = nom_de_famille
        self.membres = membres if membres is not None else []

    def born(self, **kwargs):
        self.membres.append(kwargs)
        print(f"Félicitations à la famille {self.nom_de_famille} pour la naissance de {kwargs['name']}!")

    def is_18(self, name):
        for membre in self.membres:
            if membre['name'] == name:
                return membre['age'] > 18
        return False

    def family_presentation(self):
        print(f"Famille {self.nom_de_famille}:")
        for membre in self.membres:
            print(membre)

# Création de l'instance de la classe Family
famille = Family("Dupont", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

# Appel des méthodes
famille.born(name='Emma', age=0, gender='Female', is_child=True)
print(famille.is_18('Michael'))  # True
print(famille.is_18('Emma'))     # False
famille.family_presentation()