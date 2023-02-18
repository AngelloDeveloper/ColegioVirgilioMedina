<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/docentes.class.php');

    $objDocentes = new Docentes();
    $arrDocentes = $objDocentes->getAllDocentes();
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
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
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
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th><center>Nombre</center></th>
                                                        <th><center>Apellido</center></th>
                                                        <th><center>Documento</center></th>
                                                        <th><center>Correo</center></th>
                                                        <th><center>Dirección</center></th>
                                                        <th><center>Teléfono</center></th>
                                                        <th><center>Lv. Instrucción</center></th>
                                                        <th><center>Acciones</center></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php foreach($arrDocentes as $docente) { ?>
                                                        <tr>
                                                            <td><center><?= $docente['nombre'] ?></center></td>
                                                            <td><center><?= $docente['apellido'] ?></center></td>
                                                            <td><center><?= $docente['cedula'] ?></center></td>
                                                            <td><center><?= $docente['email'] ?></center></td>
                                                            <td><center><?= $docente['direccion'] ?></center></td>
                                                            <td>
                                                                <center>
                                                                    <i class="fa fa-mobile" 
                                                                        data-toggle="tooltip" 
                                                                        data-placement="top" 
                                                                        title="<?= $docente['telf_movil'] ?>" 
                                                                        aria-hidden="true"
                                                                        style="font-size: 25px;"
                                                                    ></i>
                                                                </center>
                                                            </td>
                                                            <td>
                                                                <center>
                                                                    <i class="fa fa-graduation-cap" 
                                                                        data-toggle="tooltip" 
                                                                        data-placement="top" 
                                                                        title="<?= $arrLvEstu[$docente['nivel_instruccion']] ?>" 
                                                                        aria-hidden="true"
                                                                        style="font-size: 25px;"
                                                                    ></i>
                                                                </center>
                                                            </td>
                                                            <td>
                                                                <center>
                                                                    <button
                                                                        class="btn btn-sm btn-primary btnEdit" 
                                                                        data-toggle="tooltip" 
                                                                        data-placement="top"
                                                                        data-iddocente="<?= $docente['id'] ?>"  
                                                                        title="Editar"
                                                                    >
                                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                    </button>
                                                                    <button 
                                                                        class="btn btn-sm btn-danger btnDelete" 
                                                                        data-toggle="tooltip" 
                                                                        data-placement="top" 
                                                                        data-iddocente="<?= $docente['id'] ?>"
                                                                        title="Eliminar" 
                                                                    >
                                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                                    </button>
                                                                </center>
                                                            </td>
                                                        </tr>
                                                    <?php } ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card secondary"></div>
            </div>
        </div>
    </div>
</div>

<script src="js/docentes.js"></script>
<?php require_once('utils/footer.php'); ?>
     