$(function() {

	var templateini = `
		<center>
			<img class="scale" width="200" src="../assets/img/escudopng2.png" />
		</center>
	`;

	function runScale() {
		setTimeout(() => {
			$('.scale').css("transform", "scale(1.5)");
		},100);
	}

	function loadForm() {
		var template = `
			<div class="card miAnimateDiv">
				<div class="card-body">
					<div class="row">
						<div class="col-6">
							<center>
								<img width="200" src="../assets/img/escudopng2.png" />
							</center>
						</div>
						<div class="col-6">
							<form id="formLogin" autocomplete="off">
								<div class="form-group input-field">
									<input type="email" name="email" id="email" class="form-control" required />
									<label for="email">Correo Electrónico</label>
								</div>
								<div class="form-group input-field">
									<input type="password" name="password" id="password" class="form-control" required />
									<label for="password">Cedula</label>
								</div>
								<div class="form-group">
									<center>
										<button id="btnSubmit" class="btn btn-block btn-md mt-4">Ingresar</button>
									</center>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<a class="mr-2" style="float: right;" href="../processing/registro.php">¿ No te haz registrado ?</a>
					<a class="mr-2" style="float: right;" href="#">Recuperar Usuario</a>
					<span style="color:silver; font-size:14px;">colegioprivadovirgiliomedina@gmail.com</span>
				</div>
			</div>
		`;
		setTimeout(() => {
			renderForm('canvas', template);
		},3000)
	}

	function renderForm(element, template) {
		render(element, template);
	}

	function render(element, template) {
		$('#'+element).html(template);
	}

	function spinner() {
		return `
			<div class="spinner-border text-light" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
		`;
	}

	$(document).on('submit', '#formLogin', (evt) => {
		evt.preventDefault();
		const btn = $(document).find('#btnSubmit')[0];
		//$(btn).html(spinner());
		const objData = {
			'type' : 'login',
			'email': $(document).find('#email').val(),
			'password' : $(document).find('#password').val()
		};

		$.post("../controllers/controller_login.php", objData, function(response) {
			var resp = jQuery.parseJSON(response);

			if(resp['STATUS'] == 'LOGIN_SUCCESS') {
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
					  toast.addEventListener('mouseenter', Swal.stopTimer)
					  toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				})
				  
				Toast.fire({
					icon: 'success',
					title: resp.MESSAGES
				})

				setTimeout(() => {
					window.location.replace('http://localhost/ColegioVirgilioMedina/app/index.php');
				}, 3100);
			}

			if(resp['STATUS'] == 'LOGIN_FAIL') {

			}


			if(resp['STATUS'] == 'BLOQUED_USER') {
				$(document).find('.modal-body').html(`
					<center><i class="fa fa-exclamation-triangle" aria-hidden="true" 
						style="
							position: absolute;
							left: 125px;
							font-size: 200px;
							color: orange;
							z-index: 2;
							opacity: .2;
						">
					</i></center>
					<center><img width="50" src="../assets/img/escudopng2.png"></center>
					<p class="text-center mt-4" style="position:relative; z-index:3;">${resp.MESSAGES}</p>
				`);
				$(document).find('.btn-primary').hide();
				$(document).find('#modal_info_login').modal('show');
			}
			
			if(resp['STATUS'] == 'NOTFOUND_USER') {
				$(document).find('.modal-body').html(`
					<center><i class="fa fa-exclamation-triangle" aria-hidden="true" 
						style="
							position: absolute;
							left: 125px;
							font-size: 200px;
							color: orange;
							z-index: 2;
							opacity: .2;
						">
					</i></center>
					<center><img width="50" src="../assets/img/escudopng2.png"></center>
					<p class="text-center mt-4" style="position:relative; z-index:3;">${resp.MESSAGES}</p>
				`);
				$(document).find('.btn-primary').hide();
				$(document).find('#modal_info_login').modal('show');
			}
		})
	})

	render('canvas', templateini);
	runScale();
	loadForm()
})