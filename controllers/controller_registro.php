
<?php 
    require('../model/class/conexion.class.php');
    require('../model/class/pre_registro.class.php');
    require('../reports/reportes.class.php');

    if(!empty($_POST) && $_POST['type'] == 'setPreRegistro') {

        echo "<pre>".json_encode($_POST, JSON_PRETTY_PRINT)."<pre>";
        die();
        
        $objPreRegistro = new Pre_Registro($_POST);
        
        $objPreRegistro->reg_madre();
        $objPreRegistro->reg_padre();
        $objPreRegistro->reg_representante();
        $objPreRegistro->reg_detalle_estudiante();
        $objPreRegistro->reg_usuario_estudiante();
        $idEstudiante = $objPreRegistro->reg_estudiante();
        
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