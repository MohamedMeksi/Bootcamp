import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        try:
            connection = psycopg2.connect(
                dbname="restaurant",
                user="postgres",
                password="12345",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            query = "SELECT * FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (item_name,))
            result = cursor.fetchone()
            return result
        except Exception as e:
            print(f"Error: {e}")
        finally:
            if connection:
                connection.close()

    @classmethod
    def all_items(cls):
        try:
            connection = psycopg2.connect(
                dbname="restaurant",
                user="postgres",
                password="12345",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            query = "SELECT * FROM Menu_Items"
            cursor.execute(query)
            results = cursor.fetchall()
            return results
        except Exception as e:
            print(f"Error: {e}")
        finally:
            if connection:
                connection.close()