const express = require('express');
const router = express.Router();
const { User, userService } = require('../model/user.model');

// Ruta para el registro de usuario
router.post('/registro', async (req, res) => {
  try {
    const userData = req.body;
    const registeredUser = await userService.registerUser(userData);
    res.status(201).json(registeredUser);
  } catch (error) {
    console.error('Error durante el registro:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); 


router.get('/', (req, res) => {
  User.getList((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  User.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result[0]);
    }
  });
});
 

router.put('/:id', (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Usuario updated successfully' });
    }
  });
});

router.delete('/:id', (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Usuario deleted successfully' });
    }
  });
});


module.exports = router;