<?php 
    require_once('../model/class/conexion.class.php');
    require_once('../model/class/parametros.class.php');
    require('../model/class/estado.class.php');
    require('../model/class/religion.class.php');
    require('../model/class/paises.class.php');

    //intancias
    $objParameter = new Parametros();
    $objEstados = new Estado();
    $objReligion = new Religion();
    $objPaises = new Paises();

    $arrEstados = $objEstados->getAllEstados();
    $arrReligiones = $objReligion->getAllReligiones();
    $arrPaises = $objPaises->getAllPaises();

    $param_pre_registro =  $objParameter->getParameter('PRE_REGISTRO');
    if($param_pre_registro['status'] != 'Y') {
        header("Location: notAvailable.php");
    }
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--     Fonts and icons     -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <!--JQUERY-->
	<script src="../assets/js/core/jquery.min.js"></script>
    <!--Import materialize.css-->
	<link type="text/css" rel="stylesheet" href="../assets/materialize/css/materialize.min.css"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="../assets/materialize/css/custom.css"  media="screen,projection"/>
  	<!-- CSS Files -->
  	<link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="css/registro.css?v="<?= rand(100, 500); ?> />
	<title>Colegio Virgilio Medina</title>
    <!--swallAlert-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.all.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.min.css" rel="stylesheet">
    <!--General functions JS-->
    <script src="../assets/js/src/generalFunction.js"></script>
    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>
    <script type="text/javascript" src="../assets/materialize/js/init.js"></script>
</head>
	<body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img width="80" src="../assets/img/escudopng2.png" />
                    </div>
                    <div class="col-md-6">
                        <a id="btn-session" class="btn btn-md mt-4" href="../landing-page/home.php">VOLVER</a>
                    </div>
                </div>
            </div>
        </header>
        <hr />
		<section class="mtlogin">
			<div class="container-fluid">
				<div class="row" style="height: 500px;">
                    <div class="col-1"></div>
					<div class="col-10">
                        <div class="card gradientProgress">
                            <div class="p-4">
                                <h5>Progreso de Registro</h5>
                            </div>
                            <div class="p-2">
                                <span title="Datos del Estudiante" id="lineatap1" class="lineatap">1</span>
                                <span class="lineLabels lt1"><b>Datos del Estudiante</b></span>
                                <span title="Datos Familiares (Madre)" id="lineatap2" class="lineatap">2</span>
                                <span class="lineLabels lt2"><b>Datos Familiares (Madre)</b></span>
                                <span title="Datos Familiares (Padre)" id="lineatap3" class="lineatap">3</span>
                                <span class="lineLabels lt3"><b>Datos Familiares (Padre)</b></span>
                                <span title="Datos del Representante Legal" id="lineatap4" class="lineatap">4</span>
                                <span class="lineLabels lt4"><b>Datos del Representante Legal</b></span>
                                <hr class="lineSecuencia" />
                            </div>
                        </div>
                       
                        <div class="p-4 mt-4">
                            <h4 class="title-tap mb-4"></h4>
                            <div class="alert alert-warning" role="alert">
                                Los campos con el simbolo (<span style="color: #960032;"><b> * </b></span>) son datos obligatorios
                            </div>
                            <hr />
                            <div class="card">
                                <div class="card-body formularios">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
				</div>
			</div>
		</section>
		<footer>
			
		</footer>
		<!--   Core JS Files   -->
		<script src="../assets/js/core/popper.min.js"></script>
		<script src="../assets/js/core/bootstrap.min.js"></script>
		<script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <!--variables-->
        <script type="text/javascript"> 
            var objEstados =  <?= json_encode($arrEstados);?>;
            var objReligiones = <?= json_encode($arrReligiones);?>;
            var objPaises =  <?= json_encode($arrPaises);?>;
        </script>
        <script src="../assets/face-api/face-api.min.js"></script>
        <script src="../assets/js/src/validador-images.js?v="<?= rand(100, 500); ?>></script>
		<script type="text/javascript" src="js/registro.js?v="<?= rand(100, 500); ?>></script>
        <script src="../assets/js/src/validador-inputs.js?v="<?= rand(100, 500); ?>></script>
	</body>
</html>