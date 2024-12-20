$(function() {
    initMaterialInput();

    $('#btNewSeccion').on('click', function(e) {
        var btn = $(this)[0];
        const type = 'add_seccion';
        const template = getTemplate(type);
        $('.principal').hide();
        $('.secondary').html(template);
        $('.secondary').show();
        initMaterialInput();
    });

    $(document).on('click', '#btnReturnSeccion' ,function(e) {
        $('.principal').show();
        $('.secondary').html('');
        $('.secondary').hide();
        initMaterialInput();
    })

    /*editSection*/
    $(document).on('click', '.editSection', function(e) {
        const elm = $(this)[0];
        let resm = $(elm).data('turnm');
        let rest = $(elm).data('turnt');
        resm = resm.split(','); 
        rest = rest.split(',');
        const objDataTurns = {
            m: resm,
            t: rest,
            sec: $(elm).data('section'),
            id: $(elm).data('idseccion')
        };
        const idSection = $(elm).data('idseccion');
        const type = 'edit_seccion';
        const template = getTemplate(type, '', objDataTurns);
        $('.principal').hide();
        $('.secondary').html(template);
        $('.secondary').show();
        initMaterialInput();
        /*const objData = {
            type: 'edit_seccion',
            idSection: idSection
        };*/

        /*
            var btn = $(this)[0];
            const type = 'add_seccion';
            const template = getTemplate(type);
            $('.principal').hide();
            $('.secondary').html(template);
            $('.secondary').show();
            initMaterialInput();
        */
    })

    /*delete section*/
    $(document).on('click', '.delSection', function(e) {
        const elm = $(this)[0];
        const idSection = $(elm).data('idseccion');

        const objData = {
            type: 'delete_seccion',
            idSection: idSection
        };
        
        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "El dato seleccionado seran borrado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                $.post("../controllers/controller_secciones.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                            title: resp.MESSAGES,
                            text: 'Los datos fueron borrados exitosamente',
                            icon: 'success',
                            confirmButtonColor: '#e0bb66'
                        }).then((resul) => {
                            window.location.reload();
                        })
                    }
                });
            }
        })
    })

    /*send formulario*/
    $(document).on('submit','#form_seccion', function(e) {
        e.preventDefault();
        const type = $(document).find('#type').val();
        const objData = {
            type: type,
            id: type == 'edit_seccion' ? $(document).find('#idSection').val() : '',
            seccion: $(document).find('#seccion_name').val().toUpperCase(),
            grados: $(document).find('#seccion_grados').val()
        };

        console.log('la data');
        console.log(objData);

        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "Los datos que ha suministrado seran guardados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                $.post("../controllers/controller_secciones.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                            title: resp.MESSAGES,
                            text: 'Los datos se guardaron Exitosamente',
                            icon: 'success',
                            confirmButtonColor: '#e0bb66'
                        }).then((resul) => {
                            window.location.reload();
                        })
                    }
                });
                
            }
        })
    })

    function getTemplate(type, resp='', props='') {
        var template = '';
        var select_grados_M = '';
        var select_grados_T = '';
        var select_turno = '';

        switch (type) {
            case 'add_seccion':
                var prefix = '<span class="badge badge-pill gradient-3 ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo</span>';
                objGrados.map((value, index) => {
                    select_grados_M += `
                        <option value="${value.id}-${objTurnos[0].turno}">${value.formato}</option>
                    `;                                
                })

                objGrados.map((value, index) => {
                    select_grados_T += `
                        <option value="${value.id}-${objTurnos[1].turno}">${value.formato}</option>
                    `;                                
                })
                
                template = `
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <h3 style="display:inline;">Secciones ${prefix}</h3>
                                <div class="button-icon" style="float:right;">
                                    <button id="btnReturnSeccion" type="button" class="btn mb-1" style="color: #fff; background-color: silver;">
                                        Volver
                                        <span class="btn-icon-right">
                                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row p-4">
                            <div class="col-6">
                                <form id="form_seccion">
                                    <input id="type" type="hidden" value="${type}" />
                                    <input id="idDocente" type="hidden" value="" />
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <input value="" id="seccion_name" type="text" style="text-transform: uppercase;" required/>
                                                <label for="seccion">Seccion</label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <select multiple id="seccion_grados" class="seccion" name="seccion">
                                                    <optgroup label="Turno ( Mañana )">
                                                        <option value="" disabled selected>Seleccionar...</option>
                                                        ${select_grados_M}
                                                    </optgroup>
                                                    <optgroup label="Turno ( Tarde )">
                                                        <option value="" disabled selected>Seleccionar...</option>
                                                        ${select_grados_T}
                                                    </optgroup>
                                                </select>
                                                <label for="seccion_multiple">Grados</label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--<div class="row">
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <select multiple id="seccion_turno" class="turno" name="turno">
                                                    <option value="" disabled selected>Seleccionar...</option>    
                                                    ${select_turno}
                                                </select>
                                                <label for="turno">Turno</label>
                                            </div>
                                        </div>
                                    </div>-->
                                    <br /><br /><hr />
                                    <div class="row">
                                        <div class="col-12">
                                            <center>
                                                <div class="button-icon">
                                                    <button type="submit" class="btn mb-1" style="color: #fff; background-color: #00B236;">
                                                        Guardar
                                                        <span class="btn-icon-right">
                                                            <i class="fa fa-check" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                `;
            break;
            case 'edit_seccion':
                var prefix = '<span class="badge badge-pill gradient-8 ml-2"><i class="fa fa-pencil" aria-hidden="true"></i> Editar</span>';
                objGrados.map((value, index) => {
                    let result = props.m.filter((grado) => grado == value.formato)
                    let selected = result.length > 0 ? 'selected' : '';
                    select_grados_M += `
                        <option ${selected} value="${value.id}-${objTurnos[0].turno}">${value.formato}</option>
                    `;                                
                })

                objGrados.map((value, index) => {
                    let result = props.t.filter((grado) => grado == value.formato)
                    let selected = result.length > 0 ? 'selected' : '';
                    select_grados_T += `
                        <option ${selected} value="${value.id}-${objTurnos[1].turno}">${value.formato}</option>
                    `;                                
                })
                
                template = `
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <h3 style="display:inline;">Secciones ${prefix}</h3>
                                <div class="button-icon" style="float:right;">
                                    <button id="btnReturnSeccion" type="button" class="btn mb-1" style="color: #fff; background-color: silver;">
                                        Volver
                                        <span class="btn-icon-right">
                                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row p-4">
                            <div class="col-6">
                                <form id="form_seccion">
                                    <input id="type" type="hidden" value="${type}" />
                                    <input id="idSection" type="hidden" value="${props.id}" />
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <input value="${props.sec}" id="seccion_name" type="text" style="text-transform: uppercase;" required/>
                                                <label for="seccion">Seccion</label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <select multiple id="seccion_grados" class="seccion" name="seccion">
                                                    <optgroup label="Turno ( Mañana )">
                                                        <option value="" disabled selected>Seleccionar...</option>
                                                        ${select_grados_M}
                                                    </optgroup>
                                                    <optgroup label="Turno ( Tarde )">
                                                        <option value="" disabled selected>Seleccionar...</option>
                                                        ${select_grados_T}
                                                    </optgroup>
                                                </select>
                                                <label for="seccion_multiple">Grados</label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--<div class="row">
                                        <div class="col-6">
                                            <div class="form-group input-field">
                                                <select multiple id="seccion_turno" class="turno" name="turno">
                                                    <option value="" disabled selected>Seleccionar...</option>    
                                                    ${select_turno}
                                                </select>
                                                <label for="turno">Turno</label>
                                            </div>
                                        </div>
                                    </div>-->
                                    <br /><br /><hr />
                                    <div class="row">
                                        <div class="col-12">
                                            <center>
                                                <div class="button-icon">
                                                    <button type="submit" class="btn mb-1" style="color: #fff; background-color: #00B236;">
                                                        Guardar
                                                        <span class="btn-icon-right">
                                                            <i class="fa fa-check" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                `;
            break;
        }

        return template;
    }
})
