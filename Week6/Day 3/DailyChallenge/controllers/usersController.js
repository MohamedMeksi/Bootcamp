const bcrypt = require("bcrypt");
const fs = require("fs").promises;
// const USERS_FILE = path.join("./Data", 'users.json');

const readUsers = async () => {
  try {
    const data = await fs.readFile("./Data/users.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeUsers = async (users) => {
  try {
    await fs.writeFile("./Data/users.json", JSON.stringify(users, null, 2));
  } catch (err) {
    throw new Error("Failed to write users file");
  }
};

exports.register = async (req, res) => {
  const { name, lastname, email, username, password } = req.body;
  if (!username || !password) return res.send("error1");

  const users = await readUsers();
  if (users.find((u) => u.username === username || u.password === password)) {
    return res.send("error1");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    name,
    lastname,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);
  res.send("register");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const users = await readUsers();
  const user = users.find((u) => u.username === username);

  if (!user) return res.send("user not found");

  const match = await bcrypt.compare(password, user.password);
  res.send(match ? "login" : "username or password is incorrect");
};

exports.getAllUsers = async (req, res) => {
  const users = await readUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const users = await readUsers();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
};

exports.updateUser = async (req, res) => {
  let users = await readUsers();
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index === -1) return res.status(404).send("User not found");

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.send("User updated");
};
