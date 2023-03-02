<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/lapsos.class.php');
    require_once('../model/class/planificacion.class.php');
    require_once('../model/class/grados.class.php');
    require_once('../model/class/secciones.class.php');
    require_once('../model/class/materias.class.php');

    //intancias de objetos
    /*echo "<pre>".json_encode($_SESSION, JSON_PRETTY_PRINT)."</pre>";
    die();*/
    $objPlanificacion = new Planificacion(['id_docente' => $_SESSION['user_data']['idDocente']]);
    $objLapsos = new Lapsos();
    $objSecciones = new Secciones();
    $objGrados = new Grados();
    $objMaterias = new Materias();
    
    //Get data
    $lapsos = $objLapsos->getAllLapsos();
    $Grados = $objGrados->getAllGrados();
    $Secciones = $objSecciones->getAllSecciones();
    $arrMaterias = $objMaterias->getAllMaterias();

   
    
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
                                <div class="buton-icon">
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
                                <!--<div class="row">
                                    
                                        
                                            <div class="card gradient-materias bannerList bannerList_radius" style="width: 100%;">
                                                <div class="card-body bannersList_padding">
                                                    <div class="d-inline-block">
                                                        <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/materias/icons/<?= $materia['icon'] ?>">
                                                        <div style="display: inline-block;">
                                                            <span class="titleMateriaList"><?= $materia['materia'] ?></span>
                                                            <p class="mb-0"><?= $materia['descripcion'] ?></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    
                                </div>-->
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="collapsible">
                                            <?php foreach($arrMaterias as $materia) { 
                                                $arrPlanificaciones = $objPlanificacion->getPlanificacion($materia['id']);
                                            ?>
                                                <li>
                                                    <div class="collapsible-header gradient-materias bannerList">
                                                        <div class="row" style="width:100%;">
                                                            <div class="col-1">
                                                                <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/materias/icons/<?= $materia['icon'] ?>" />
                                                            </div>
                                                            <div class="col-11">
                                                                <span class="titleMateriaList"><?= $materia['materia'] ?></span>
                                                                <p class="mb-0"><?= $materia['descripcion'] ?></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="collapsible-body">
                                                        <?php if(!empty($arrPlanificaciones)) { ?>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <form>
                                                                        <div class="row">
                                                                            <div class="col-3">
                                                                                <div class="form-group input-field">
                                                                                    <input value="" id="x" name="titulo" type="text" required/>
                                                                                    <label for="x">Titulo</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-3">
                                                                                <div class="form-group input-field">
                                                                                    <input value="" id="x" name="titulo" type="text" required/>
                                                                                    <label for="x">Titulo</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-3">
                                                                                <div class="form-group input-field">
                                                                                    <input value="" id="x" name="titulo" type="text" required/>
                                                                                    <label for="x">Titulo</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-3">
                                                                                <div class="buton-icon">
                                                                                    <button 
                                                                                        id="btNewPlanificacion" 
                                                                                        type="button" 
                                                                                        class="btn btn-sm mb-1 ml-1" 
                                                                                        style="color: #fff; background-color: #5c4ab8fc; float:right;"
                                                                                    >
                                                                                        Buscar
                                                                                        <span class="btn-icon-right">
                                                                                            <i class="fa fa-search" aria-hidden="true"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                    <button 
                                                                                        id="btNewPlanificacion" 
                                                                                        type="button" 
                                                                                        class="btn btn-sm mb-1" 
                                                                                        style="color: #fff; background-color: silver;float:right;"
                                                                                    >
                                                                                        Limpiar
                                                                                        <span class="btn-icon-right">
                                                                                            <i class="fa fa-eraser" aria-hidden="true"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <hr class="hr" />
                                                                        <div class="row">
                                                                            <?php foreach($arrPlanificaciones as $planificacion) { ?>
                                                                                <div class="col-3">
                                                                                    <div class="card gradient-8">
                                                                                        <div class="card-body">
                                                                                            <div class="d-inline-block" style="width: 100%">
                                                                                                <h5 class="text-white"><?= strtoupper($planificacion['titulo']); ?></h5>
                                                                                                <p class="text-white mb-0"><?= strtolower($planificacion['descripcion']); ?></p>
                                                                                            </div>
                                                                                            <span class="float-right display-5">
                                                                                                <center>
                                                                                                    <button class="btn btn-sm btn-primary btnEdit" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Editar">
                                                                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                                                    </button>
                                                                                                    <button class="btn btn-sm btn-danger btnDelete" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Eliminar">
                                                                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                                                                    </button>
                                                                                                </center>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>  
                                                                            <?php } ?>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        <?php } else { ?>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <p class="text-center" style="margin-bottom: 0px; font-size: 14px;"><i class="fa fa-question-circle" aria-hidden="true"></i></p>
                                                                    <p class="text-center"><b>no hay planificaciones agregadas en esta materia</b></p>
                                                                </div>
                                                            </div>
                                                        <?php } ?>
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