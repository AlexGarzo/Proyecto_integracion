const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // tu contraseña
    database: 'factuplus' // tu base de datos
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

app.post('/register', (req, res) => {
    const { nombre, email, usuario, password } = req.body;
    if (!nombre || !email || !usuario || !password) {
        return res.json({ success: false, message: 'Campos incompletos' });
    }
    connection.query(
        'INSERT INTO usuarios (nombre, email, usuario, contraseña) VALUES (?, ?, ?, ?)',
        [nombre, email, usuario, password],
        (err, results) => {
            if (err) {
                return res.json({ success: false, message: 'Error en la base de datos' });
            }
            res.json({ success: true });
        }
    );
});

app.listen(3310, () => {
    console.log('Servidor corriendo en http://localhost:3310');
});