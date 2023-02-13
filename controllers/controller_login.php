<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/login.class.php');

    if(!empty($_POST) && $_POST['type'] == 'login') {
        $objLogin = new Login($_POST);
        $validation = $objLogin->validation();
        if(!empty($validation)) {
            if($validation['estatus'] == 'Y') {
                //consulta.
                $session = $objLogin->session($validation['id'], $validation['id_tipo_usuario']);
                if($session == 'SUCCESS') {
                    echo json_encode([
                        'STATUS' => 'LOGIN_SUCCESS',
                        'MESSAGES' => 'Usuario <b>verificado</b>, Iniciando Sesión.'
                    ]);
                } else {
                    echo json_encode([
                        'STATUS' => 'LOGIN_FAIL',
                        'MESSAGES' => 'Fallo la verificacion del usuario.'
                    ]);
                }
            } else {
                echo json_encode([
                    'STATUS' => 'BLOQUED_USER',
                    'MESSAGES' => 'El usuario se encuentra <b>Suspendido</b> temporalmente. 
                        Ponerse en contacto con el departamento de control de estudios. Gracias'
                ]);
            }
        } else {
            echo json_encode([
                'STATUS' => 'NOTFOUND_USER',
                'MESSAGES' => 'La credenciales no coinciden, asegurece de ingresar correctamente los datos y si no esta registrado 
                    ponerse en contacto con el departamento de control de estudios. Gracias'
            ]);
        }
    }
?>