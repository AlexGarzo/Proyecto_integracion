const express = require('express');
const cors = require('cors');
const connection = require('./db');
const app = express();
const PORT = 3310;

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { nombre, email, usuario, password } = req.body;
    if (nombre && email && usuario && password) {
        const sql = 'INSERT INTO usuarios (nombre, email, usuario, password) VALUES (?, ?, ?, ?)';
        connection.query(sql, [nombre, email, usuario, password], (err, result) => {
            if (err) {
                res.status(500).json({ success: false, message: 'Error en la base de datos' });
            } else {
                res.json({ success: true, message: 'Registro correcto' });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Faltan datos' });
    }
});

// Ruta para login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
        connection.query(sql, [email, password], (err, results) => {
            if (err) {
                res.status(500).json({ success: false, message: 'Error en la base de datos' });
            } else if (results.length > 0) {
                res.json({ success: true, message: 'Login correcto' });
            } else {
                res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Faltan datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});