import pool from '../config/db.js';

export const createUserWithTransaction = async (user, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const userResult = await client.query(
      `INSERT INTO users (email, username, first_name, last_name)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [user.email, user.username, user.first_name, user.last_name]
    );

    await client.query(
      `INSERT INTO hashpwd (username, password)
       VALUES ($1, $2)`,
      [user.username, hashedPassword]
    );

    await client.query('COMMIT');
    return userResult.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export const findUserByUsername = async (username) => {
  const res = await pool.query(
    `SELECT u.id, u.username, h.password
     FROM users u
     JOIN hashpwd h ON u.username = h.username
     WHERE u.username = $1`,
    [username]
  );
  return res.rows[0];
};

export const getAllUsers = async () => {
  const res = await pool.query(`SELECT * FROM users`);
  return res.rows;
};

export const getUserById = async (id) => {
  const res = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return res.rows[0];
};

export const updateUserById = async (id, data) => {
  const res = await pool.query(
    `UPDATE users
     SET email = $1, first_name = $2, last_name = $3
     WHERE id = $4 RETURNING *`,
    [data.email, data.first_name, data.last_name, id]
  );
  return res.rows[0];
};
