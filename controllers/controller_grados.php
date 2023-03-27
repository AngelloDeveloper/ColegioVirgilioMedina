<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/grados.class.php');

    if(!empty($_GET) && $_GET['type'] == 'getAnio') {
        $objGrados = new Grados();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'DATA' => $objGrados->getAllGrados()
        ]);
    }
?>