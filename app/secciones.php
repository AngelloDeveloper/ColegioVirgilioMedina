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
                                        $tempGrados = '';
                                        foreach($arrSeccioneGrados as $grados) {
                                            if($grados['id_seccion'] == $seccion['id']) {
                                                foreach($arrGrados as $t_grados) {
                                                    if($t_grados['id'] == $grados['id_grado']) {
                                                        $tempGrados .= '<span style="color: #C9358A; font-size: 50px; font-weight: 800; margin-right: 5px;">'.$t_grados['formato'].'</span>';
                                                    }
                                                }
                                            }
                                        }
                                    ?>                                            
                                        <div class="col-6">
                                            <div class="card" style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(12,116,149,1) 95%);">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <?php 
                                                               $arrTurns = json_decode($seccion['turno'], true);
                                                               $tempplate = '';
                                                               foreach($arrTurns as $turno) {
                                                                    if($turno == 'M') {
                                                                       $tempplate .=  '<img width="40" title="Mañana" src="../assets/img/pre-registro/river.png" />';
                                                                    }
                                                                    if($turno == 'T') {
                                                                        $tempplate .=  '<img width="40" title="Tarde" src="../assets/img/pre-registro/nature.png" />';
                                                                    }
                                                               } 

                                                               echo $tempplate;
                                                            ?> 
                                                        </div>
                                                        <div class="col-6">
                                                            <button style="float: right;" data-idseccion="<?= $seccion['id'] ?>" class="btn btn-sm btn-danger delSection" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Eliminar">
                                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                                            </button>
                                                            <button style="float: right; margin-right:3px;" class="btn btn-sm btn-primary btnEdit" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Editar">
                                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <p class="gradoItem"><?= $seccion['seccion'] ?></p>
                                                        </div>
                                                        <div class="col-8">
                                                           <span style="float: right;"><?= $tempGrados ?></span>
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