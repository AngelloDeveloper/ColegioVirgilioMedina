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
    $objTurno = new Turnos();

    $arrSecciones = $objSecciones->getAllSecciones();
    $arrSeccioneGrados = $objSecciones->getGradosForSeccions();
    $arrGrados = $objGrados->getAllGrados();
    $arrTurnos = $objTurno->getAllTurnos();
    $tempGrados = '';
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
                                    <?php foreach($arrSecciones as $index => $seccion) { 
                                        $tempGrados_M = '';
                                        $tempGrados_T = '';
                                        foreach($arrSeccioneGrados as $grados) {
                                            if($grados['id_seccion'] == $seccion['id']) {
                                                foreach($arrGrados as $t_grados) {
                                                    if($t_grados['id'] == $grados['id_grado']) {
                                                        if($grados['turno'] == 'M') {
                                                            $tempGrados_M .= $t_grados['formato'];
                                                        }

                                                        if($grados['turno'] == 'T') {
                                                            $tempGrados_T .= $t_grados['formato'];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ?>                                            
                                        <div class="col-6">
                                            <div class="card" style="background: linear-gradient(230deg, rgba(252,252,252,1) 8%, rgba(237,201,255,1) 93%); height: 220px;">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <?php 
                                                               $arrTurns = json_decode($seccion['turno'], true);
                                                               $tempplate_M = '';
                                                               $tempplate_T = '';
                                                               foreach($arrTurns as $turno) {
                                                                    if($turno == 'M') {
                                                                       $tempplate_M .=  '<img width="40" title="Mañana" src="../assets/img/pre-registro/river.png" />';
                                                                    }
                                                                    if($turno == 'T') {
                                                                        $tempplate_T .=  '<img width="40" title="Tarde" src="../assets/img/pre-registro/nature.png" />';
                                                                    }
                                                               } 
                                                            ?> 
                                                        </div>
                                                        <div class="col-6">
                                                            <button style="float: right;" data-idseccion="<?= $seccion['id'] ?>" class="btn btn-sm btn-danger delSection" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Eliminar">
                                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                                            </button>
                                                            <button style="float: right; margin-right:3px;" data-idseccion="<?= $seccion['id'] ?>" class="btn btn-sm btn-primary editSection" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Editar">
                                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <p class="gradoItem"><?= $seccion['seccion'] ?></p>
                                                        </div>
                                                        <div class="col-8">
                                                            <!--grados M-->
                                                            <?php if($tempGrados_M != '') { ?>
                                                                <div class="row mb-2 mt-4" style="background: linear-gradient(141deg, rgba(2, 0, 36, 1) 0%, rgba(25, 71, 138, 1) 16%, rgba(51, 153, 255, 1) 56%, rgba(50, 154, 255, 0.5019257703081232) 100%); padding: 3px; border-radius: 30px">
                                                                    
                                                                    <div class="col-6">
                                                                        <p style="margin-top: 7px; color: #fff; font-size: 15px">Mañana</p>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <span style="float: right; margin-top: 10px;">
                                                                            <span style="color: #C9358A; font-size: 20px; font-weight: 800; margin-right: 5px;">
                                                                                <?= $tempGrados_M ?>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            <?php } ?>
                                                            
                                                            <!--grados T-->
                                                            <?php if($tempGrados_T != '') { ?>
                                                                <div class="row" style="background: linear-gradient(141deg, rgba(233, 24, 46, 1) 0%, rgba(224, 70, 86, 1) 18%, rgba(255, 174, 51, 1) 46%, rgba(255, 196, 51, 0.9641106442577031) 66%, rgba(255, 225, 51, 0.8352591036414566) 87%); padding: 3px; border-radius: 30px">
                                                                    
                                                                    <div class="col-6">
                                                                        <p style="margin-top: 7px; color: #fff; font-size: 15px;">Tarde</p>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <span style="float: right; margin-top: 10px;">
                                                                            <span style="color: #C9358A; font-size: 20px; font-weight: 800; margin-right: 5px;">
                                                                                <?= $tempGrados_T ?>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            <?php } ?>
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