$(function() {
    $('#btNewDocente').on('click', function(e) {
        var btn = $(this)[0];
        const type = 'add_docente';
        const template = getTemplate(type);
        $('.principal').hide();
        $('.secondary').html(template);
        $('.secondary').show();
        M.AutoInit();
        M.updateTextFields();
        M.FormSelect.init($('select'));
    });

    $(document).on('click', '#btnReturnDocente' ,function(e) {
        $('.principal').show();
        $('.secondary').html('');
        $('.secondary').hide();
        M.AutoInit();
        M.updateTextFields();
        $('select').formSelect();
    })

    $(document).on('submit', '#form', function(e) {
        e.preventDefault();
        var type = $(document).find('#type').val();
        const objData = {
            type: type,
            id: $(document).find('#idDocente').val(),
            nombre: $(document).find('#nombre').val(),
            apellido: $(document).find('#apellido').val(),
            documento: $(document).find('#documento').val(),
            telefono: $(document).find('#telefono').val(),
            email: $(document).find('#email').val(),
            direccion: $(document).find('#direccion').val(),
            lv_instruccion: $(document).find('#lv_instruccion').val()
        }

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
                $.post("../controllers/controller_docente.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                            title: resp.MESSAGES,
                            text: 'Los datos se guardaron Exitosamente',
                            icon: 'success',
                            confirmButtonColor: '#e0bb66'
                        }).then((result2) => {
                            if(result2.isConfirmed) {
                                location.reload();
                            }
                        })
                    }
                });
                
            }
        })

        console.log(objData);
    })

    /*edita y eliminar*/
    $('.btnEdit').on('click', function(e) {
        var elm = $(this)[0];
        var idDocente = $(elm).data('iddocente');
        const type = 'editar_docente';
        const objData = {
            type: type,
            id: idDocente
        };
        $.post("../controllers/controller_docente.php", objData, function(response) {
            var resp = jQuery.parseJSON(response);
            console.log(resp);
            const template = getTemplate('update_docente', resp);
            $('.principal').hide();
            $('.secondary').html(template);
            $('.secondary').show();
            M.AutoInit();
            M.updateTextFields();
            M.textareaAutoResize($('textarea'));
            $('select').formSelect();
        })
    })

    $('.btnDelete').on('click', function(e) {
        var elm = $(this)[0];
        var idDocente = $(elm).data('iddocente');
        const type = 'eliminar_docente';
        const objData = {
            type: type,
            id: idDocente
        };
        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "Los datos seran Eliminados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B236',
            cancelButtonColor: '#B20018',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                $.post("../controllers/controller_docente.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                            title: resp.MESSAGES,
                            text: 'Los datos se eliminaron Exitosamente',
                            icon: 'success',
                            confirmButtonColor: '#e0bb66'
                        }).then((result2) => {
                            if(result2.isConfirmed) {
                                location.reload();
                            }
                        })
                    }
                });
                
            }
        })
    })

    //function
    function getTemplate(type, resp='') {
        if(type == 'add_docente') {
            var prefix = '<span class="badge badge-pill gradient-3 ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo</span>';
            var lv_instruccion = `
                <select id="lv_instruccion">
                    <option value="N" selected>Seleccionar...</option>
                    <option value="B">Bachiller</option>
                    <option value="U">Estudios Universitarios</option>
                    <option value="P">Post-Grado</option>
                </select>
           `
        } else {
            var prefix = '<span class="badge badge-pill gradient-8 ml-2"><i class="fa fa-pencil" aria-hidden="true"></i> Editar</span>';
            var lv_instruccion = `
                <select id="lv_instruccion">
                    <option value="N" ${resp.DATA.nivel_instruccion == 'N' ? 'selected' : ''}>Seleccionar...</option>
                    <option value="B" ${resp.DATA.nivel_instruccion == 'B' ? 'selected' : ''}>Bachiller</option>
                    <option value="U" ${resp.DATA.nivel_instruccion == 'U' ? 'selected' : ''}>Estudios Universitarios</option>
                    <option value="P" ${resp.DATA.nivel_instruccion == 'P' ? 'selected' : ''}>Post-Grado</option>
                </select>
             `
        }

        const template = `
            <div class="card-body">
                <div class="row">
                    <div class="col-10">
                        <h3>Docentes ${prefix}</h3>
                    </div>
                    <div class="col-2">
                        <div class="button-icon">
                            <button id="btnReturnDocente" type="button" class="btn mb-1" style="color: #fff; background-color: silver;">
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
                        <form id="form">
                            <input id="type" type="hidden" value="${type}" />
                            <input id="idDocente" type="hidden" value="${type == 'add_docente' ? '' : resp.DATA.id}" />
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <input value="${type == 'add_docente' ? '' : resp.DATA.nombre}" id="nombre" type="text" required/>
                                        <label for="nombre">Nombre</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <input value="${type == 'add_docente' ? '' : resp.DATA.apellido}" id="apellido" type="text" required/>
                                        <label for="apellido">Apellido</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <label for="documento">Documento</label>
                                        <input value="${type == 'add_docente' ? '' : resp.DATA.cedula}" id="documento" type="number" required/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <input value="${type == 'add_docente' ? '' : resp.DATA.telf_movil}" id="telefono" type="number" required/>
                                        <label for="telefono">Telefono Móvil</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <input value="${type == 'add_docente' ? '' : resp.DATA.email}" id="email" type="email" required/>
                                        <label for="email">Correo</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        <textarea id="direccion" class="materialize-textarea" required>${type == 'add_docente' ? '' : resp.DATA.direccion}</textarea>
                                        <label for="direccion">Dirección</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group input-field">
                                        ${lv_instruccion}
                                        <label for="lv_instruccion">Nivel de Instruccion</label>
                                    </div>
                                </div>
                            </div>
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

        return template;
    }

})