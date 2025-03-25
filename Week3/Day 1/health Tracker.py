from models import add_activity, generate_fake_data, get_weekly_report
from database import init_db
import sys

def display_text_plot(dates, values, title="", width=50):
    if not values:
        print("Aucune donnée à afficher")
        return
    
    max_value = max(values)
    min_value = min(values)
    scale = width / (max_value - min_value) if max_value != min_value else 1
    
    print(f"\n{title.center(width)}")
    for date, value in zip(dates, values):
        bar = "█" * int((value - min_value) * scale)
        print(f"{date}: {bar} {value}")

def main():
    init_db()
    while True:
        print("\n=== HEALTH TRACKER ===")
        print("1. Ajouter une activité")
        print("2. Générer des données fictives")
        print("3. Afficher le rapport hebdomadaire (texte)")
        print("4. Exporter en JSON")
        print("5. Quitter")
        
        choice = input("Choix : ")
        
        if choice == "1":
            try:
                date = input("Date (YYYY-MM-DD) : ")
                steps = int(input("Nombre de pas : "))
                calories = float(input("Calories brûlées : "))
                sleep = float(input("Heures de sommeil : "))
                add_activity(date, steps, calories, sleep)
                print("✅ Activité enregistrée !")
            except ValueError:
                print("❌ Format de données invalide !")
            
        elif choice == "2":
            try:
                count = int(input("Nombre d'entrées à générer : "))
                generate_fake_data(count)
                print(f"📊 {count} données fictives générées !")
            except ValueError:
                print("❌ Veuillez entrer un nombre valide !")
            
        elif choice == "3":
            data = get_weekly_report()
            if data:
                dates = [str(entry[0]) for entry in data]
                steps = [entry[1] for entry in data]
                display_text_plot(dates, steps, "Pas par jour (7 derniers jours)")
                
                # Statistiques de base
                avg = sum(steps) / len(steps)
                print(f"\nMoyenne: {avg:.0f} pas/jour | Max: {max(steps)} | Min: {min(steps)}")
            else:
                print("❌ Aucune donnée disponible !")
                
        elif choice == "4":
            # Export JSON optionnel
            import json
            data = get_weekly_report()
            with open("export.json", "w") as f:
                json.dump(data, f, indent=2, default=str)
            print("💾 Données exportées dans export.json")
            
        elif choice == "5":
            sys.exit(0)

if __name__ == "__main__":
    main()