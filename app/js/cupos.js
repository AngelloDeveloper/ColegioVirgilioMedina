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
            turn: 'M',
            description: 'mañana',
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
            turn: 'T',
            description: 'tarde',
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

    $('.swicth_active_section').on('click', function() {
        const elm = $(this)[0];
        const swicth = $(elm).prop('checked');
        const elmchecks = $(elm).parent().parent().parent().parent().prev()[0];
        if(swicth) {
            $(elmchecks).find('p').show();
        } else {
            $(elmchecks).find('p').hide();
        }
    })

    $('.morning').on('click', function() {
        const elm = $(this)[0];
        const check = $(elm).prop('checked');
        console.log('checked: ', check);
        const elmchecks = $(elm).parent().parent().parent().parent().parent().next()[0];
        console.log(elmchecks);
        let template = `
            <div class="input-field col s6 cupo_m">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Cupo Mañana</label>
            </div>
        `;
        if(check) {
            $(elmchecks).find('.content_inputs').append(template);
        } else {
            $(elmchecks).find('.cupo_m').remove();
        }

        initMaterialInput();
    })

    $('.afternon').on('click', function() {
        const elm = $(this)[0];
        const check = $(elm).prop('checked');
        console.log('checked: ', check);
        const elmchecks = $(elm).parent().parent().parent().parent().parent().next()[0];
        console.log(elmchecks);
        let template = `
            <div class="input-field col s6 cupo_t">
                <input  type="text" class="validate">
                <label>Cupo Tarde</label>
            </div>
        `;
        if(check) {
            $(elmchecks).find('.content_inputs').append(template);
        } else {
            $(elmchecks).find('.cupo_t').remove();
        }

        initMaterialInput();
    })
})