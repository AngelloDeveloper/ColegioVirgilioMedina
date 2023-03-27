$(function() {


    //state
    var state = {
        datosDocente: {},
        asignarSecciones: {},
        asignarMaterias: {}
    };

    $('#btNewDocente').on('click', function(e) {
        var btn = $(this)[0];
        const type = 'add_docente';
        const template = getTemplate(type);
        $('.principal').hide();
        $('.secondary').html(template);
        $('.secondary').show();
        initMaterialInput();
    });

    $(document).on('click', '#btnReturnDocente' ,function(e) {
        $('.principal').show();
        $('.secondary').html('');
        $('.secondary').hide();
        initMaterialInput();
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
    $('.config_docente').on('click', function(e) {
        var elm = $(this)[0];
        var idDocente = $(elm).data('iddocente');
        const objData = {
            type: 'configurar_docente',
            id: idDocente
        };
        $('#docenteid').val(idDocente);

        getDocenteData(objData)
            .then((response) => $.parseJSON(response))
            .then((objData) => {
                setState(objData);
                const template = getTemplate('update_docente');
                $('.principal').hide();
                $('.secondary').html(template);
                $('.secondary').show();
                initMaterialInput();
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

    $(document).on('click', '.btnAddAnioSeccion', function (e) {
        var elm = $(this)[0];
        var uid = $(elm).data('uid');
        var uidConfig = uuid();
        var temp_anios = '';
        arrGrados.map((elm) => {
            temp_anios += `<option value="${elm.id}">${elm.formato + 'Año'}</option>`
        })

        $(document).find('#anioSeccion_'+uid).append(`
            <div class="col-5 ${uidConfig}">
                <div class="form-group input-field">
                    <select id="anio">
                        ${temp_anios}
                    </select>
                    <label>Años</label>
                </div>
            </div>
            <div class="col-5 ${uidConfig}">
                <div class="form-group input-field">
                    <select multiple id="seccion">
                        ${temp_secciones}
                    </select>
                    <label>Secciones</label>
                </div>
            </div>
            <div class="col-2 ${uidConfig}">
                <button type="button" 
                    class="btn btnDelActividad btn-sm mb-1" 
                    title="Eliminar" 
                    data-uid=${uid} 
                    data-uid-task="${uidConfig}" 
                    style="
                        color: #fff;
                        background-color: #e92d59fc;
                        border-radius: 100%;
                        margin-top: 25px !important;
                        height: 28px;
                        float: right;">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
            </div>
        `);

        initMaterialInput();
            
    })

    $(document).on('click', '.btnDelActividad', function(e) {
        var elm = $(this)[0];
        var uidDel = $(elm).data('uid-task');
        $(document).find('.'+uidDel).remove();
    })

    $(document).on('click', '.switchMateria', function(e) {
        var uid = uuid();
        var elm = $(this)[0];
        var inputCheck = $(elm).find('.asignacion')[0];
        var checked = $(inputCheck).prop('checked');
        var idMateria = $(inputCheck).data('idmateria');
        var template = checked == true 
            ? `
                <ul class="collapsible popout collapse_${uid}">
                    <li>
                        <div class="collapsible-header">
                            <i class="fa fa-tasks" aria-hidden="true"></i>
                            <span>Configuración</span>
                        </div>
                        <div class="collapsible-body">
                            <div id="anioSeccion_${uid}" class="row">
                                <div class="col-12">
                                    <span id="badge_${uid}" style="font-size: 14px;">
                                        <b>Nuevo (Año/Seccion)</b>
                                    </span>
                                    <button 
                                        type="button" 
                                        class="btn btnAddAnioSeccion btn-sm mb-1" 
                                        title="Agregar"
                                        data-uid="${uid}"
                                        style="
                                            color: #fff;
                                            background-image: linear-gradient(230deg, #ffc480, #ff763b);
                                            border-radius: 100%;
                                            height: 28px;
                                            float: right;"
                                    >
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                    <hr />
                                </div>
                            </div>
                            <div class="row validate_${uid}">
                                <div class="col-12">
                                    <div class="button-icon" style="float: right;">
                                        <button disabled 
                                            type="button" 
                                            class="btn btn-sm mb-1 btnValidate btnValidate_${uid}" 
                                            style="color: #fff; background-color: #5c4ab8fc;"
                                            data-uid="${uid}"
                                        >
                                            Confirmar
                                            <span class="btn-icon-right">
                                                <i class="fa fa-retweet" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>` 
            : '';

        $(document).find('.configMateria' + idMateria).html(template);    
        initMaterialInput();
    })

    $(document).on('click', '.btnAsigancionSeccion', function(e) {
        var arrInputsCheck = $(document).find('.asignacionSeccion');
        const arrAsignacion = {active: [], inactive: []};
        $(arrInputsCheck).each((index, value) => {
            var checked = $(value).prop('checked');
            if(checked == true) {
                arrAsignacion['active'].push({id: $(value).data('idseccion')});
            } else {
                arrAsignacion['inactive'].push({id: $(value).data('idseccion')});
            }
        })

        const objData = {
            type: 'asigacion_seccion',
            idDocente: $('#docenteid').val(),
            data: arrAsignacion
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
            if(result.isConfirmed) {
                $.post("../controllers/controller_docente.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    console.log(resp);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                            title: resp.MESSAGES,
                            icon: 'success',
                            confirmButtonColor: '#e0bb66'
                        })
                    }
                });
            }
        })
    })

    $(document).on('click', '.btnAsigancionMateria', function(e) {
        var arrInputsCheck = $(document).find('.asignacion');
        const arrAsignacion = [];
        
        $(arrInputsCheck).each((index, value) => {
            var checked = $(value).prop('checked');
            if(checked == true) {
                arrAsignacion.push($(value).data('idmateria')) ; 
            }
        })

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
            if(result.isConfirmed) {
                $.post("../controllers/controller_registro.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire({
                                title: resp.MESSAGES,
                                text: 'Los datos seran procesados, el usuario sera habilitado una vez se formalice la inscripción',
                                icon: 'success',
                                confirmButtonColor: '#e0bb66'
                        }).then((result2) => {
                            if(result2.isConfirmed) {
                                window.location.replace('http://localhost/ColegioVirgilioMedina/auth/login.php');
                            }
                        })
                    }
                });
            }
        })
    })

    //function
    function initMaterialInput() {
        M.AutoInit();
        M.updateTextFields();
        M.FormSelect.init($('select'));
        M.Collapsible.init($('.collapsible'));
        M.Tabs.init($(document).find('.tabs'));
    }

    const getDocenteData = async (objData) => {
        result = await $.post("../controllers/controller_docente.php", objData, function(response) {
            var resp = jQuery.parseJSON(response);
            return resp;
        })

        return await result;
    }

    function setState(obj) {
        console.log(obj);
        state.datosDocente = obj.DATA.getDocente;
        state.asignarSecciones = obj.DATA.getDocenteSecciones;
    }

    function getTemplate(type, resp='') {
        var template = '';
        switch (type) {
            case 'add_docente':
                var prefix = '<span class="badge badge-pill gradient-3 ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo</span>';
                    var lv_instruccion = `
                        <select id="lv_instruccion">
                            <option value="N" selected>Seleccionar...</option>
                            <option value="B">Bachiller</option>
                            <option value="U">Estudios Universitarios</option>
                            <option value="P">Post-Grado</option>
                        </select>
                `;
                template = `
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
            break;
            case 'update_docente':
                var templateMaterias = '';
                var templateSecciones = '';
                var prefix = '<span class="badge badge-pill gradient-8 ml-2"><i class="fa fa-pencil" aria-hidden="true"></i> Editar y Configurar</span>';
                var lv_instruccion = `
                    <select id="lv_instruccion">
                        <option value="N" ${state.datosDocente.nivel_instruccion == 'N' ? 'selected' : ''}>Seleccionar...</option>
                        <option value="B" ${state.datosDocente.nivel_instruccion == 'B' ? 'selected' : ''}>Bachiller</option>
                        <option value="U" ${state.datosDocente.nivel_instruccion == 'U' ? 'selected' : ''}>Estudios Universitarios</option>
                        <option value="P" ${state.datosDocente.nivel_instruccion == 'P' ? 'selected' : ''}>Post-Grado</option>
                    </select>
                `;
                
                $(arrMaterias).each((index, value) => {
                    templateMaterias += `
                        <div class="col-6">
                            <div class="card gradient-materias bannerList bannerList_radius" style="width: 100%;">
                                <div class="card-body bannersList_padding">
                                    <div class="row mb-2">
                                        <div class="col-12">
                                            <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/materias/icons/${value.icon}">
                                            <div style="display: inline-block;">
                                                <span class="titleMateriaList">${value.materia}</span>
                                                <p class="mb-0">${value.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <center>
                                                <div class="switch switchMateria">
                                                    <label>
                                                        <input data-idmateria="${value.id}" type="checkbox" class="asignacion" />
                                                        <span class="lever"></span>
                                                    </label>
                                                </div>
                                            </center>
                                        </div>
                                        <div class="col-9 ${'configMateria' + value.id}">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                })
                
                $(arrSecciones).each((index, value) => {
                    var checked = '';
                    var seccion = '';
                    if(state.asignarSecciones != null) {
                        seccion = state.asignarSecciones.find((elm) => elm.id_seccion == value.id);
                        console.log('prueba');
                        console.log(seccion);
                        if(seccion != undefined) {
                            checked = seccion.estatus == 'Y' ? 'checked' : '';
                        } else {
                            checked = '';
                        }                        
                    } else {
                        checked = '';
                    }
                    
                    templateSecciones += `
                        <div class="col-6">
                            <div class="card gradient-materias bannerList bannerList_radius" style="width: 100%;">
                                <div class="card-body bannersList_padding">
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-icons-listPlanificacion ml-4 mr-2" src="../assets/img/materias/icons/desk.png">
                                            <h2 style="display: inline-block;
                                                font-size: 50px;
                                                color: green;
                                                position: absolute;
                                            ">${value.seccion}</h2>
                                        </div>
                                        <div class="col-6">
                                            <div class="switch" style="margin-top: 20px; float: right;">
                                                <label>
                                                    <input data-idseccion="${value.id}" type="checkbox" class="asignacionSeccion" ${checked} />
                                                    <span class="lever"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                })

                template = `
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
                        <div class="row">
                            <div class="col s12">
                                <div class="card">
                                    <div class="card-body">
                                        <ul class="tabs">
                                            <li class="tab col s3"><a href="#DatosDocente">Datos del Docente</a></li>
                                            <li class="tab col s3"><a href="#AsignarSecciones" >Asignar Secciones</a></li>
                                            <li class="tab col s3"><a href="#AsignarMaterias" >Asignar Materias</a></li>
                                            <li class="tab col s3"><a href="#permisos">Permisos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row p-4">
                            <div id="DatosDocente" class="col s12">
                                <div class="col-6 pt-4">
                                    <form id="form">
                                        <input id="type" type="hidden" value="${type}" />
                                        <input id="idDocente" type="hidden" value="${type == 'add_docente' ? '' : state.datosDocente.id}" />
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <input value="${type == 'add_docente' ? '' : state.datosDocente.nombre}" id="nombre" type="text" required/>
                                                    <label for="nombre">Nombre</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <input value="${type == 'add_docente' ? '' : state.datosDocente.apellido}" id="apellido" type="text" required/>
                                                    <label for="apellido">Apellido</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <label for="documento">Documento</label>
                                                    <input value="${type == 'add_docente' ? '' : state.datosDocente.cedula}" id="documento" type="number" required/>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <input value="${type == 'add_docente' ? '' : state.datosDocente.telf_movil}" id="telefono" type="number" required/>
                                                    <label for="telefono">Telefono Móvil</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <input value="${type == 'add_docente' ? '' : state.datosDocente.email}" id="email" type="email" required/>
                                                    <label for="email">Correo</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group input-field">
                                                    <textarea id="direccion" class="materialize-textarea" required>${type == 'add_docente' ? '' : state.datosDocente.direccion}</textarea>
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
                                                <div class="button-icon" style="float: right;">
                                                    <button type="submit" class="btn mb-1" style="color: #fff; background-color: #00B236;">
                                                        Guardar
                                                        <span class="btn-icon-right">
                                                            <i class="fa fa-check" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="AsignarSecciones" class="col s12">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="alert alert-warning" role="alert">
                                            Asignar secciones al Docente.
                                        </div>
                                    </div>
                                    ${templateSecciones}
                                    <div class="col-12">
                                        <br /><br /><hr />
                                        <div class="button-icon" style="float: right;">
                                            <button type="button" class="btnAsigancionSeccion btn mb-1" style="color: #fff; background-color: #00B236;">
                                                Guardar
                                                <span class="btn-icon-right">
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="AsignarMaterias" class="col s12">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="alert alert-warning" role="alert">
                                            Asignar Materias al Docente.
                                        </div>
                                    </div>
                                    ${templateMaterias}
                                    
                                    <div class="col-12">
                                        <br /><br /><hr />
                                        <div class="button-icon" style="float: right;">
                                            <button type="button" class="btnAsigancionMateria btn mb-1" style="color: #fff; background-color: #00B236;">
                                                Guardar
                                                <span class="btn-icon-right">
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="permisos" class="col s12">
                                <div class="card">
                                    <div class="card-body"><b><h3>Modulo en DESARROLLO</h3></b></div>
                                <div>
                            </div>
                        </div>
                    </div>
                `;
            break;
        }


        return template;
    }

})