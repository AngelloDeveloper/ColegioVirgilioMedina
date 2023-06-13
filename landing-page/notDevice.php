<?php 
    require_once('../model/class/conexion.class.php');
    require_once('../model/class/parametros.class.php');
    require_once('../model/class/general_functions.class.php');
    
    //intancias
    $objGeneralFunctions = new General_functions();
    $OS = $objGeneralFunctions->what_os();
    $objParameter = new Parametros();
    $arrParameters =  $objParameter->getAllParameter();

    if($arrParameters['MOBILE_RESTRICTION']['status'] != 'N') {
        if($OS != true) {
            header("Location: home.php");
        }
    } else {
        header("Location: home.php");
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
    <script src="../assets/js/core/generalFunction.js"></script>
    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>
    <script type="text/javascript" src="../assets/materialize/js/init.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <center>
                        <img width="80" src="../assets/img/escudopng2.png" />
                    </center>
                </div>
                <div class="col-6">
                    <center>
                        <a id="btn-session" class="btn btn-md mt-4" href="../landing-page/home.php">VOLVER</a>
                    </center>
                </div>
            </div>
        </div>
    </header>
    <section class="mtlogin">
        <div class="container-fluid">
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <center><img src="../assets/img/escudopng2.png" style="width:100px;" /></center>
                            <br />
                            <p class="text-center">
                                Actualmente la pagina web, solo esta disponible en dispositivos como: <b>Laptops y computadores de escritorio</b><br />
                                Estamos trabajando en la adaptación en tablets y smartphone. gracias por su paciencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>