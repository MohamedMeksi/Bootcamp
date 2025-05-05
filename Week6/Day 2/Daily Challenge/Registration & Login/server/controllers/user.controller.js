import bcrypt from 'bcrypt';
import {
  createUserWithTransaction,
  findUserByUsername,
  getAllUsers,
  getUserById,
  updateUserById
} from '../models/user.model.js';

const SALT_ROUNDS = 10;

export const register = async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUserWithTransaction({ email, username, first_name, last_name }, hashedPassword);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', detail: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    res.json({ message: 'Login successful', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
};

