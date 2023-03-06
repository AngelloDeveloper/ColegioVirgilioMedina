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
        $validation = $objPlanificacion->validarPlanificacion();
        if((int)$validation['total_porcentaje'] < 100) {
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
        } else {
            echo json_encode([
                'STATUS' => 'VALIDATION',
                'MESSAGE' => 'La seccion y año indicado ya poseen un 100% en planificaciones,  por favor verifique e intente de nuevo.',
                'ICON' => 'fa-exclamation-circle',
                'COLOR_ICON' => 'orange'
            ]);
        }
    }

    if(!empty($_POST['type']) && $_POST['type'] == 'search_planificacion') {
        $objPlanificacion = new Planificacion($_POST);
        $arrPlanificaciones = $objPlanificacion->search_planificacion();
        if($arrPlanificaciones) {
            echo json_encode([
                'STATUS' => 'SUCCESS',
                'MESSAGE' => 'success',
                'DATA' => $arrPlanificaciones
            ]);
        } else {
            echo json_encode([
                'STATUS' => 'EMPTY',
                'MESSAGE' => 'empty'
            ]);
        }
    }

?>