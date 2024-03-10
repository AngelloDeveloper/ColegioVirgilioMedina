<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/periodo.class.php');
    require('../model/class/cupos.class.php');
    require('../model/class/turno.class.php');


    //periodo
    $objPeriodo = new Periodo();
    $objTurnos = new Turnos();
    

    if(!empty($_POST) && $_POST['type'] == 'addCupos') {
        //$idturno = (int)$objTurnos->getTurnoId($_POST['turn'])['id'];
        $idperiodo = (int)$objPeriodo->getPeriodo()[0]['id'];
        $_POST['periodo'] = $idperiodo;
        //$_POST['turn'] = $idturno;
        $objCupos = new Cupos($_POST);
        $result = $objCupos->getTurnoPeriodo();
        if($result != 0) {
            $objCupos->UpdateCupos();
        } else {
            $objCupos->addCupos();
        }

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }
?>