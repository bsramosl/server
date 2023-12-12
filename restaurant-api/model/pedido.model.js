// Reserva.model.js
const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const Pedido = {
  getList: (callback) => {
    connection.query('SELECT * FROM pedido', callback);
  },
  get: (id, callback) => {
    connection.query('SELECT * FROM pedido WHERE id_pedido = ?', [id], callback);
  },
  create: (newPedido, callback) => {
    connection.query('INSERT INTO pedido SET ?', newPedido, callback);
  },
  update: (id, updatedPedido, callback) => {
    connection.query('UPDATE pedido SET ? WHERE id_pedido = ?', [updatedPedido, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM pedido WHERE id_pedido = ?', [id], callback);
  },
};

module.exports = Pedido;