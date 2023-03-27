<?php 
     require('../model/class/conexion.class.php');
     require('../model/class/docentes.class.php');
     require('../model/class/grados.class.php');

    if(!empty($_POST) && $_POST['type'] == 'add_docente') {
        $objDocentes = new Docentes($_POST);
        $objDocentes->addUsuario_docente();
        $objDocentes->addDocente();

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'configurar_docente') {
        $objDocentes = new Docentes($_POST);
        $result = [
            'getDocente' => $objDocentes->getDocente(),
            'getDocenteSecciones' => $objDocentes->getDocenteSecciones()
        ];

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'DATA' => $result
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'update_docente') {
        $objDocentes = new Docentes($_POST);
        $objDocentes->updateDocente();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Datos Actualizados!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'eliminar_docente') {
        $objDocentes = new Docentes($_POST);
        $objDocentes->deleteDocente();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Datos Eliminados!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'asigacion_seccion') {
        $objDocentes = new Docentes($_POST);
        $objDocentes->asignacion_docente_secciones();
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'La configuración fue exitosa!'
        ]);
    }
    
?>