import * as usersDao from "./users-dao.js";

const UserController = (app) => {
  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.post("/api/users/profile", profile);
  app.post("/api/users/logout", logout);
  app.get("/api/users", findUsers);
  app.get("/api/users/:username", findUserByUsername);
  app.put("/api/users/:uid", update);
};

const register = async (req, res) => {
  const username = req.body.username;
  if (!req.body.firstName) {
    res.status(409).send("missing required field: first name");
    return;
  }
  if (!username) {
    res.status(409).send("missing required field: username");
    return;
  }
  if (!req.body.password) {
    res.status(409).send("missing required field: password");
    return;
  }
  const user = await usersDao.findUserByUsername(username);
  if (user) {
    res.status(409).send("username taken");
    return;
  }
  const newUser = await usersDao.createUser(req.body);
  req.session["currentUser"] = newUser;
  res.json(newUser);
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await usersDao.findUserByCredentials(username, password);
  if (user) {
    req.session["currentUser"] = user;
    res.json(user);
  } else {
    res.status(409).send("user not found");
  }
};

const profile = async (req, res) => {
  const currentUser = req.session["currentUser"];
  if (!currentUser) {
    res.status(409).send("session does not have a user");
  } else {
    res.json(currentUser);
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

const update = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  await usersDao.updateUser(userIdToUpdate, updates);
  const updatedUser = await usersDao.findUserById(userIdToUpdate);
  if (updatedUser) {
    req.session["currentUser"] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(409).send("user not found");
  }
};

const findUsers = async (req, res) => {
  const users = await usersDao.findAllUsers();
  res.json(users);
};

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersDao.findUserById(userId);
  res.json(user);
};

const findUserByUsername = async (req, res) => {
  const username = req.params.username;
  const user = await usersDao.findUserByUsername(username);
  if (user) {
    res.json(user);
  } else {
    res.status(409).send("user not found");
  }
};

export default UserController;
