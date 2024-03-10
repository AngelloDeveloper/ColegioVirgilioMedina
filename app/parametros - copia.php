<?php 
    require_once('utils/header.php');
    require_once('utils/navbar.php');
    require_once('utils/menu.php'); 

    require_once('../model/class/conexion.class.php');
    require_once('../model/class/parametros.class.php');

    $objParameters = new Parametros();

    $arrParametros = $objParameters->getAllParameter();
?>
<link rel="stylesheet" type="text/css" href="css/docentes.css" />
<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Configuraciones</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Parametros</a></li>
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
                            <div class="col-12">
                                <h3>Parametros</h3>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div class="row">
                            <div class="col-12">
                                <ul class="collapsible">
                                    <li>
                                        <div class="collapsible-header gradient-materias bannerList">
                                            <div class="row" style="width:100%;">
                                                <div class="col-1">
                                                    <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/icons/tuerca.png" />
                                                </div>
                                                <div class="col-11">
                                                    <span class="titleMateriaList">Generales</span>
                                                    <p class="mb-0">Parametros del sistema</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="row mb-4">
                                                <div class="col-12">
                                                    <div class="button-icon">
                                                        <button id="btNewDocente" type="button" class="btn btn-sm btn-success mb-1 mr-2" style="color: #fff; background-color: #00B236; float: right;">
                                                            Nuevo Parametro
                                                            <span class="btn-icon-right" style="padding: 0px !important;">
                                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-12">
                                                    <!--TABLE PARAMETROS GENERALES-->
                                                    <table class="table table-striped">
                                                        <tr>
                                                            <th class="text-center">Parametro</th>
                                                            <th class="text-center">Valor</th>
                                                            <th class="text-center">Status</th>
                                                            <th class="text-center">Acciones</th>
                                                        </tr>
                                                        <?php foreach($arrParametros as $key => $parametro) { 
                                                            $placeholder = empty($parametro['valor']) ? 'Sin valores' : '';    
                                                        ?>
                                                            <tr>
                                                                <td class="text-center"><?= $parametro['parametro']?></td>
                                                                <td class="text-center">
                                                                    <input class="form-control" value="<?= $parametro['valor']?>" placeholder="<?=  $placeholder ?>" />
                                                                </td>
                                                                <td class="text-center">
                                                                    <?php 
                                                                        $swicth_status = $parametro['status'] == 'Y' ? 'checked="checked"' : '';
                                                                    ?>
                                                                    <div class="form-group">
                                                                        <center>
                                                                            <div>
                                                                                <div class="switch">
                                                                                    <label>
                                                                                    
                                                                                    <input type="checkbox" id="informeMedico" <?= $swicth_status ?>>
                                                                                    <span class="lever"></span>
                                                                                   
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </center>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <center>
                                                                        <button class="btn btn-sm btn-primary btnEdit" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Editar">
                                                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                        </button>
                                                                    </center>
                                                                </td>
                                                            </tr>
                                                        <?php } ?>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="collapsible-header gradient-materias bannerList">
                                            <div class="row" style="width:100%;">
                                                <div class="col-1">
                                                    <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/icons/tuerca.png" />
                                                </div>
                                                <div class="col-11">
                                                    <span class="titleMateriaList">Customizados</span>
                                                    <p class="mb-0">Parametros Personalizados</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="row">
                                                <?php foreach($arrParametros as $parametro) { ?>
                                                    <?php if($key == 'GENERAL' && $parametro['status'] == 'N') { ?>
                                                        <div class="col-4">
                                                            <p style="text-align: right;"><b><?= $parametro['parametro']; ?> :</b></p>
                                                        </div>
                                                        <div class="col-8">
                                                            <p style="text-align: left;"><?= $parametro['valor']; ?></p>
                                                        </div>
                                                    <?php } ?>
                                                <?php } ?>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
</script>
<script src="js/parametros.js"></script>
<?php require_once('utils/footer.php'); ?>