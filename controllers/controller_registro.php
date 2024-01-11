
<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/pre_registro.class.php');
    require('../reports/reportes.class.php');

    if(!empty($_POST) && $_POST['type'] == 'setPreRegistro') {
        
        $objPreRegistro = new Pre_Registro($_POST);

        //subir fotos
        $photo_madre = $objPreRegistro->uploadPhoto($_FILES['madre']);
        $objPreRegistro->reg_madre($photo_madre);
        $photo_padre = $objPreRegistro->uploadPhoto($_FILES['padre']);
        $objPreRegistro->reg_padre($photo_padre);
        //$photo_representante = $objPreRegistro->uploadPhoto($_FILES['representante']);
        $objPreRegistro->reg_representante();
        $objPreRegistro->reg_detalle_estudiante();
        $photo_estudiante = $objPreRegistro->uploadPhoto($_FILES['estudiante']);
        $objPreRegistro->reg_usuario_estudiante();
        $idEstudiante = $objPreRegistro->reg_estudiante($photo_estudiante);
        
        echo json_encode([
            'STATUS' => 'SUCCESS',
            'MESSAGES' => 'Registro Exitoso!',
            'DATA' => $idEstudiante
        ]);
    }

    if(!empty($_POST) && $_POST['type'] == 'downloadTemplatePreRegistro') {
        $gReports = new GeneralReports(['format' => 'Legal']);
        $objPreRegistro = new Pre_Registro($_POST);
        $dataPreRegistro = $objPreRegistro->getDataPreRegistro(); 
        $template = $gReports->prepareTemplate('pre_registro', $dataPreRegistro);     
        $stylesheet = $gReports->prepareStelesheet('pre_registro');
        $gReports->generateReport($template, $stylesheet);
    }
?>