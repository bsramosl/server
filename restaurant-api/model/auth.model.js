const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const secretKey = 'tu_clave_secreta'; // Cambia esto en un entorno de producción.

function loginUser(username, password, callback) {
  const query = 'SELECT * FROM usuario us JOIN tipo_usuario tpu ON us.id_tipo_usuario = tpu.id_tipo_usuario  WHERE us.usuario = ? AND us.contrasena = ?';

  connection.query(query, [username, password], (err, result) => {
    if (err) {
      return callback(err, null);
    }

    if (result.length > 0) {
      const user = result[0];

      // No es necesario devolver la contraseña en la respuesta
      delete user.contrasena;

      // Generar un token JWT
      const token = jwt.sign({ userId: user.id_usuario, username: user.usuario, nombre_tipo_usuario: user.nombre_tipo_usuario ,id_tipo_usuario: user.id_tipo_usuario }, secretKey, { expiresIn: '1h' });

      // Devolver el token y la información del usuario
      const response = { success: true, token, user };
      callback(null, response);
    } else {
      // Usuario no autenticado
      const error = { success: false, message: 'Credenciales incorrectas' };
      callback(error, null);
    }
  });
}

module.exports = {
  loginUser,
};