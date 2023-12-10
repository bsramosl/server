const express = require('express');
const router = express.Router();
const Bar = require('../model/bar.model');

router.get('/', (req, res) => {
    Bar.getList((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
    Bar.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result[0]);
    }
  });
});

router.post('/', (req, res) => {
    Bar.create(req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Bar created successfully' });
    }
  });
});

router.put('/:id', (req, res) => {
    Bar.update(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Bar updated successfully' });
    }
  });
});

router.delete('/:id', (req, res) => {
    Bar.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Bar deleted successfully' });
    }
  });
});

module.exports = router;