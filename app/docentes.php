<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/docentes.class.php');
    require_once('../model/class/materias.class.php');
    require_once('../model/class/secciones.class.php');

    $objDocentes = new Docentes();
    $objMaterias = new Materias();
    $objSecciones = new Secciones();

    $arrMaterias = $objMaterias->getAllMaterias();
    $arrDocentes = $objDocentes->getAllDocentes();
    $arrSecciones = $objSecciones->getAllSecciones();

    $arrLvEstu = [
        'N' => 'Sin Estudios',
        'B' => 'Bachiller',
        'U' => 'Estudios Universitarios',
        'P' => 'Post-Grado'
    ];

?>
<link rel="stylesheet" type="text/css" href="css/docentes.css" />
<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Docentes</a></li>
            </ol>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <input id="docenteid" type="hidden" value="" />
            <div class="col-12">
                <div class="card principal">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-10">
                                <h3>Docentes</h3>
                            </div>
                            <div class="col-2">
                                <div class="button-icon">
                                    <button id="btNewDocente" type="button" class="btn btn-success mb-1" style="color: #fff; background-color: #00B236;">
                                        Nuevo Docente
                                        <span class="btn-icon-right">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <?php foreach($arrDocentes as $docente) {     
                            ?>
                                <div class="col-3">
                                    <div class="card cardHeight">
                                        <div class="card-image card-images-height gradient-materias">
                                            <center>
                                                <img class="img-icons" src="../assets/img/materias/icons/educator.png" />
                                            </center>
                                            <a title="Asignar Materias" 
                                                class="config_docente btn-floating halfway-fab waves-effect waves-light green"
                                                data-iddocente="<?= $docente['id'] ?>"
                                            >
                                                <i class="fa fa-plus"></i>
                                            </a>
                                        </div>
                                        <div class="card-content">
                                            <span class="card-title titleMateria"><?= $docente['nombre'].' '.$docente['apellido']; ?></span>
                                            <p>Docente</p>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
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
    var arrMaterias = <?= json_encode($arrMaterias) ?>;
    var arrSecciones = <?= json_encode($arrSecciones) ?>;
</script>
<script src="../assets/js/core/generalFunction.js"></script>
<script src="js/docentes.js"></script>
<?php require_once('utils/footer.php'); ?>
     