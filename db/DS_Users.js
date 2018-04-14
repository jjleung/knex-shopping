const knex = require("../knex/knex.js");

const getUserById = id => {
  return knex
    .select()
    .from("users")
    .where({
      user_id: id
    })
    .then(users => {
      return users[0];
    });
};

const getUserByEmail = email => {
  return knex
    .select()
    .from("users")
    .where({
      email: email
    })
    .then(users => {
      return users[0];
    });
};

const checkEmailPassword = (email, password) => {
  return knex
    .select()
    .from("users")
    .where({
      email: email,
      password: password
    })
    .then(users => {
      return users[0];
    });
};

const registerUser = (email, password) => {
  return knex("users").insert(
    [
      {
        email: email,
        password: password
      }
    ],
    "*"
  );
};

const updatePassword = (id, password) => {
  return knex("users")
    .where("user_id", id)
    .update("password", password);
};

const deleteUser = id => {
  return knex("users")
    .where("user_id", id)
    .del();
};

module.exports = {
  getUserById,
  getUserByEmail,
  checkEmailPassword,
  registerUser,
  updatePassword,
  deleteUser
};
