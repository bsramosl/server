const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const Bar = {
  getList: (callback) => {
    connection.query('SELECT * FROM bar ba JOIN ubicacion ub ON ba.id_ubicacion = ub.id_ubicacion', callback);
  },

  get: (id, callback) => {
    connection.query('SELECT * FROM bar WHERE id_bar = ?', [id], callback);
  },
  create: (newBar, callback) => {
    let idUbicacion;
    const ubicacion = [
        [newBar.nombre_bar,newBar.latitud,newBar.longitud]
    ];
    connection.query('INSERT INTO ubicacion (nombre_ubicacion, latitud, longitud) VALUES ?', [ubicacion], (error, result) => {
      if (error) {
        callback(error, null);
        return;
      } else {
        idUbicacion = result.insertId;  
        const bar =[[          
          newBar.nombre_bar,
          idUbicacion,
          newBar.desayuno_horario,
          newBar.almuerzo_horario,
          newBar.merienda_horario,
        ]
        ];  
        connection.query('INSERT INTO bar (nombre_bar, id_ubicacion, desayuno_horario, almuerzo_horario, merienda_horario) VALUES ?', [bar], (error, result) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, result);
          }
        });
      }
   }); 
  },

  update: (id, updatedBar, callback) => {
    connection.query('UPDATE bar SET ? WHERE id_bar = ?', [updatedBar, id], callback);
  },

  delete: (id, callback) => {
    connection.query('DELETE FROM bar WHERE id_bar = ?', [id], callback);
  },
};

module.exports = Bar;