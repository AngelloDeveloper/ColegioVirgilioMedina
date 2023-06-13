 <!-- Footer Start -->
 <div style="background-image: url('../assets/img/Patron\ escudo.png'); background-repeat: no-repeat; background-size: cover;" class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-6 col-md-6 mb-4" style="margin-top: 80px;">
                    <h4 class="text-white mb-4">Nuestra Institución</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Sector Libertador, Santa Ana, Táchira, Venezuela</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>0276-7668102/0424-7253640</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>colegioprivadovirgiliomedina@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank" href="https://www.facebook.com/profile.php?id=100086925978400"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank" href="https://api.whatsapp.com/send?phone=+584247253640&text=Hola, Nececito mas informacion!"><i class="fab fa-whatsapp"></i></a>
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank" href="https://www.instagram.com/uecolegiovirgiliomedinarz/"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <center>
                        <img src="../assets/img/escudopng2.png" style="width:200px;" />
                    </center>
                    <p class="text-center" style="font-size:25px;">U.E. Colegio Virgilio Medína Ramírez</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-8 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">U.E. Colegio Virgilio Medína Ramirez</a>, tiene todos los derechos reservados.
                </div>
                <div class="col-md-4 text-center">
                    <span>Desarrollado por <u>Ing. Angello Durán</u></span> 
                    <a style="display: inline-block;" class="btn btn-outline-light rounded-circle me-2" target="_blank" href="https://api.whatsapp.com/send?phone=+584264720250&text=Hola, Nececito mas informacion!">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/parallax/parallax.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <!--modal pre-inscripciones-->
    <script>
        $(function() {
            setTimeout(() => {
                $('#modal_pre_inscripcion').modal('show');
            },2000);

            $('#btn_close_pre_inscripcion').on('click', function(e) {
                $('#modal_pre_inscripcion').modal('hide');
            })
        })
    </script>
</body>

</html>