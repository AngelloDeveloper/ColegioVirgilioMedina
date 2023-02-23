$(function() {
    const BASE_URL = "../controllers/";
    const CONTROLLER_PRINCIPAL = "controller_planificacion.php";
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
        var arrData = $(this).serializeArray(); 
        const objData = formatObj(arrData);

        $.post(BASE_URL+CONTROLLER_PRINCIPAL, objData, function(response) {
            var resp = jQuery.parseJSON(response);
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

    //function
    function initMaterialInput() {
        M.AutoInit();
        M.updateTextFields();
        M.FormSelect.init($('select'));
    }

    function formatObj(arr) {
        var objData = {
            type: 'add_planificacion',
            lapso: '',
            anio: '',
            secciones: [],
            titulo: '',
            descripcion: '',
            materia: ''
        };

        $(arr).each(function(index, value) {
            if(value.name == 'seccion') {
                objData.secciones.push(value.value);
            } else {
                objData[value.name] = value.value;
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
                    <div class="col-10">
                        <h3>Planificación ${prefix}</h3>
                    </div>
                    <div class="col-2">
                        <div class="button-icon">
                            <button data-seccion-open="secondary" data-seccion-close="terciary" id="btnReturnPlanificacion" type="button" class="btn mb-1" style="color: #fff; background-color: silver;">
                                Volver
                                <span class="btn-icon-right">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
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
            <div class="card">
                <div class="card-body">
                    <form class="form-planificacion">
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
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="button-icon" style="float: right;">
                                    <button type="submit" class="btn btn-sm mb-1" style="color: #fff; background-color: #00B236;">
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
   
})