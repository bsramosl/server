// Reserva.model.js
const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const DetReserva = {
  getList: (callback) => {
    connection.query('SELECT * FROM detalle_reserva', callback);
  },
  
  get: (id, callback) => {
    connection.query('SELECT * FROM detalle_reserva dp JOIN menu m ON dp.id_menu = m.id_menu WHERE dp.id_detalle_reserva = ?', [id], callback);
  }, 

  create: (newPedido, callback) => {
    connection.query('INSERT INTO detalle_reserva SET ?', newPedido, callback);
  },
  update: (id, update, callback) => {
    connection.query('UPDATE detalle_reserva SET ? WHERE id_detalle_reserva = ?', [update, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM detalle_reserva WHERE id_detalle_reserva = ?', [id], callback);
  },
};

module.exports = DetReserva;