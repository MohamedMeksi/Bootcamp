from Game import Game  # Importation de la classe Game

class User:
    def __init__(self):
        self.results = {'win': 0, 'loss': 0, 'draw': 0}

    def get_user_menu_choice(self):
        """Demande à l'utilisateur de choisir une option."""
        return input("\nChoose an option:\n"
                     "1. Play a new game 🎮\n"
                     "2. Show scores 📊\n"
                     "3. Quit ❌\n"
                     "Enter your choice (1/2/3): ").strip()

    def print_results(self):
        """Affiche les scores de l'utilisateur."""
        print("\nMerci pour votre participation !")
        print(f"Résultats : {self.results}")

    def main(self):
        """Boucle principale du jeu."""
        while True:
            user_choice = self.get_user_menu_choice()

            if user_choice == "1":
                print("\nStarting a new game... 🎮")
                game_instance = Game()
                game_instance.play()

                # Mise à jour des scores
                self.results['win'] += game_instance.win
                self.results['loss'] += game_instance.lose
                self.results['draw'] += game_instance.draw

                # ✅ Pause avant de retourner au menu
                input("\nPress Enter to return to the menu...")
                
            elif user_choice == "2":
                self.print_results()

            elif user_choice == "3":
                print("Goodbye! 👋")
                break  # Quitte proprement la boucle

            else:
                print("Invalid choice. Please select 1, 2, or 3.")


mohamed = User()
mohamed.main()
