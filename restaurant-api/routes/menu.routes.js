const express = require('express');
const router = express.Router();
const Menu = require('../model/menu.model');

router.get('/', (req, res) => {
  Menu.getList((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  Menu.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result[0]);
    }
  });
});

router.post('/', (req, res) => {
  Menu.create(req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Menu created successfully' });
    }
  });
});

router.put('/:id', (req, res) => {
  Menu.update(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Menu updated successfully' });
    }
  });
});

router.delete('/:id', (req, res) => {
  Menu.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Menu deleted successfully' });
    }
  });
});

router.get('/bar/:id', (req, res) => {
  Menu.getListBar(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;