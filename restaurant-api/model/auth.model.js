const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const secretKey = 'tu_clave_secreta'; // Cambia esto en un entorno de producción.

function loginUser(username, password, callback) {
    const query = 'SELECT * FROM usuario WHERE usuario = ? AND contrasena = ?';
  
    connection.query(query, [username, password], (err, result) => {
      if (err) {
        return callback(err, null);
      }
  
      if (result.length > 0) {
        const user = result[0];
  
        // Generar un token JWT
        const token = jwt.sign({ userId: user.id_usuario, username: user.usuario }, secretKey, { expiresIn: '1h' });
  
        // Devolver el token y la información del usuario
        callback(null, { success: true, token, user: { userId: user.id_usuario, username: user.usuario } });
      } else {
        // Usuario no autenticado
        callback({ success: false, message: 'Credenciales incorrectas' }, null);
      }
    }); 
}

module.exports = {
  loginUser,
};