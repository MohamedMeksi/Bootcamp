import psycopg2

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def _get_connection(self):
        try:
            return psycopg2.connect(
                dbname="restaurant",
                user="postgres",
                password="12345",
                host="localhost",
                port="5432"
            )
        except Exception as e:
            print(f"Error: {e}")
            return None

    def save(self):
        try:
            connexion = self._get_connection()
            if connexion is None:
                return
            cursor = connexion.cursor()
            query = """
            INSERT INTO Menu_Items (item_name, item_price)
            VALUES (%s, %s)
            """
            cursor.execute(query, (self.item_name, self.item_price))
            connexion.commit()
            print(f"Item '{self.item_name}' ajouté avec succès.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            if connexion:
                connexion.close()

    def delete(self):
        try:
            connexion = self._get_connection()
            if connexion is None:
                return

            cursor = connexion.cursor()
            query = "DELETE FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (self.item_name,))
            connexion.commit()
            print(f"Item '{self.item_name}' supprimé avec succès.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            if connexion:
                connexion.close()

    def update(self, new_name, new_price):
        try:
            connexion = self._get_connection()
            if connexion is None:
                return

            cursor = connexion.cursor()
            query = """
            UPDATE Menu_Items 
            SET item_name = %s, item_price = %s 
            WHERE item_name = %s
            """
            cursor.execute(query, (new_name, new_price, self.item_name))
            connexion.commit()
            print(f"Item '{self.item_name}' mis à jour avec succès.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            if connexion:
                connexion.close()