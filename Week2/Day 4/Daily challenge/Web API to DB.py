import psycopg2
import requests
import random

try:
    connexion = psycopg2.connect(dbname="countries",user="postgres",password="12345",host="localhost",port="5432"
    )
    cur = connexion.cursor()
    print(" la connexion est faite à la base de données ")
except psycopg2.Error as e:
    print(f" Erreur de connexion : {e}")
    exit()

def fetch_random_countries():
    url = "https://restcountries.com/v3.1/all"
    try:
        response = requests.get(url)
        response.raise_for_status()
        all_countries = response.json()
        random_countries = random.sample(all_countries, 10)
        
        country_data = []
        for country in random_countries:
            country_data.append((
                country.get("name", {}).get("common", "Inconnu"),
                country.get("capital", ["Inconnu"])[0],
                country.get("flags", {}).get("png", ""),
                country.get("subregion", "Inconnu"),
                country.get("population", 0),
            ))
        return country_data
    except requests.exceptions.RequestException as e:
        print(f" Erreur lors de la récupération des pays : {e}")
        return []

def save_to_db(countries):
    try:
        cur.execute("""
        CREATE TABLE IF NOT EXISTS countries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            capital VARCHAR(255),
            flag TEXT,
            subregion VARCHAR(255),
            population BIGINT
        )
        """)
        connexion.commit()
        print(" Table 'countries' créée.")

        query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"
        cur.executemany(query, countries)
        connexion.commit()
        print(" Données insérées avec succès.")
    except psycopg2.Error as e:
        print(f" Erreur lors de l'insertion des données : {e}")

if __name__ == "__main__":
    countries = fetch_random_countries()
    if countries:
        save_to_db(countries)

    cur.close()
    connexion.close()
    print(" Connexion à la base de données fermée.")