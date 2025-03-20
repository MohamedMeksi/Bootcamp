from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("\n--- Restaurant Menu ---")
    print("V - Voir un article")
    print("A - Ajouter un article")
    print("D - Supprimer un article")
    print("U - Mettre à jour un article")
    print("S - Afficher le menu")
    print("Q - Quitter")
    
    choice = input("Choisissez une option: ").upper()
    return choice

def add_item_to_menu():
    name = input("Entrez le nom de l'article: ")
    price = int(input("Entrez le prix de l'article: "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu():
    name = input("Entrez le nom de l'article à supprimer: ")
    item = MenuItem(name, None) 
    item.delete()

def update_item_from_menu():

    name = input("Entrez le nom de l'article à mettre à jour: ")
    new_name = input("Entrez le nouveau nom de l'article: ")
    new_price = int(input("Entrez le nouveau prix de l'article: "))
    item = MenuItem(name, None)
    item.update(new_name, new_price)

def show_restaurant_menu():

    items = MenuManager.all_items()
    print("\n--- Menu du Restaurant ---")
    for item in items:
        print(f"{item[1]} --> {item[2]} MAD") 

def main():
    while True:
        choice = show_user_menu()

        if choice == "V":
            name = input("Entrez le nom de l'article à afficher: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item[1]} --> {item[2]} MAD")
            else:
                print("Article non trouvé.")
        
        elif choice == "A":
            add_item_to_menu()
        
        elif choice == "D":
            remove_item_from_menu()
        
        elif choice == "U":
            update_item_from_menu()
        
        elif choice == "S":
            show_restaurant_menu()
        
        elif choice == "Q":
            print("Au revoir")
            break
        else:
            print("Option invalide, essayez de nouveau.")

if __name__ == "__main__":
    main()
