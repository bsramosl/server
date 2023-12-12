// Reserva.model.js
const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const DetPedido = {
  getList: (callback) => {
    connection.query('SELECT * FROM detalle_pedido', callback);
  },
  
  get: (id, callback) => {
    connection.query('SELECT * FROM detalle_pedido dp JOIN menu m ON dp.id_menu = m.id_menu WHERE dp.id_detalle_pedido = ?', [id], callback);
  }, 

  create: (newPedido, callback) => {
    connection.query('INSERT INTO detalle_pedido SET ?', newPedido, callback);
  },
  update: (id, update, callback) => {
    connection.query('UPDATE detalle_pedido SET ? WHERE id_detalle_pedido = ?', [update, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM detalle_pedido WHERE id_detalle_pedido = ?', [id], callback);
  },
};

module.exports = DetPedido;