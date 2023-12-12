const express = require('express');
const router = express.Router();
const Pedido = require('../model/pedido.model');

router.get('/', (req, res) => {
    Pedido.getList((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
    Pedido.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result[0]);
    }
  });
});

router.post('/', (req, res) => {
    Pedido.create(req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Pedido created successfully' });
    }
  });
});

router.put('/:id', (req, res) => {
    Pedido.update(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Pedido updated successfully' });
    }
  });
});

router.delete('/:id', (req, res) => {
    Pedido.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Pedido deleted successfully' });
    }
  });
});

module.exports = router;