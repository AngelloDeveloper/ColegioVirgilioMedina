<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/estado.class.php');
    require('../model/class/municipio.class.php');

    if(!empty($_GET['type']) && $_GET['type'] == 'estados') {
        $objEstados = new Estado();
        $arrData = $objEstados->getAllEstados();
        echo json_encode($arrData);
    }

    if(!empty($_GET['type']) && $_GET['type'] == 'municipio') {
        $objMunicipio = new Municipio();
        $arrData = $objMunicipio->getMunicipio($_GET['id_estado']);
        echo json_encode($arrData);
    }

?>