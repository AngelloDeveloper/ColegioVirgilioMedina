$(function() {
    $('#logout').on('click', function(e) {
        $.post('../controllers/controller_login.php', {type: 'logout'}, function(response) {
            var resp = jQuery.parseJSON(response);
            if(resp.STATUS == 'SUCCESS') {
                const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 1500,
					timerProgressBar: true,
					didOpen: (toast) => {
					  toast.addEventListener('mouseenter', Swal.stopTimer)
					  toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				})
				  
				Toast.fire({
					icon: 'warning',
					title: resp.MESSAGES
				})

				setTimeout(() => {
					window.location.replace('http://localhost/ColegioVirgilioMedina/');
				}, 1600);
            }
        })
    })
})