const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Marcas Blancas - Gestión de Productos</h1>
        <p>Bienvenido al sistema de gestión de marcas blancas</p>
        <ul>
            <li>Marcas Tradicionales</li>
            <li>Marcas de Segunda Generación</li>
            <li>Marcas Privadas</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('Servidor de Marcas Blancas activo en puerto 3000');
});

module.exports = app;