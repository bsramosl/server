const express = require('express');
const authModel = require('../model/auth.model');

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  authModel.loginUser(username, password, (err, result) => {
    if (err) {
        console.error(err);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

module.exports = router;