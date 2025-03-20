import psycopg2   # importing a module to connect to postgres
import psycopg2.extras

# defining our connection criteria
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345'
DATABASE = 'public'

# making the connection to the database
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

# accessing the query editor
cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

# Checking if the 'actors' table exists
query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
cursor.execute(query)
tables = cursor.fetchall()

# Displaying all table names
print("Tables in the database:")
for table in tables:
    print(table['table_name'])

# Assuming 'actors' table exists, proceed with the query
query = "SELECT * FROM actors"
cursor.execute(query)

# fetching the results
results = cursor.fetchall()

# closing the connection
connection.close()

# display results
for item in results:
    print(item)
