const express = require("express");
const router = express.Router();
const {
  getUserById,
  getUserByEmail,
  checkEmailPassword,
  registerUser,
  updatePassword,
  deleteUser
} = require("../db/DS_Users");
module.exports = router;

router.get("/users/:id", (req, res) => {
  getUserById(req.params.id)
    .then(user => {
      if (user) {
        return res.json(user);
      } else {
        return res.json({ message: "User not found" });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});

router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email)
    .then(user => {
      if (!user) {
        return res.json({ message: "User not found" });
      } else {
        checkEmailPassword(email, password).then(user => {
          if (!user) {
            return res.json({ message: "Incorrect password" });
          } else {
            return res.json(user);
          }
        });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});

router.post("/users/register", (req, res) => {
  getUserByEmail(req.body.email)
    .then(user => {
      if (user) {
        return res.json({ message: "User already exists" });
      } else {
        registerUser(req.body.email, req.body.password).then(user => {
          return res.json(user);
        });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});

router.put("/users/:id/forgot-password", (req, res) => {
  getUserById(req.params.id)
    .then(user => {
      console.log(user);
      if (!user) {
        return res.json({ message: "User not found" });
      } else {
        updatePassword(req.params.id, req.body.password).catch(err => {
          return res.json({ message: "didn't work, yo", obj: `${user}` });
        });
        return res.json({ message: "New password created!" });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});

router.delete("/users/:id", (req, res) => {
  getUserById(req.params.id)
    .then(user => {
      if (!user) {
        return res.json({ message: "User not found" });
      } else {
        deleteUser(req.params.id).catch(err => {
          return res.json({ message: "didn't work, yo", obj: `${user}` });
        });
        return res.json({
          message: `User id: ${req.params.id} successfully deleted`
        });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});
