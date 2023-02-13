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
	<title>Colegio Virgilio Medina</title>
</head>
	<body>
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