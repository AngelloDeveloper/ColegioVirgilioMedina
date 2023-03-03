<?php 
    session_start();
    require('../model/class/conexion.class.php');
    require('../model/class/planificacion.class.php');
    require('../model/class/secciones.class.php');
    require('../model/class/materias.class.php');
    require('../model/class/periodo.class.php');

    if(!empty($_POST) && $_POST['type'] == 'materias') {
        $objMaterias = new Materias();
        $arrMaterias = $objMaterias->getAllMaterias();
        echo json_encode($arrMaterias);
    }

    if(!empty($_POST) && $_POST['type'] == 'secciones') {
        $objSecciones = new Secciones();
        $arrSecciones = $objSecciones->getSeccionesGrado($_POST['id']);
        echo json_encode($arrSecciones);
    }

    if(!empty($_POST['type']) && $_POST['type'] == 'add_planificacion') {
        $objPeriodo = new Periodo();
        $_POST['id_docente'] = $_SESSION['user_data']['idDocente'];
        $_POST['id_periodo'] = $objPeriodo->getPeriodo(['id'])['id'];
        $objPlanificacion = new Planificacion($_POST);
        $idPlanificacion = $objPlanificacion->addPlanificacion();
        $objPlanificacion->addActividades($idPlanificacion);
        $result = $objPlanificacion->addPlanificacionSecciones($idPlanificacion);
        if($result) {
            echo json_encode([
                'STATUS' => 'SUCCESS',
                'MESSAGE' => 'Planificación creada exitosamente!',
                'ICON' => 'fa-check',
                'COLOR_ICON' => '#00B236'
            ]);
        } else {
            echo json_encode([
                'STATUS' => 'ERROR',
                'MESSAGE' => 'A ocurrido un error!',
                'ICON' => 'fa-times',
                'COLOR_ICON' => 'red'
            ]);
        }
    }

?>