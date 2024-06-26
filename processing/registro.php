<?php 
    require_once('../model/class/conexion.class.php');
    require_once('../model/class/parametros.class.php');
    require('../model/class/estado.class.php');
    require('../model/class/religion.class.php');
    require('../model/class/paises.class.php');
    require('../model/class/cupos.class.php');
    require('../model/class/periodo.class.php');
    require('../model/class/grados.class.php');
    require('../model/class/secciones.class.php');
    require_once('../model/class/turno.class.php');

    //intancias
    $objParameter = new Parametros();
    $objEstados = new Estado();
    $objReligion = new Religion();
    $objPaises = new Paises(["zona" => 'LATAM']);
    $objPeriodo = new Periodo();
    $objCupos = new Cupos();
    $objGrados = new Grados();
    $objTurno = new Turnos();
    $objSecciones = new Secciones();

    $arrTurnos = $objTurno->getAllTurnos();
    $arrGrados = $objGrados->getAllGrados();
    $arrSecciones = $objSecciones->getAllSecciones();
    $arrPeriodo = $objPeriodo->getPeriodo();
    $idperiodo = (int)$arrPeriodo[0]['id'];
    $arrCuposManana = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[0]['turno']);
    $arrCuposTarde  = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[1]['turno']);
    $arrEstados = $objEstados->getAllEstados();
   
    $arrReligiones = $objReligion->getAllReligiones();
    $arrLatam = $objPaises->getPisesZone();

    $param_pre_registro =  $objParameter->getParameter('PRE_REGISTRO');
    $param_max_cupos = $objParameter->getParameter('MAX_CUPOS_GENERAL_SECTIONS');

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
    <!--Select2-->
    <!--<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>-->
</head>
    
	<body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img width="80" src="../assets/img/escudopng2.png" />
                    </div>
                    <div id="btn-navigation" class="col-md-6">
                        <a id="btn-session" style="background-color: #DCBB05 !important; color: #000 !important;" class="btn btn-md mt-4 viewTutorial" href="#">VER TUTORIAL</a>
                        <a id="btn-session" class="btn btn-md mt-4 mr-2" href="../landing-page/home.php">PAGINA PRINCIPAL</a>
                        <style>
                            .viewTutorial {
                                transform-origin: 0 0;
                                animation: viewTutorial 3s ease-in-out infinite alternate;
                            }

                            @keyframes viewTutorial {
                                0% {
                                    transform: scale(1.0);
                                }
                                50% {
                                    transform: scale(1.1);
                                }
                            }
                        </style>
                    </div>
                </div>
            </div>
        </header>
        <hr />
        <section id="turn_cups">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
					<div class="col-8">
                        <div class="row">
                            <div class="col-6">
                                <div class="card cardTurn cardTurnMorning">
                                    <div class="card-body">
                                        <span>Mañana</span>
                                        <img src="../assets/img/pre-registro/river.png" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card cardTurn cardTurnAfternon">
                                    <div class="card-body">
                                        <span>Tarde</span>
                                        
                                        <img src="../assets/img/pre-registro/nature.png" />
                                    </div>
                                </div>
                            </div> 
                            
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <?php foreach($arrGrados as $index => $grado) { 
                                    $cupo = !empty($arrCuposManana) ? $arrCuposManana[$index]['cupo'] : 0;  
                                    
                                ?>
                                    <div class="card turno_cupo" data-turno="manana" data-grado="<?= $arrGrados[$index]['id'] ?>" style="padding: 10px;">
                                        <div class="card-body">
                                            <span style="font-size: 20px;"><?= $arrGrados[$index]['formato'].' Año' ?></span>
                                            <span style="font-size: 25px; float: right; color: #fff; border-radius: 10px; padding: 7px ;background-color:#0F8B0B;"><?= $cupo ?></span>
                                            <span class="mr-4" style="font-size: 20px; float: right;">Cupos disponibles</span>
                                        </div>
                                    </div> 
                                <?php } ?> 
                            </div> 
                            <div class="col-6">
                                <?php foreach($arrGrados as $index => $grado) { 
                                    $cupo = !empty($arrCuposTarde) ? $arrCuposTarde[$index]['cupo'] : 0;
                                    
                                ?>
                                     <div class="card turno_cupo" data-turno="tarde" data-grado="<?= $arrGrados[$index]['id'] ?>" style="padding: 10px;">
                                        <div class="card-body">
                                            <span style="font-size: 20px;"><?= $arrGrados[$index]['formato'].' Año' ?></span>
                                            <span style="font-size: 25px; float: right; color: #fff; border-radius: 10px; padding: 7px ;background-color:#0F8B0B;"><?= $cupo ?></span>
                                            <span class="mr-4" style="font-size: 20px; float: right;">Cupos disponibles</span>
                                        </div>
                                    </div> 
                                <?php } ?> 
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </section>

		<section id="pre_registro_forms" class="mtlogin" style="display:none;">
			<div class="container-fluid">
				<div class="row" style="height: 500px;">
                    <div class="col-1"></div>
					<div class="col-10">

                        <div class="row">
                            <div class="col-5"></div>
                            <div class="col-4">
                                <div id="imgTurn" style="display: inline-block;"></div>
                                <style>
                                    .animateImg {
                                        animation: saturate-desaturate 3s infinite;
                                    }

                                    @keyframes saturate-desaturate {
                                        0%, 100% {
                                            filter: saturate(100%);
                                            
                                        }
                                        50% {
                                            filter: saturate(200%);
                                        }
                                    }
                                </style>
                            </div>
                            <div class="col-3">
                                <div style="position: absolute; width: 80%; margin-top:50px;">
                                    <center>
                                        <span id="anio_text" style="color: #085c05; font-size: 25px;font-weight: 600; background-color:rgba(20, 180, 14, .4); border-radius: 20px; padding: 5px 15px;"></span>
                                    </center>
                                </div>
                            </div>
                        </div>
                        
                        
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
                            <div class="row">
                                <div class="col-12">
                                    <h4 class="title-tap mb-2"></h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <span class="btn_return_tap"></span>
                                </div>
                                <div class="col-6">
                                    <span class="btn_next_tap"></span>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-4" role="alert">
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
            var objLatam = <?= json_encode($arrLatam); ?>;
            var objSecciones = <?= json_encode($arrSecciones)?>;
        </script>
        <script src="../assets/face-api/face-api.min.js"></script>
        <script src="../assets/js/src/validador-images.js?v="<?= rand(100, 500); ?>></script>
		<script type="text/javascript" src="js/registro.js?v="<?= rand(100, 500); ?>></script>
        <script src="../assets/js/src/validador-inputs.js?v="<?= rand(100, 500); ?>></script>
	</body>
</html>