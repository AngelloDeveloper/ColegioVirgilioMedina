$(function() {
    initMaterialInput();

    $(document).on('click', '#btNewParameter', function(evt) {
        Swal.fire({
            title: 'Esta configuración afectará el funcionamiento del sistema',
            text: "Esta seguro en continuar ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                console.log('entramos');
            }
        })
    })
})