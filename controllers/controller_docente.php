<?php 
     require('../model/class/conexion.class.php');
     require('../model/class/docentes.class.php');

    if(!empty($_POST) && $_POST['type'] == 'add_docente') {
        $objDocentes = new Docentes($_POST);
        $objDocentes->addUsuario_docente();
        $objDocentes->addDocente();

        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!'
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'editar_docente') {
        $objDocentes = new Docentes($_POST);
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'DATA' => $objDocentes->getDocente()
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
    
?>