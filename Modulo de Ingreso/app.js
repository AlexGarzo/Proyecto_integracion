const connection = require('./db');


const nombre = 'root';
const email = 'root@localhost';
const contraseña = '';

connection.query(
    'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)',
    [nombre, email, contraseña],
    (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return;
        }
        console.log('Usuario insertado con éxito:', results);
    }
);