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
    echo 'test';
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

    //function
    function limitar_cadena($cadena, $limite, $sufijo){
        if(strlen($cadena) > $limite){
            return substr($cadena, 0, $limite) . $sufijo;
        }

        return $cadena;
    }
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
                            <div class="col-12">
                                <h3 style="display: inline;">Planificación</h3>
                                <div class="buton-icon" style="float:right;">
                                    <button id="btNewPlanificacion" type="button" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236; width:100%;">
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
                                                                    <form class="planificacion_search">
                                                                        <div class="row">
                                                                            <input type="hidden" name="id_docente" value="<?= $_SESSION['user_data']['idDocente'] ?>" />
                                                                            <input type="hidden" name="materia" value="<?= $materia['id'] ?>" />
                                                                            <div class="col-2">
                                                                                <div class="form-group input-field">
                                                                                    <input value="" class="planificacion" name="planificacion" type="text" />
                                                                                    <label for="planificacion">Planificacion</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-2">
                                                                                <div class="form-group input-field">
                                                                                    <select class="lapso" name="lapso">
                                                                                        <option value="" selected>Seleccionar...</option>
                                                                                        <?php foreach($lapsos as $lapso) { ?>
                                                                                            <option value="<?= $lapso['id'] ?>"><?= $lapso['formato'].' lapso' ?></option>
                                                                                        <?php } ?>
                                                                                    </select>
                                                                                    <label for="lapso">Lapso</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-2">
                                                                                <div class="form-group input-field">
                                                                                    <select class="anio" name="anio">
                                                                                        <option value="" selected>Seleccionar...</option>
                                                                                        <?php foreach($Grados as $grado) { ?>
                                                                                            <option value="<?= $grado['id'] ?>"><?= $grado['formato'].' año' ?></option>
                                                                                        <?php } ?>
                                                                                    </select>
                                                                                    <label for="anio">Año</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-2">
                                                                                <div class="form-group input-field">
                                                                                    <select class="seccion" name="seccion" >
                                                                                        <option value="" disabled selected>Seleccionar...</option>
                                                                                        <?php foreach($Secciones as $seccion) { ?>
                                                                                            <option value="<?= $seccion['id'] ?>"><?= 'seccion '.$seccion['seccion'] ?></option>
                                                                                        <?php } ?>  
                                                                                    </select>
                                                                                    <label for="seccion">Seccion</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-4">
                                                                                <div class="buton-icon">
                                                                                    <button  
                                                                                        type="submit" 
                                                                                        class="btn btn-sm mt-4 ml-1" 
                                                                                        style="color: #fff; background-color: #5c4ab8fc; float:right;"
                                                                                    >
                                                                                        Buscar
                                                                                        <span class="btn-icon-right">
                                                                                            <i class="fa fa-search" aria-hidden="true"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                    <button 
                                                                                        id="btnClearForm" 
                                                                                        type="button" 
                                                                                        class="btn btn-sm mt-4" 
                                                                                        style="color: #fff; background-color: silver;float:right;"
                                                                                        data-materia="<?= $materia['id'] ?>"
                                                                                        data-docente="<?= $_SESSION['user_data']['idDocente'] ?>"
                                                                                    >
                                                                                        Limpiar
                                                                                        <span class="btn-icon-right">
                                                                                            <i class="fa fa-eraser" aria-hidden="true"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                    <hr class="hr" />
                                                                    <div class="row scroll <?= 'materia-'.$materia['id'] ?>">
                                                                        <?php foreach($arrPlanificaciones as $planificacion) { ?>
                                                                            <div class="col-3">
                                                                                <div class="card gradient-8">
                                                                                    <div class="card-body">
                                                                                        <h4 class="text-white"><?= strtoupper(limitar_cadena($planificacion['titulo'], 18, "...")); ?></h4>
                                                                                        <div class="d-inline-block">
                                                                                            <h2 class="text-white"><?= $planificacion['porcentaje'].'%'; ?></h2>
                                                                                            <p class="text-white mb-0"><?= strtolower(limitar_cadena($planificacion['descripcion'], 21, "...")); ?></p>
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