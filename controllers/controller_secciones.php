<?php 
     require('../model/class/conexion.class.php');
     require('../model/class/grados.class.php');
     require('../model/class/secciones.class.php');

    if(!empty($_POST) && $_POST['type'] == 'add_seccion') {
        $objSections = new Secciones($_POST);
        $result = $objSections->addSeccion();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'edit_seccion') {
        $objSections = new Secciones($_POST);
        $result = $objSections->updateSeccion();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'delete_seccion') {
        $objSections = new Secciones($_POST);
        $objSections->deleteSeccion();

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro eliminado'
        ]);
    }
?>