<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/pre_registro.class.php');

    if(!empty($_POST) && $_POST['type'] == 'setPreRegistro') {
        $objPreRegistro = new Pre_Registro($_POST);
        $objPreRegistro->reg_madre();
        $objPreRegistro->reg_padre();
        $objPreRegistro->reg_representante();
        $objPreRegistro->reg_detalle_estudiante();
        $objPreRegistro->reg_usuario_estudiante();
        $objPreRegistro->reg_estudiante();
        
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }
?>