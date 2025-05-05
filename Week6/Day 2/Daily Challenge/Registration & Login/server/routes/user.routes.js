import express from 'express';
import {
  register,
  login,
  getUsers,
  getUser,
  updateUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);

export default router;
