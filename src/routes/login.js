const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = require("../config/db_config.js");
const userMiddleware = require("../middleware/user.js");


// http://localhost:3000/api/login
// routes/router.js

router.post('/login', (req, res, next) => {
    db.query(
      `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
      (err, result) => {
        // users does not exists
        if (err) {
          throw err;
          return res.status(400).send({
            msg: err
          });
        }
  
        if (!result.length) {
          return res.status(401).send({
            msg: 'Akunnya gak ditemukan'
          });
        }
  
        // check password
        bcrypt.compare(
          req.body.password,
          result[0]['password'],
          (bErr, bResult) => {
            // wrong password
            if (bErr) {
              throw bErr;
              return res.status(401).send({
                msg: 'Passwordnya salah!'
              });
            }
  
            if (!bResult) {
              const token = jwt.sign({
                 email: result[0].email,
                  id: result[0].id
                },
                'SECRETKEY', {
                  expiresIn: '3s'
                }
              );
  
              db.query(
                `UPDATE users SET updatedAt = now() WHERE id = '${result[0].id}'`
              );
              return res.status(200).send({
                msg: 'Alhamdulillah Logged in!',
                token,
                user: result[0]
              });
            }
            return res.status(401).send({
              msg: 'Akun gak ada!'
            });
          }
        );
      }
    );
  });

  //http://localhost:3000/api/secret-route
  router.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send("This is secret content!")
  });

  module.exports = router;