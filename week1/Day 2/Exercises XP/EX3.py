
brand = {
    "name": "Zara", 
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# Step 2: Change the number of stores to 2
brand["number_stores"] = 2

# Step 3: Print a sentence that explains who Zara's clients are
print("Zara vend des vêtements pour", brand["type_of_clothes"])

# Step 4: Add a key called country_creation with a value of Spain
brand["country_creation"] = "Spain"

# Step 5: Check if the key international_competitors is in the dictionary and add Desigual
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Step 6: Delete the information about the date of creation
#*del fonction permet de supprimer une clé et sa valeur
del brand["creation_date"]

# Step 7: Print the last international competitor
print(f"The last international competitor is: {brand['international_competitors'][-1]}.")

# Step 8: Print the major clothes colors in the US
print(f"The major clothes colors in the US are: {brand['major_color']['US']}.")

# Step 9: Print the amount of key value pairs
print(f"The number of key-value pairs in the dictionary is: {len(brand)}.")

# Step 10: Print the keys of the dictionary
print(f"The keys of the dictionary are: {list(brand.keys())}.")

# Step 11: Create another dictionary called more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Step 12: Add the information from more_on_zara to brand
brand.update(more_on_zara)

# Step 13: Print the value of the key number_stores
print(f"The number of stores is now: {brand['number_stores']}.")
# The number of stores is now 10000 because the update method replaced the old value with the new one.