<?php 
    require_once('model/class/conexion.class.php');
    require_once('model/class/parametros.class.php');

    //intancias
    $objParameter = new Parametros();
    $param_pre_registro =  $objParameter->getParameter('PRE_REGISTRO');

    //variables globales
    define('PARAMETERS', json_encode($param_pre_registro));
    echo json_encode($GLOBALS);
?>