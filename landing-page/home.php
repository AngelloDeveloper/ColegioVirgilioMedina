<?php 
    require('utils/header.php'); 
    require_once('../model/class/conexion.class.php');
    require_once('../model/class/parametros.class.php');
    require_once('../model/class/general_functions.class.php');
    //intancias
    $objGeneralFunctions = new General_functions();
    $OS = $objGeneralFunctions->what_os();
    $objParameter = new Parametros();
    $arrParameters =  $objParameter->getAllParameter();

    if($arrParameters['MOBILE_RESTRICTION']['status'] != 'N' && $OS == true) { 
        header("Location: notDevice.php");
    }
?>

<body>
     <!--nav bar-->
    <?php require('utils/navbar.php') ?>

    <?php if($arrParameters['PRE_REGISTRO']['status'] != 'N') { ?>
        <!--modal preregistro-->
        <div id="modal_pre_inscripcion" class="modal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header" style="display:block !important;">
                        <center><h2 class="text-center">Incripciones Abiertas !!!</h2></center>
                    </div>
                    <div class="modal-body">
                        <center><img src="../assets/img/escudopng2.png" style="width:100px;" /></center>
                        <br />
                        <p style="text-align: justify;">
                            El proceso estará disponibles los dias <b>1, 2 y 5 de Junio</b>, No pierdas esta <b>Gran Oportunidad.</b>
                            <br /><br /> Recuerda, al completar tu pre-inscripción se <b>descargará de manera automatica tu planilla</b>, la cual deberás imprimir y llevar como recaudo a la institución para formalizar la inscripción
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button id="btn_close_pre_inscripcion" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <a target="_blank" href="../processing/registro.php" class="btn" style="background-color: #DCBB05; color: #000;">Ir a la Pre-Inscripción</a>
                    </div>
                </div>
            </div>
        </div>
    <?php  } ?>

    <!-- Carousel Start -->
    <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" style="height: 800px;" src="img/slide-1.jpg" alt="Image">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h1 class="display-1 text-white mb-5 animated slideInDown">Educación de Calidad Valores y Familia</h1>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-4">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" style="height: 800px;" src="img/slide-2.jpg" alt="Image">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="display-1 text-white mb-5 animated slideInDown">Moldeamos Mentes Brillantes para un Futuro Mejor</h1>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-4">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <!-- Carousel End -->


    <!-- Top Feature Start -->
    <div class="container-fluid top-feature py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
            <div class="row gx-0">
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-white shadow d-flex align-items-center h-100 px-5" style="min-height: 160px;">
                        <div class="d-flex">
                            <div class="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i class="fa fa-home text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <h4>Institución</h4>
                                <span>Infraestructura y servicios de calidad, para un correcto ambiente educativo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="bg-white shadow d-flex align-items-center h-100 px-5" style="min-height: 160px;">
                        <div class="d-flex">
                            <div class="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i class="fa fa-users text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <h4>Maestros De Calidad</h4>
                                <span>Docentes experimentados con vocacion a la enseñanza en las diversas diciplinas academicas</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="bg-white shadow d-flex align-items-center h-100 px-5" style="min-height: 160px;">
                        <div class="d-flex">
                            <div class="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i class="fa fa-award text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <h4>Beca Estudiantil</h4>
                                <span>Programa de becas a mejores promedios y talentos estudiantiles, impulsando la excelencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Top Feature End -->

    <?php if($arrParameters['PRE_REGISTRO']['status'] != 'N') { ?>
        <!-- pre registro section -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                    <p class="fs-5 fw-bold text-primary">Eventos</p>
                    <h1 class="display-5 mb-5">Inscripciones Abiertas</h1>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.3s" style="background: linear-gradient(303deg, rgba(17,121,9,1) 3%, rgba(14,138,54,1) 10%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%);">
                    <div class="text-center rounded py-5 px-4" style="box-shadow: 0 0 45px rgba(0,0,0,.08);">
                        <div class="row">
                            <div class="col-4">
                                <img src="../assets/img/escudopng2.png" style="width:200px;" />
                            </div>
                            <div class="col-8">
                                <h4>
                                El proceso estará disponibles los dias <b>1, 2 y 5 de Junio</b>, No pierdas esta <b>Gran Oportunidad.</b>
                                <br /><br /> Recuerda, al completar tu pre-inscripción se <b>descargará de manera automatica tu planilla</b>, la cual deberás imprimir y llevar como recaudo a la institución para formalizar la inscripción
                                </h4>
                                <a  
                                    style="padding: 20px; margin-top: 50px; background-color: #DCBB05; color: #000;" 
                                    target="_blank" 
                                    href="../processing/registro.php" 
                                    class="btn ir_preregistro">
                                        Ir a la Pre-Inscripción
                                </a>
                            </div>
                            <style>
                                .ir_preregistro {
                                    transform-origin: 0 0;
                                    animation: ir_preregistro 3s ease-in-out infinite alternate;
                                }

                                @keyframes ir_preregistro {
                                    0% {
                                        transform: scale(1.0);
                                    }
                                    50% {
                                        transform: scale(1.2);
                                    }
                                }
                            </style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-end">
                <div class="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid rounded" data-wow-delay="0.1s" src="img/foto-1.jpg">
                </div>
                <div class="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 class="display-1 text-primary mb-0">100%</h1>
                    <p class="text-primary mb-4">Una experiencia incomparable</p>
                    <h1 class="display-5 mb-4">Planes Educativos Innovadores</h1>
                    <p class="mb-4">Las mejores estrategias y proyectos academicos, generando gran satisfaccion y sentido del progreso en nuestros estudiantes</p>
                    <a class="btn btn-primary py-3 px-4" href="">ver más</a>
                </div>
                <div class="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="row g-5">
                        <div class="col-12 col-sm-6 col-lg-12">
                            <div class="border-start ps-4">
                                <i class="fa fa-award fa-3x text-primary mb-3"></i>
                                <h4 class="mb-3">Beca Estudiantil</h4>
                                <span>Programa de becas a mejores promedios y talentos estudiantiles, impulsando la excelencia.</span>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-12">
                            <div class="border-start ps-4">
                                <i class="fa fa-users fa-3x text-primary mb-3"></i>
                                <h4 class="mb-3">Maestros De Calidad</h4>
                                <span>Docentes experimentados con vocacion a la enseñanza en las diversas diciplinas academicas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <!-- Facts Start -->
    <div class="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/slide-1.jpg">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">215</h1>
                    <span class="fs-5 fw-semi-bold text-light">Matricula estudiantil</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">15</h1>
                    <span class="fs-5 fw-semi-bold text-light">Docentes</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">24</h1>
                    <span class="fs-5 fw-semi-bold text-light">Estudiantes Becados</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">0</h1>
                    <span class="fs-5 fw-semi-bold text-light">Deserción</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Facts End -->


    <!-- Features Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p class="fs-5 fw-bold text-primary">Porque debe Elegirnos!</p>
                    <h1 class="display-5 mb-4">¡Razones por la que nos eligen!</h1>
                    <p class="mb-4">Contamos con el mejor proyecto educativo del municipio córdoba, somos innovadores y visionarios, llevamos la educacion al siguiente nivel, beneficiando a todos los jovenes que desean una educación de calidad</p>
                    <a class="btn btn-primary py-3 px-4" href="">Ver más</a>
                </div>
                <div class="col-lg-6">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-6">
                            <div class="row g-4">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="text-center rounded py-5 px-4" style="box-shadow: 0 0 45px rgba(0,0,0,.08);">
                                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 90px; height: 90px;">
                                            <i class="fa fa-check fa-3x text-primary"></i>
                                        </div>
                                        <h4 class="mb-0">100% Satisfacción</h4>
                                    </div>
                                </div>
                                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="text-center rounded py-5 px-4" style="box-shadow: 0 0 45px rgba(0,0,0,.08);">
                                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 90px; height: 90px;">
                                            <i class="fa fa-users fa-3x text-primary"></i>
                                        </div>
                                        <h4 class="mb-0">Docentes Experimentados</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div class="text-center rounded py-5 px-4" style="box-shadow: 0 0 45px rgba(0,0,0,.08);">
                                <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 90px; height: 90px;">
                                    <i class="fa fa-school fa-3x text-primary"></i>
                                </div>
                                <h4 class="mb-0">Excelente Hambiente Educativo</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Features End -->


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-bold text-primary">Nuestros servicios</p>
                <h1 class="display-5 mb-5">Servicios que ofrecemos para usted</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded d-flex h-100">
                        <div class="service-img rounded">
                            <img class="img-fluid" src="img/shop.jpg" alt="">
                        </div>
                        <div class="service-text rounded p-5">
                            <h4 style="margin-top: 5em;" class="mb-3">Tienda y papeleria</h4>
                            <p class="mb-4">venta de uniforme escolar a la medida, y uniforme deportivo con chaqueta, así como todos los utenciolios de papeleria necesarios</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded d-flex h-100">
                        <div class="service-img rounded">
                            <img class="img-fluid" src="img/empanadas.jpg" alt="">
                        </div>
                        <div class="service-text rounded p-5">
                            <h4 style="margin-top: 5em;" class="mb-3">Alimentacion</h4>
                            <p class="mb-4">Servicio de alimentos, desayunos y jugos, de calidad</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded d-flex h-100">
                        <div class="service-img rounded">
                            <img class="img-fluid" src="img/becas.jpg" alt="">
                        </div>
                        <div class="service-text rounded p-5">
                            <h4 style="margin-top: 5em;" class="mb-3">Becas Estudiantiles</h4>
                            <p class="mb-4">Brinda la oportunidad de formar parte del plantel con sus beneficios completamente gratuito.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->


    <!-- Projects Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-bold text-primary">Nuestros Proyectos</p>
                <h1 class="display-5 mb-5">Algunos de nuestros Lindos proyectos</h1>
            </div>
            <div class="row wow fadeInUp" data-wow-delay="0.3s">
                <div class="col-12 text-center">
                    <ul class="list-inline rounded mb-5" id="portfolio-flters">
                        <li class="mx-2 active" data-filter="*">Todos</li>
                        <li class="mx-2" data-filter=".first">Proyectos Finalizados</li>
                        <li class="mx-2" data-filter=".second">Proyectos en marcha</li>
                    </ul>
                </div>
            </div>
            <div class="row g-4 portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                    <div class="portfolio-inner rounded">
                        <img style="height: 20em !important; width: 100%;" class="img-fluid" src="img/p1.jpg" alt="">
                        <div class="portfolio-text">
                            <h4 class="text-white mb-4">Producción de alimentos</h4>
                            <div class="d-flex">
                                <a class="btn btn-lg-square rounded-circle mx-2" href="img/p1.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                    <div class="portfolio-inner rounded">
                        <img style="height: 20em !important; width: 100%;" class="img-fluid" src="img/p2.jpg" alt="">
                        <div class="portfolio-text">
                            <h4 class="text-white mb-4">Huerto y semillero</h4>
                            <div class="d-flex">
                                <a class="btn btn-lg-square rounded-circle mx-2" href="img/p2.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                    <div class="portfolio-inner rounded">
                        <img style="height: 20em !important; width: 100%;" class="img-fluid" src="img/p3.jpg" alt="">
                        <div class="portfolio-text">
                            <h4 class="text-white mb-4">Equipo Deportivo</h4>
                            <div class="d-flex">
                                <a class="btn btn-lg-square rounded-circle mx-2" href="img/p3.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Projects End -->


    <!-- Team Start -->
    <!--<div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-bold text-primary">Our Team</p>
                <h1 class="display-5 mb-5">Dedicated & Experienced Team Members</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid" src="img/team-1.jpg" alt="">
                        <div class="team-text">
                            <h4 class="mb-0">Doris Jordan</h4>
                            <p class="text-primary">Landscape Designer</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item rounded">
                        <img class="img-fluid" src="img/team-2.jpg" alt="">
                        <div class="team-text">
                            <h4 class="mb-0">Johnny Ramirez</h4>
                            <p class="text-primary">Garden Designer</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded">
                        <img class="img-fluid" src="img/team-3.jpg" alt="">
                        <div class="team-text">
                            <h4 class="mb-0">Diana Wagner</h4>
                            <p class="text-primary">Senior Gardener</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- Team End -->

   <?php require('utils/footer.php') ?>