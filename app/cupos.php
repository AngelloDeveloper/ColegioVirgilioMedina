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
    $arrCuposManana = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[0]['id']);
    $arrCuposTarde  = $objCupos->getCuposForPeriodo($idperiodo, $arrTurnos[1]['id']);
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
                                            <li>
                                                <div class="collapsible-header gradient-materias bannerList">
                                                    <div class="row" style="width:100%;">
                                                        <div class="col-12">
                                                            <img width="80" class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/pre-registro/river.png" />
                                                            <span style="font-size: 18px;">Mañana</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="collapsible-body">
                                                    
                                                        <form id="form-manana">
                                                            <div class="row">
                                                                <?php foreach($arrGrados as $index => $grado) { 
                                                                   $turno = !empty($arrCuposManana) ? $arrCuposManana[$index]['cupo'] : ''; 
                                                                ?>                                            
                                                                    <div class="col-6">
                                                                        <div class="card">
                                                                            <div class="card-body">
                                                                                <div class="row">
                                                                                    <div class="col-6">
                                                                                        <p class="gradoItem"><?= $grado['formato'].' año' ?></p>
                                                                                    </div>
                                                                                    <div class="col-6">
                                                                                        <label>Ingrese la cantidad de cupos</label>
                                                                                        <input name="<?= $grado['id'] ?>" value="<?= $turno ?>" placeholder="ejem: 20" type="number"  />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <?php } ?>
                                                            </div>
                                                            <hr />
                                                            <div class="row">
                                                                <div class="col-9"></div>
                                                                <div class="col-3">
                                                                    <center>    
                                                                        <button type="submit" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236; width:60%;">
                                                                            Guardar
                                                                            <span class="btn-icon-right">
                                                                                <i class="fa fa-check" aria-hidden="true"></i>
                                                                            </span>
                                                                        </button>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                        </form>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="collapsible-header gradient-materias bannerList">
                                                    <div class="row" style="width:100%;">
                                                        <div class="col-12">
                                                            <img width="80" class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/pre-registro/nature.png" />
                                                            <span style="font-size: 18px;">Tarde</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="collapsible-body">
                                                    <form id="form-tarde">
                                                        <div class="row">
                                                            <?php foreach($arrGrados as $index => $grado) { 
                                                                $turno = !empty($arrCuposTarde) ? $arrCuposTarde[$index]['cupo'] : '';    
                                                            ?>                                            
                                                                <div class="col-6">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <div class="row">
                                                                                <div class="col-6">
                                                                                    <p class="gradoItem"><?= $grado['formato'].' año' ?></p>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <label>Ingrese la cantidad de cupos</label>
                                                                                    <input name="<?= $grado['id'] ?>" value="<?= $turno ?>" placeholder="ejem: 20" type="number"  />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <?php } ?>
                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-9"></div>
                                                            <div class="col-3">
                                                                <center>    
                                                                    <button type="submit" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236; width:60%;">
                                                                        Guardar
                                                                        <span class="btn-icon-right">
                                                                            <i class="fa fa-check" aria-hidden="true"></i>
                                                                        </span>
                                                                    </button>
                                                                </center>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
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