<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/lapsos.class.php');
    require_once('../model/class/planificacion.class.php');
    require_once('../model/class/grados.class.php');
    require_once('../model/class/secciones.class.php');

    //intancias de objetos
    $objPlanificacion = new Planificacion();
    $objLapsos = new Lapsos();
    $objSecciones = new Secciones();
    $objGrados = new Grados();

    //Get data
    $lapsos = $objLapsos->getAllLapsos();
    $Grados = $objGrados->getAllGrados();
    $Secciones = $objSecciones->getAllSecciones();
    
    $arrGradienteCard = [
        '1' => 'gradient-7',
        '2' => 'gradient-9',
        '3' => 'gradient-5'
    ];
?>
<link rel="stylesheet" type="text/css" href="css/planificacion.css" />
<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Planificacion</a></li>
            </ol>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card principal">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-10">
                                <h3>Planificación</h3>
                            </div>
                            <div class="col-2">
                                <div class="button-icon">
                                    <button id="btNewPlanificacion" type="button" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236;">
                                        Nueva Planificación
                                        <span class="btn-icon-right">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <?php foreach($lapsos as $lapso) { ?>
                                                <div class="col-4">
                                                    <div class="card <?= $arrGradienteCard[$lapso['id']] ?>">
                                                        <div class="card-body">
                                                            <h2 class="card-title text-white"></h2>
                                                            <div class="d-inline-block">
                                                                <h2 class="text-white"><?= $lapso['formato'] ?> Lapso</h2>
                                                                <p class="text-white mb-0">Periodo 2022-2023</p>
                                                            </div>
                                                            <span class="float-right display-5 opacity-5">
                                                                <span>
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span><i class="fa fa-tasks" aria-hidden="true"></i></span>
                                                                    </label>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card secondary"></div>
                <div class="card terciary"></div>
            </div>
        </div>
    </div>
</div>
<!--Variables php a js-->
<script>
    const Lapsos = <?= json_encode($lapsos); ?>;
    const Grados = <?= json_encode($Grados); ?>;
    const Secciones = <?= json_encode($Secciones); ?>;
</script>
<script src="js/planificacion.js"></script>
<?php require_once('utils/footer.php'); ?>