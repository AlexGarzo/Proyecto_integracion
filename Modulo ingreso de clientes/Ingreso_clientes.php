<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST['nombre']);
    $nit = htmlspecialchars($_POST['nit']);
    $direccion = htmlspecialchars($_POST['direccion']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $email = htmlspecialchars($_POST['email']);


    $cliente_info = "Nombre o Razón Social: $nombre, NIT o Número de Documento: $nit, Dirección: $direccion, Teléfono: $telefono, Correo Electrónico: $email\n";


    file_put_contents('clientes.txt', $cliente_info, FILE_APPEND);


    echo "<h1>Cliente guardado exitosamente!</h1>";
    echo "<a href='./gestion_clientes.html'>Volver a la gestión de clientes</a>";
} else {

    header("Location: ./ingreso_clientes.html");
    exit();
}
?>
