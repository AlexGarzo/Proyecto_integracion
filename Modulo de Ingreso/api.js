const express = require('express');
const app = express();
app.use(express.json());

let clientes = []; // Almacenamiento temporal de clientes

// Crear Cliente
app.post('/api/clientes', (req, res) => {
    const { nombre, apellido, email, telefono, direccion } = req.body;
    const nuevoCliente = {
        id: clientes.length + 1,
        nombre,
        apellido,
        email,
        telefono,
        direccion
    };
    clientes.push(nuevoCliente);
    res.status(201).json(nuevoCliente);
});

// Obtener Todos los Clientes
app.get('/api/clientes', (req, res) => {
    res.status(200).json(clientes);
});

// Obtener Cliente por ID
app.get('/api/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('Cliente no encontrado');
    res.status(200).json(cliente);
});

// Actualizar Cliente
app.put('/api/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('Cliente no encontrado');

    const { nombre, apellido, email, telefono, direccion } = req.body;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.email = email;
    cliente.telefono = telefono;
    cliente.direccion = direccion;

    res.status(200).json(cliente);
});

// Eliminar Cliente
app.delete('/api/clientes/:id', (req, res) => {
    const clienteIndex = clientes.findIndex(c => c.id === parseInt(req.params.id));
    if (clienteIndex === -1) return res.status(404).send('Cliente no encontrado');

    clientes.splice(clienteIndex, 1);
    res.status(204).send(); // No content
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});