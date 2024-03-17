<?php 
     require('../model/class/conexion.class.php');
     require('../model/class/grados.class.php');
     require('../model/class/secciones.class.php');

    if(!empty($_POST) && $_POST['type'] == 'add_seccion') {
        $objDocentes = new Secciones($_POST);
        $result = $objDocentes->addSeccion();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'delete_seccion') {
        $objDocentes = new Secciones($_POST);
        $objDocentes->deleteSeccion();

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro eliminado'
        ]);
    }
?>