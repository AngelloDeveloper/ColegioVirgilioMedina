$(function() {
    $('#logout').on('click', function(e) {
        $.post('../controllers/controller_login.php', {type: 'logout'}, function(response) {
            var resp = jQuery.parseJSON(response);
            if(resp.STATUS == 'SUCCESS') {
                window.location.replace('http://localhost/ColegioVirgilioMedina/');
            }
        })
    })
})