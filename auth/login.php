<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--     Fonts and icons     -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  	<!-- CSS Files -->
  	<link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="css/login.css?v="<?= rand(100, 500); ?>" />
	<!--JQUERY-->
	<script src="../assets/js/core/jquery.min.js"></script>
	<!--swallAlert-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.all.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.min.css" rel="stylesheet">
	<!--Import materialize.css-->
	<link type="text/css" rel="stylesheet" href="../assets/materialize/css/materialize.min.css"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="../assets/materialize/css/custom.css"  media="screen,projection"/>
	<!--General functions JS-->
    <script src="../assets/js/src/generalFunction.js"></script>
	<!--JavaScript at end of body for optimized loading-->
	<script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>

	<title>Colegio Virgilio Medina</title>
</head>
	<body>
		<style>
			#modal_info_login {
				position: fixed !important;
				left: 0 !important;
				right: 0 !important;
				background-color: transparent !important;
				width: 100% !important;
				max-height: 100% !important;
			}
		</style>
		<div id="modal_info_login" class="modal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
				<div class="modal-body">
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-primary">Continuar</button>
				</div>
				</div>
			</div>
		</div>
		<section class="mtlogin">
			<div class="container-fluid">
				<div class="row" style="height: 500px;">
					<div class="col-md-3">
						
					</div>
					<div class="col-md-6">
						<div id="canvas"></div>
					</div>
					<div class="col-md-3">
						
					</div>
				</div>
			</div>
		</section>
		<footer>
			
		</footer>
		<!--   Core JS Files   -->
		<script src="../assets/js/core/popper.min.js"></script>
		<script src="../assets/js/core/bootstrap.min.js"></script>
		<script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
		<script type="text/javascript" src="js/login.js?v="<?= rand(100, 500); ?>></script>
	</body>
</html>

<!---->