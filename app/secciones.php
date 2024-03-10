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
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Secciones</a></li>
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
                                <h3 style="display: inline;">Secciones</h3>
                                <button id="btNewSeccion" type="button" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236; float: right;">
                                    Agregar Sección
                                    <span class="btn-icon-right">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <?php foreach($arrSecciones as $index => $seccion) { ?>                                            
                                        <div class="col-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <p class="gradoItem"><?= $seccion['seccion'] ?></p>
                                                        </div>
                                                        <div class="col-4">
                                                            <label for="seccion_multiple">Seccion</label>
                                                            <select multiple id="select_grados" class="seccion" name="seccion">
                                                                <option value="" disabled selected>Seleccionar...</option>
                                                                <?php foreach($arrGrados as $grado) { ?>
                                                                    <option value="<?= $grado['id'] ?>"><?= $grado['formato'] ?></option>
                                                                <?php } ?>
                                                            </select>
                                                        </div>
                                                        <div class="col-4">
                                                            <label>Turno</label>
                                                            <select id="select_turno">
                                                                <?php foreach($arrTurnos as $turno) { ?>
                                                                    <option value="<?= $turno['turno'] ?>"><?= $turno['description'] ?></option>
                                                                <?php } ?>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card secondary"></div>
            </div>
        </div>
    </div>
</div>
<!--variables-->
<script>
    var objGrados = <?= json_encode($arrGrados) ?>;
    var objTurnos = <?= json_encode($arrTurnos) ?>;
</script>
<script src="js/secciones.js"></script>
<?php require_once('utils/footer.php'); ?>