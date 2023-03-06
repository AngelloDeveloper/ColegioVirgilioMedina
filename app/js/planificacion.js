$(function() {
    const BASE_URL = "../controllers/";
    const CONTROLLER_PRINCIPAL = "controller_planificacion.php";
    initMaterialInput();
    //nueva planificacion
    $('#btNewPlanificacion').on('click', function() {
        var btn = $(this)[0];
        getTemplateMaterias().then((response) => {
            const template = response;
            $('.principal').hide();
            $('.secondary').html(template);
            $('.secondary').show();
            initMaterialInput();
        });
    })

    $(document).on('click', '#btnReturnPlanificacion', function(e) {
        var elm = $(this)[0];
        var seccion_open = $(elm).data('seccion-open');
        var seccion_close = $(elm).data('seccion-close');
        if(seccion_open == 'principal' && seccion_close == 'terciary') {
            $('.secondary').html('');  
        }
        $('.'+seccion_open).show();
        $('.'+seccion_close).html('');
        $('.'+seccion_close).hide();
        initMaterialInput();
    })

    $(document).on('click', '.materias', function(e) {
        var elm = $(this)[0];
        const dataMateriaBanner = {
            id: $(elm).data('materia-id'),
            icon : $(elm).data('materia-icon'), 
            title : $(elm).data('materia-title'),
            descripcion : $(elm).data('materia-descipcion')
        };
        
        var template = getTemplateForms('add_planificacion', resp='', dataMateriaBanner)
        $('.secondary').hide();
        $('.terciary').html(template);
        dinamicNewCardPlanificacion(dataMateriaBanner.id);
        $('.terciary').show();
        initMaterialInput();
    })

    $(document).on('change', '.anio', function(e) {
        var elm = $(this)[0];
        var elmSeccion = $(elm).parent().parent().next().find('.seccion');
        const objData = {
            type: 'secciones',
            id: $(elm).val()
        }
        $.post(BASE_URL+CONTROLLER_PRINCIPAL, objData, function(response) {
            var resp = jQuery.parseJSON(response);
            var template_secciones = '<option value="" disabled selected>Seleccionar...</option>';
            resp.map((item) => {
                template_secciones += `
                    <option value="${item.id}">Sección ${item.seccion}</option>
                `;
            })
            $(elmSeccion).html(template_secciones);
            $(elmSeccion).removeAttr('disabled');
            initMaterialInput();
        })
    })

    $(document).on('submit', '.form-planificacion', function(e) {
        e.preventDefault();
        var elm = $(this)[0];
        var btnAdd = $(elm).find('.btnAdd')[0];
        var thisCard = $(elm).parent()[0];
        var thisColum = $(elm).parent().parent()[0];
        var arrData = $(this).serializeArray(); 
        const objData = formatObj(arrData, {
            type: 'add_planificacion',
            secciones: [],
            actividades: []
        });
        const objStatus = {
            SUCCESS: {
                card: 'gradient-card-success',
                icon: 'icon-card-success'
            },
            ERROR: {
                card: 'gradient-card-error',
                icon: 'icon-card-error'
            },
            VALIDATION: {
                card: 'gradient-card-alert',
                icon: 'icon-card-alert'
            }
        };
        $(btnAdd).attr('disabled', 'disabled');
        $.post(BASE_URL+CONTROLLER_PRINCIPAL, objData, function(response) {
            var resp = jQuery.parseJSON(response);
            M.toast({html: `<span>${resp.MESSAGE} <i class="fa ${resp.ICON}" style="color: ${resp.COLOR_ICON};"></i></span>`});
            var styleCard = objStatus[resp.STATUS]['card'];
            var styleIcon = objStatus[resp.STATUS]['icon'];
            $(thisCard).addClass(styleCard);
            $(thisCard).prepend(`<i class="fa ${resp.ICON} ${styleIcon}"></i>`);
            if(resp.STATUS == 'SUCCESS') {
                setTimeout(() => {
                    $(thisColum).remove();
                },2500);
            }
        })
    })

    $(document).on('click', '.dinamicCard', function(e) {
        var elm = $(this)[0];
        var idMateria = $(elm).data('materia-id');
        var template = templateDinamic(idMateria);
        $(document).find(".contentRow>.col-6:last-child").html(getCardForm('add_planificacion', idMateria));
        $(document).find(".contentRow:last-child").append(template);
        initMaterialInput();
    })

    $(document).on('click', '.btnAddActividad', function(e) {
        var elm = $(this)[0];
        var uid = $(elm).data('uid');
        var inputDinamic = $(document).find('#actividades_'+uid).find('.dinamicInput')[0];
        var porcentaje = $(document).find('#valor_'+uid).val();

        if(porcentaje == '') {
            M.toast({html: `<span>Debe asignar porcentaje a la planificación <i class="fa fa-exclamation-circle" style="color: orange;"></i></span>`});
            $(document).find('#valor_'+uid).focus();
        } else {
            if(inputDinamic == undefined) {
                var btnValidate = $(document).find('.btnValidate_'+uid)[0];
                $(btnValidate).removeAttr('disabled');
            }

            var uidTask = uuid();
            var badge = $(document).find('#badge_'+uid).find('.badge')[0];
            if(badge == undefined) {
                $(document).find('#badge_'+uid).append(`<span class="new badge ml-2" data-badge-caption="${porcentaje+'%'}">Totalice un</span>`);
            } else {
               var valorBadge = $(badge).data('badge-caption');
               if(valorBadge != porcentaje+'%') {
                    $(document).find('#badge_'+uid).html(`<b>Agregar Actividades</b><span class="new badge ml-2" data-badge-caption="${porcentaje+'%'}">Totalice un</span>`);
               }
            }
            
            $(document).find('#actividades_'+uid).append(`
                <div class="col-6 dinamicInput ${uidTask}">
                    <div class="form-group input-field">
                        <textarea id="task${uidTask}_${uid}" name="task" class="materialize-textarea" required></textarea>
                        <label for="task${uidTask}_${uid}" >Descripción</label>
                    </div>
                </div>
                <div class="col-4 dinamicInput ${uidTask}">
                    <div class="form-group input-field">
                        <input class="task_porcentaje" value="" id="task_porcentaje${uidTask}_${uid}" name="task_porcentaje" type="number" required/>
                        <label for="task_porcentaje${uidTask}_${uid}">Porcentaje %</label>
                    </div>
                </div>
                <div class="col-2 ${uidTask}">
                    <button type="button" class="btn btnDelActividad btn-sm mb-1" title="Eliminar" data-uid=${uid} data-uid-task="${uidTask}" style="
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
        }
    })

    $(document).on('click', '.btnDelActividad', function(e) {
        var elm = $(this)[0];
        var uid = $(elm).data('uid');
        var uidDel = $(elm).data('uid-task');
        $(document).find('.'+uidDel).remove();
        var inputDinamic = $(document).find('#actividades_'+uid).find('.dinamicInput')[0];
        if(inputDinamic == undefined) {
            var btnValidate = $(document).find('.btnValidate_'+uid)[0];
            $(btnValidate).attr('disabled', 'disabled');
        }
        validacionPorcentaje(uid);
    })

    $(document).on('click', '.btnValidate', function(e) {
        var elm = $(this)[0];
        var uid = $(elm).data('uid');
        validacionPorcentaje(uid);
    })

    $(document).on('click', '#btnReload', function(e) {
        location.reload();
    })

    //search planificacion
    $('.planificacion_search').on('submit', function(e) {
        e.preventDefault();
        var arrData = $(this).serializeArray();
        const objData = formatObj(arrData, {
            type: 'search_planificacion',
            secciones: []
        });

        spinnerLoad('.materia-'+objData.materia);
        searchPlanificacion(objData)
            .then((template) => {
                setTimeout(() => {
                    $('.materia-'+objData.materia).html(template);
                }, 1500);
            })
    })

    $('#btnClearForm').on('click', function(e) {
        var elm = $(this)[0];
        var elmForm = $(elm).parent().parent().parent().parent()[0];
        var titulo = $(elmForm).find('.planificacion')[0];
        var lapso = $(elmForm).find('.lapso')[0];
        var anio = $(elmForm).find('.anio')[0];
        var seccion = $(elmForm).find('.seccion')[0];
        var materia = $(elm).data('materia');
        var docente = $(elm).data('docente');
        const objData = {
            type: 'search_planificacion', 
            id_materia: materia, 
            id_docente: docente
        };
        $(titulo).val('');
        $(lapso).val('');
        $(anio).val('');
        $(seccion).val('');
        initMaterialInput();
        spinnerLoad('.materia-'+materia);
        searchPlanificacion(objData)
            .then((template) => {
                setTimeout(() => {
                    $('.materia-'+materia).html(template);
                }, 1500);
            })
    })

    //function
    function initMaterialInput() {
        M.AutoInit();
        M.updateTextFields();
        M.FormSelect.init($('select'));
        M.Collapsible.init($('.collapsible'));
    }

    function limitar_cadena(cadena, limite, sufijo){
        if(cadena.length > limite){
            return cadena.substr(0, limite) + sufijo;
        }
    
        return cadena;
    }

    function spinnerLoad(elm) {
        var spinnerLoad = `
            <div class="col-12">
                <center style="margin-top: 12em;">    
                    <div class="preloader-wrapper active">
                        <div class="spinner-layer spinner-green-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                        </div>
                    </div>
                    <p>Buscando...</p>
                </center>
            </div>
        `;
        $(elm).html(spinnerLoad);
    }

    function searchPlanificacion(objData) {
        const Deferred = $.Deferred();
        $.post(BASE_URL+CONTROLLER_PRINCIPAL, objData, function(response) {
            var resp = jQuery.parseJSON(response);
            var data = resp.DATA;
            var template = '';
            if(resp.STATUS == 'SUCCESS') {
                $(data).each((index, value) => {
                    template += `
                        <div class="col-3">
                            <div class="card gradient-8">
                                <div class="card-body">
                                    <h4 class="text-white">${limitar_cadena(value.titulo, 18, "...").toUpperCase()}</h4>
                                    <div class="d-inline-block">
                                        <h2 class="text-white">${value.porcentaje+'%'}</h2>
                                        <p class="text-white mb-0">${limitar_cadena(value.descripcion, 21, "...").toLowerCase()}</p>
                                    </div>
                                    <span class="float-right display-5">
                                        <center>
                                            <button class="btn btn-sm btn-primary btnEdit" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Editar">
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                            <button class="btn btn-sm btn-danger btnDelete" data-toggle="tooltip" data-placement="top" data-iddocente="10" title="" data-original-title="Eliminar">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </center>
                                    </span>
                                </div>
                            </div>
                        </div>  
                    `;
                })
                Deferred.resolve(template);
            } else {
                template = ` 
                    <div class="col-12">
                        <center style="margin-top: 10em;">  
                            <div class="card">
                                <div class="card-body">
                                    <p class="text-center" style="margin-bottom: 0px; font-size: 14px;">
                                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    </p>
                                    <p class="text-center"><b>no se encontraron resultados</b></p>
                                </div>
                            </div>
                        </center>
                    </div>
                `;
                Deferred.resolve(template);
            }
        })

        return Deferred.promise();
    }

    function formatObj(arr, objData) {
        var actividad = '';
        $(arr).each(function(index, value) {
            switch (value.name) {
                case 'seccion':
                    objData.secciones.push(value.value);
                break;
                case 'task':
                    actividad = value.value;
                break;
                case 'task_porcentaje':
                    objData.actividades.push({actividad: actividad, porcentaje: value.value});
                break;
                case 'valor':
                    objData['porcentaje'] = value.value;
                break;
                default:
                    objData[value.name] = value.value;
                break;
            }   
        }) 

        return objData;
    }

    function getTemplateForms(type, resp='', banner) {
        if(type == 'add_planificacion') {
            var prefix = '<span class="badge badge-pill gradient-3 ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo</span>';
        } else {
            var prefix = '<span class="badge badge-pill gradient-8 ml-2"><i class="fa fa-pencil" aria-hidden="true"></i> Editar</span>';
        }

        const template_forms = `
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <h3>Planificación ${prefix}</h3>
                    </div>
                    <div class="col-4">
                        <div class="button-icon">
                            <button 
                                data-seccion-open="secondary" 
                                data-seccion-close="terciary" 
                                id="btnReturnPlanificacion" 
                                type="button" 
                                class="btn mb-1 mr-2" 
                                style="color: #fff; background-color: silver;"
                            >
                                Volver
                                <span class="btn-icon-right">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                </span>
                            </button>
                            <button 
                                id="btnReload"
                                type="button" 
                                class="btn mb-1" 
                                style="color: #fff; background-color: #5c4ab8fc;"
                            >
                                Listar Planificaciones
                                <span class="btn-icon-right">
                                    <i class="fa fa-list" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row pl-2">
                    <div class="card gradient-materias" style="width: 100%;">
                        <div class="card-body">
                            <div class="d-inline-block">
                                <img class="img-icons-baner ml-4 mr-2" src="../assets/img/materias/icons/${banner.icon}">
                                <div style="display: inline-block;">
                                    <span class="titleMateria">${banner.title}</span>
                                    <p class="mb-0">${banner.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row contentRow p-4">
                    <div class="col-6">
                        ${getCardForm(type, banner.id)}
                    </div>
                </div>
            </div>
        `;

        return template_forms;
    }

    function getCardForm(type, idMateria) {
        //selects
        var uid = uuid();
        var select_lapsos = '';
        var select_grados = '';
        $.each(Lapsos, function(index, value) {
            select_lapsos += `
                <option value="${value['id']}">${value['formato']} lapso</option>
            `;
        });
        $.each(Grados, function(index, value) {
            select_grados += `
                <option value="${value['id']}">${value['formato']} año</option>
            `;
        })

        const template = `
            <input id="type" type="hidden" value="${type}" />
            <input id="idPlanificacion" type="hidden" value="" />
            <div class="card cardCustom">
                <form class="form-planificacion" autocomplete="off">
                    <div class="card-body">
                        <input type="hidden" name="materia" value="${idMateria}" />
                        <div class="row">
                            <div class="col-4">
                                <select id="lapso_${uid}" name="lapso">
                                    ${select_lapsos}
                                </select>
                                <label for="lapso_${uid}">Lapso</label>
                            </div>
                            <div class="col-4">
                                <select id="anio_${uid}" class="anio" name="anio">
                                    <option value="" disabled selected>Seleccionar...</option>
                                    ${select_grados}
                                </select>
                                <label for="anio_${uid}">Año</label>
                            </div>
                            <div class="col-4">
                                <select multiple id="seccion_${uid}" class="seccion" name="seccion" disabled>
                                    <option value="" disabled selected>Seleccionar...</option>
                                </select>
                                <label for="seccion_${uid}">Seccion</label>
                            </div>
                            <div class="col-6">
                                <div class="form-group input-field">
                                    <input value="" id="titulo_${uid}" name="titulo" type="text" required/>
                                    <label for="titulo_${uid}">Titulo</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group input-field">
                                    <textarea id="descripcion_${uid}" name="descripcion" class="materialize-textarea" required></textarea>
                                    <label for="descripcion_${uid}" >Descripción</label>
                                </div>
                            </div>
                            <hr />
                            <div class="col-3">
                                <div class="form-group input-field">
                                    <input value="" id="valor_${uid}" name="valor" type="number" required/>
                                    <label for="valor_${uid}">Porcentaje %</label>
                                </div>
                            </div>
                            
                            <div class="col-9">
                                <ul class="collapsible popout collapse_${uid}">
                                    <li>
                                        <div class="collapsible-header">
                                            <i class="fa fa-tasks" aria-hidden="true"></i>
                                            <span>Actividades</span>
                                        </div>
                                        <div class="collapsible-body">
                                            <div id="actividades_${uid}" class="row">
                                                <div class="col-12">
                                                    <span id="badge_${uid}" style="font-size: 14px;">
                                                        <b>Agregar Actividades</b>
                                                    </span>
                                                    <button 
                                                        type="button" 
                                                        class="btn btnAddActividad btn-sm mb-1" 
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
                                                            Validar
                                                            <span class="btn-icon-right">
                                                                <i class="fa fa-retweet" aria-hidden="true"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div class="button-icon" style="float: right;">
                            <button disabled type="submit" class="btn btn-sm mb-1 btnAdd btnAdd_${uid}" style="color: #fff; background-color: #00B236;">
                                Guardar
                                <span class="btn-icon-right">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        `;

        return template;
    }


    function getTemplateMaterias() {
        var deferred = $.Deferred();
        var prefix = '<span class="badge badge-pill gradient-3 ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo</span>';
        $.post(BASE_URL+CONTROLLER_PRINCIPAL, {type: 'materias'}, function(response) {
            var resp = jQuery.parseJSON(response);
            var materias = '';
            resp.map((materia) => {
                materias += `
                    <div class="col-3">
                        <div class="card cardHeight">
                            <div class="card-image card-images-height gradient-materias">
                                <center>
                                    <img class="img-icons" src="../assets/img/materias/icons/${materia.icon}">
                                </center>
                                <a title="Agregar Planificacion" 
                                    class="materias btn-floating halfway-fab waves-effect waves-light green"
                                    data-materia-id="${materia.id}"
                                    data-materia-icon="${materia.icon}"
                                    data-materia-title="${materia.materia}"
                                    data-materia-descipcion="${materia.descripcion}"
                                >
                                    <i class="fa fa-plus"></i>
                                </a>
                            </div>
                            <div class="card-content">
                                <span class="card-title titleMateria">${materia.materia}</span>
                                <p>${materia.descripcion}</p>
                            </div>
                        </div>
                    </div>
                `;
            })
            const template_materias = `
                <div class="card-body">
                    <div class="row">
                        <div class="col-10">
                            <h3>Planificación ${prefix}</h3>
                        </div>
                        <div class="col-2">
                            <div class="button-icon">
                                <button data-seccion-open="principal" data-seccion-close="secondary" id="btnReturnPlanificacion" type="button" class="btn mb-1" style="color: #fff; background-color: silver;">
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
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-warning" role="alert">
                                        Seleccione una Materia para agregar la Planificación.
                                    </div>
                                </div>
                                ${materias}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            deferred.resolve(template_materias); 
        });

        return deferred.promise();
    }

    function templateDinamic(materia) {
        const template = `
            <div class="col-6">
                <div data-materia-id="${materia}" class="card dinamicCard gradient-moreForm">
                    <div class="card-body">
                        <center>
                            <span class="centerPlus">
                                <i class="fa fa-plus"></i>
                                <p>Agregar Planificación</p>
                            </span>
                        </center>
                    </div>
                </div>
            </div>
        `;

        return template;
    }

    function dinamicNewCardPlanificacion(materia) {
        var template = templateDinamic(materia);
        $(document).find('.contentRow').append(template);
    }

    function uuid() {
        var result='';
        for(var i=0; i<32; i++)
        result += Math.floor(Math.random()*16).toString(16).toUpperCase();
        return result;
    }

    function validacionPorcentaje(uid) {
        var porcentaje = $(document).find('#valor_'+uid);
        var objTaskPorcentaje = $(document).find('#actividades_'+uid).find('.task_porcentaje');
        var collapse = $(document).find('.collapse_'+uid)[0];
        var btnAdd = $(document).find('.btnAdd_'+uid)[0];
        var totalPorcentaje = 0;
        $(objTaskPorcentaje).each((index, value) => {
            totalPorcentaje = totalPorcentaje + parseInt($(value).val());
        })
        if($(porcentaje).val() == totalPorcentaje) {
            M.toast({html: `<span>Los valores Indicados fueron validados correctamente <i class="fa fa-check" style="color: #00B236;"></i></span>`});
            setTimeout(() => {
                var instance = M.Collapsible.getInstance(collapse);
                instance.close();
                $(btnAdd).removeAttr('disabled');
            }, 800);
        } else {
            M.toast({html: `<span>Los valores Indicados no conciden con el ${$(porcentaje).val()}% asignado <i class="fa fa-exclamation-circle" style="color: orange;"></i></span>`});
            $(btnAdd).attr('disabled', 'disabled');
        }
    }
   
})