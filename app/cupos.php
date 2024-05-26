<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/secciones.class.php');
    require_once('../model/class/grados.class.php');
    require_once('../model/class/cupos.class.php');
    require_once('../model/class/periodo.class.php');
    require_once('../model/class/turno.class.php');

    $objSecciones = new Secciones();
    $objGrados = new Grados();
    $objCupos = new Cupos();
    $objPeriodo = new Periodo();
    $objTurno = new Turnos();

    $periodo = $objPeriodo->getPeriodo()[0];
    $idperiodo = (int)$objPeriodo->getPeriodo()[0]['id'];
    $arrSecciones = $objSecciones->getAllSecciones();
    $arrGrados = $objGrados->getAllGrados();
    $arrTurnos = $objTurno->getAllTurnos();
    $arrCuposManana = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[0]['turno']);
    $arrCuposTarde  = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[1]['turno']);
?>
<link rel="stylesheet" type="text/css" href="css/cupos.css" />

<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Administración</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Cupos</a></li>
            </ol>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card principal">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <h3 style="display: inline;">Cupos</h3>
                                <span class="badge badge-pill gradient-8 ml-2" style="font-size: 16px; float: right;">Periodo: <?= $periodo['periodo'] ?></span>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="collapsible">
                                            <?php foreach($arrGrados as $index => $grado) { ?>
                                                <li>
                                                <div class="collapsible-header gradient-materias bannerList">
                                                    <div class="row" style="width:100%;">
                                                        <div class="col-12">
                                                            <!--<img width="80" class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/pre-registro/river.png" />-->
                                                            <span style="font-size: 18px; color: #EA3AAA;"><?= $grado['formato'].'Año' ?></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="collapsible-body">
                                                    <div class="row">
                                                        <?php foreach($arrSecciones as $index => $seccion) { ?>
                                                            <div class="col-4">
                                                                <div class="card turno_cupo" style="padding: 10px;">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-2">
                                                                                <span style="font-size: 35px;position: absolute;"><?= $seccion['seccion'] ?></span>
                                                                            </div>
                                                                            <div class="col-8">
                                                                                <!--checks-->
                                                                                <center>
                                                                                    <p class="turns" style="display: none;">
                                                                                        <label>
                                                                                            <input type="checkbox" class="morning filled-in" />
                                                                                            <span style="font-size: 12px;">Mañana</span>
                                                                                        </label>
                                                                                        <label>
                                                                                            <input type="checkbox" class="afternon filled-in" />
                                                                                            <span style="font-size: 12px;">Tarde</span>
                                                                                        </label>
                                                                                    </p>
                                                                                </center>
                                                                            </div>
                                                                            <div class="col-2">
                                                                                <div>
                                                                                    <div class="switch">
                                                                                        <label>
                                                                                            <input type="checkbox" class="swicth_active_section" />
                                                                                            <span class="lever"></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-12">
                                                                                <span class="content_inputs"></span>
                                                                            </div>
                                                                        </div>
                                                                        <!--<span style="font-size: 25px; float: right; color: #fff; border-radius: 10px; padding: 7px ;background-color:#0F8B0B;">15</span>
                                                                        <span class="mr-4" style="font-size: 20px; float: right;">Cupos</span>-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <?php } ?>
                                                    </div>
                                                </div>
                                            </li>
                                            <?php } ?>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--variables-->
<script src="js/cupos.js"></script>
<?php require_once('utils/footer.php'); ?>