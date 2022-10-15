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
						<div class="col-12">
							<center>
								<img width="200" src="../assets/img/escudopng2.png" />
							</center>
						</div>
					</div>
					<hr />
					<div class="row">
						<div class="col-12">
							<form id="formLogin" autocomplete="off">
								<div class="form-group">
									<label for="email"><b>CorreoElectrónico</b></label>
									<input type="email" name="email" id="email" class="form-control input" required />
								</div>
								<div class="form-group">
									<label for="password"><b>Clave</b></label>
									<input type="password" name="password" id="password" class="form-control input" required />
								</div>
								<div class="form-group">
									<center>
										<button id="btnSubmit" class="btn btn-lg mt-4">Ingresar</button>
									</center>
								</div>
							</form>
						</div>
					</div>
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
		`
	}

	$(document).on('submit', '#formLogin', (evt) => {
		evt.preventDefault();
		const btn = $(document).find('#btnSubmit')[0];
		$(btn).html(spinner());
	})

	render('canvas', templateini);
	runScale();
	loadForm()
})