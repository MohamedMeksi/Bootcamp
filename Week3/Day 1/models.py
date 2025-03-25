# models.py
from database import get_db_connection
import random
from faker import Faker

fake = Faker()

def add_activity(date, steps, calories, sleep_hours):
    conn = get_db_connection()
    if conn:
        try:
            cur = conn.cursor()
            cur.execute(
                '''INSERT INTO activities (date, steps, calories, sleep_hours)
                VALUES (%s, %s, %s, %s)''',
                (date, steps, calories, sleep_hours)
            )
            conn.commit()
        finally:
            conn.close()

def generate_fake_data(num_entries=10):
    for _ in range(num_entries):
        add_activity(
            date=fake.date_this_year(),
            steps=random.randint(1000, 15000),
            calories=random.uniform(150, 800),
            sleep_hours=random.uniform(4, 10)
        )

def get_weekly_report():
    conn = get_db_connection()
    if conn:
        try:
            cur = conn.cursor()
            cur.execute('''
                SELECT date, steps, calories, sleep_hours
                FROM activities
                ORDER BY date DESC
                LIMIT 7
            ''')
            return cur.fetchall()
        finally:
            conn.close()
    return []