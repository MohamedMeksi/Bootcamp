# database.py
import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

def get_db_connection():
    """Établit la connexion à PostgreSQL"""
    try:
        conn = psycopg2.connect(
            host=os.getenv('DB_HOST'),
            database=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            port=os.getenv('DB_PORT')
        )
        return conn
    except Exception as e:
        print(f"❌ Erreur de connexion : {e}")
        return None

def init_db():
    """Initialise la table activities"""
    conn = get_db_connection()
    if conn:
        try:
            cur = conn.cursor()
            cur.execute('''
                CREATE TABLE IF NOT EXISTS activities (
                    id SERIAL PRIMARY KEY,
                    date DATE NOT NULL,
                    steps INTEGER,
                    calories FLOAT,
                    sleep_hours FLOAT
                )
            ''')
            conn.commit()
        finally:
            conn.close()