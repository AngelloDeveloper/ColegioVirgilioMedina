<?php 
    require('../model/class/conexion.class.php');
    require_once('../model/class/estudiantes.class.php');

    if(!empty($_POST) && $_POST['type'] == 'unique') {
        $response = ['STATUS' => 'SUCCESS', 'MESSAGES' => 'Sin precedentes'];
        $objEstudiantes = new Estudiantes();
        $data = $_POST['data'];
        foreach($data as $index => $value) {
            $result = $objEstudiantes->verificationDataExist($value);
            if($result != false) {
                $dato = key($result);
                $table = key($result[$dato]);
                $value = $result[$dato][$table];
                $metaData = ['dato' => $dato, 'table' => $table, 'value' => $value];
                $response = ['STATUS' => 'FAIL', 'MESSAGES' => 'el dato ya existe', 'METADATA' => $metaData];
                break;
            }
        }

        echo json_encode($response);
    }

?>