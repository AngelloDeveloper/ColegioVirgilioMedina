<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/estado.class.php');
    require('../model/class/municipio.class.php');

    header("Content-Type: text/html;charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    if(!empty($_GET['type']) && $_GET['type'] == 'estados') {
        $objEstados = new Estado();
        $arrData = $objEstados->getAllEstados();
        echo json_encode($arrData);
    }

    if(!empty($_GET['type']) && $_GET['type'] == 'municipio') {
        $objMunicipio = new Municipio();
        $arrData = $objMunicipio->getMunicipio($_GET['id_estado']);
        echo json_encode($arrData, JSON_INVALID_UTF8_SUBSTITUTE | JSON_UNESCAPED_UNICODE);
    }

?>