$(function() {
    const BASE_URL = "../controllers/";
    const CONTROLLER_PRINCIPAL = "controller_cupos.php";
    initMaterialInput();


    //submit events
    $('#form-manana').submit((e) => {
        e.preventDefault();
        let elm = e.target;
        const obj = {
            type: 'addCupos',
            periodo: '',
            turn: 'manana',
            objData: $(elm).serializeArray()
        };

        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "Las configuraciónes que ha realizado seran guardadas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            $.post('../controllers/controller_cupos.php', obj, function(response) {
                var resp = jQuery.parseJSON(response);
                Swal.fire({
                    title: resp.MESSAGES,
                    icon: 'success',
                    confirmButtonColor: '#e0bb66'
                })
            })
            
        })
    })

    $('#form-tarde').submit((e) => {
        e.preventDefault();
        let elm = e.target;
        const obj = {
            type: 'addCupos',
            periodo: '',
            turn: 'tarde',
            objData: $(elm).serializeArray()
        };

        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "Las configuraciónes que ha realizado seran guardadas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            $.post('../controllers/controller_cupos.php', obj, function(response) {
                var resp = jQuery.parseJSON(response);
                Swal.fire({
                    title: resp.MESSAGES,
                    icon: 'success',
                    confirmButtonColor: '#e0bb66'
                })
            })
        })
    })
})