$(function() {
    init();
    const formData = new FormData();
    const objData = {
        'estudiante' : {},
        'detalle_estudiante' : {},
        'madre' : {},
        'padre' : {},
        'representante' : {},
        'turn' : '',
        'grado' : '',
        'seccion':'',
        'type' : 'setPreRegistro'
    }

    let turn;

    var template_estados = generateTemplate_estados();
    var template_religion = generateTemplate_religion();
    var template_codigos = generateTemplate_codigos();
    var template_latam = generateTemplate_latam();
    //var template_secciones = generateTemplate_secciones();
    
    const arrFormularios = {
        formulario1: {
            title : 'Datos del Estudiante',
            form: `
                <form id="form1" enctype="multipart/form-data">
                    <div class="container p-4">
                        <span id="alerta_form"></span>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_estudiante" type="text" class="form-control verificationData" data-datatype="text" required/>
                                    <label for="nombre_estudiante">Nombres <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_estudiante" type="text" class="form-control verificationData" data-datatype="text" required/>
                                    <label for="apellido_estudiante">Apellidos <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group formBox">
                                    ${template_uploadPhotograpy('foto-estudiante')}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="input-field">
                                    <select id="tipo_documento_estudiante">
                                        <option value="V">V- (Venezoláno)</option>
                                        <option value="E">E- (Extrangéro)</option>
                                        <option value="CE">CE- (Cédula Escolar)</option>
                                    </select>
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="documento_estudiante" type="text" class="form-control verificationData" data-datatype="num" required/>
                                    <label for="documento_estudiante">Documento de Identidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field" style="margin-top: 0;">
                                    <p style="display: inline; color: #9e9e9e;">fecha de nacimiento <span style="color: #960032;"><b>*</b></span></p>
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="fecha_nacimiento_estudiante" type="text" required disabled />
                                        </div>
                                        <div class="col-4">
                                            <button type="button" class="btn btn-primary ml-2 datepicker" data-actor="estudiante">
                                                <i class="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_estudiante" type="number" class="form-control" required disabled/>
                                    <label for="edad_estudiante">Edad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_estudiante">
                                        <option value="">--Selecciona Nacionalidad--</option>
                                        ${template_latam}
                                    </select>
                                    <label for="nacionalidad_estudiante">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="email_estudiante" type="email" class="form-control verificationData" data-datatype="email" required/>
                                    <label for="email_estudiante">Correo Electrónico <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="direccion_estudiante" type="text" class="materialize-textarea" required /></textarea>
                                    <label for="direccion_estudiante">Dirección de Residencia <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="punto_referencia_estudiante" type="text" class="materialize-textarea" required /></textarea>
                                    <label for="punto_referencia_estudiante">Punto de referencia <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="card" style="width: 65%;">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <span style="color: #960032;"><b>Origen</b></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="form-group input-field">
                                                <textarea id="lugar_nacimiento_estudiante" type="text" class="materialize-textarea" required/></textarea>
                                                <label for="lugar_nacimiento_estudiante">Lugar de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group input-field">
                                                <select id="estado_estudiante">
                                                    <option value="">--Selecciona un Estado--</option>
                                                    ${template_estados}
                                                </select>
                                                <label for="estado_estudiante">Estado <span style="color: #960032;"><b>*</b></span></label>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group input-field">
                                                <select id="municipio_estudiante">
                                                    <option value=""></option>
                                                </select>
                                                <label for="municipio_estudiante">Municipio <span style="color: #960032;"><b>*</b></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="form-group input-field">
                                            <select id="cod_phone_numbre_estudiante">
                                                <option value="">--Selecciona Codigo--</option>
                                                ${template_codigos}
                                            </select>
                                            <label for="cod_phone_numbre_estudiante">Codigo País <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="form-group input-field">
                                            <input id="telefono_movil_estudiante" class="form-control verificationData" data-datatype="telf_movil" type="number" required/>
                                            <label for="telefono_movil_estudiante">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_estudiante" class="form-control verificationData" data-datatype="num" type="number" required/>
                                    <label for="telefono_residencial_estudiante">Telefono Residencial <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="habilidades_estudiante" type="text" class="form-control  verificationData" data-datatype="text" required/>
                                    <label for="habilidades_estudiante">Habilidades <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div> 
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="religion_estudiante">
                                        <option value="">--Selecciona una Religíon--</option>
                                        ${template_religion}
                                    </select>
                                    <label for="religion_estudiante">Religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div> 
                            <div class="col-4">
                                <div id="religion_estudiante_otro_container" style="display:none" class="form-group input-field">
                                    <input id="otra_religion_estudiante" type="text" class="form-control verificationData" data-datatype="text" />
                                    <label for="otra_religion_estudiante">Mencione religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div> 
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <label>Genero <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <span>
                                        <label>
                                            <input id="masculino_estudiante" name="genero" checked="checked" class="with-gap"  type="radio"  /> 
                                            <span for="masculino_estudiante">Masculino</span>
                                            <div for="masculino_estudiante"><img class="ml-4" style="width: 80px; cursor:pointer;" src="../assets/img/pre-registro/estudiante-masculino.png" /></div>
                                        </label>
                                    </span>
                                    <span>
                                        <label>
                                            <input id="femenino_estudiante" name="genero" type="radio" class="with-gap"  class="radio ml-4" />
                                            <span for="femenino_estudiante">Femenino</span>
                                            <div for="femenino_estudiante" ><img class="ml-4" style="width: 80px; cursor:pointer;" src="../assets/img/pre-registro/estudiante-femenina.png" /></div>
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div class="col-4">
                                <label>Lateralidad <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <span>
                                        <label>
                                            <input id="diestro_estudiante" name="lateralidad" checked="checked" class="with-gap"  type="radio"  /> 
                                            <span>Derecho</span>
                                            <div id="mano-derecha"><img style="width: 80px; cursor:pointer;" src="../assets/img/pre-registro/mano.png" /></div>
                                        </label>
                                    </span>
                                    <span>
                                        <label>
                                            <input id="zurdo_estudiante" name="lateralidad" type="radio" class="with-gap"  class="radio ml-4" />
                                            <span>Izquierdo</span>
                                            <div id="mano-izquierda"><img style="width: 80px; transform: scaleX(-1); cursor:pointer;" src="../assets/img/pre-registro/mano.png" /></div>
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="tallaCamisa_estudiante">
                                        <option value="N">Seleccionar...</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="U">U</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XL">XXL</option>
                                    </select>
                                    <label for="tallaCamisa_estudiante">Talla de Camisa <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="tallaPatalon_estudiante">
                                        <option value="">Seleccionar...</option>
                                        <option value="12">12</option>
                                        <option value="14">14</option>
                                        <option value="16">16</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                    <label for="tallaPatalon_estudiante">Talla de Pantalon <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="estatura_estudiante" type="text" class="form-control verificationData" data-datatype="mts" required />
                                    <label for="estatura_estudiante">Estatura (Mts) <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="peso_estudiante" type="number" class="form-control verificationData" data-datatype="kgs" required/>
                                    <label for="peso_estudiante">Peso (Kg) <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="grupoSanguineo_estudiante" >
                                        <option value="N">Seleccionar...</option>
                                        <option value="A+">A+</option>
                                        <option value="O+">O+</option>
                                        <option value="B+">B+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="A-">A-</option>
                                        <option value="O-">O-</option>
                                        <option value="B-">B-</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    <label for="grupoSanguineo_estudiante">Grupo Sanguineo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Posee Informe Médico ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="informeMedico" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_swicth_posee_informe_medico" style="display: none">
                                    <div class="form-group">
                                        <center>
                                            <label>¿ Cuenta con el informe en digital ?</label>
                                            <div>
                                                <div class="switch">
                                                    <label>
                                                    No
                                                    <input type="checkbox" id="informeMedico_digital" />
                                                    <span class="lever"></span>
                                                    Si
                                                    </label>
                                                </div>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_informe_medico_message" style="display: none">
                                    <div class="alert alert-warning" role="alert">
                                        Por favor llevar el documento en fisico a la institución al momento de formalizar la inscripción
                                    </div>
                                </div>
                                <div id="content_informe_medico" style="display: none">
                                    <label>Adjuntar Informe <span style="color: #960032;"><b>*</b></span></label>
                                    <div class="file-field input-field pt-2">
                                        <div class="btn materialcustom">
                                            <span>Adjuntar</span>
                                            <input id="testFile" type="file" multiple>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input id="informeMedicoDocumento" class="file-path verificationFiles" data-datatype="pdf" type="text" placeholder="Adjuntar Documento">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Posee alguna discapacidad ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="discapacidad" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_discapacidad" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="discapacidadDescripcion" type="text" class="materialize-textarea" /></textarea>
                                        <label for="discapacidadDescripcion">Indique cual</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Es Alergico ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="alergico" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_alergico" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="alergicoDescripcion" type="text" class="materialize-textarea" ></textarea>
                                        <label for="alergicoDescripcion">¿ a que ?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Padece alguna enfermedad ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="enfermedad" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_enfermedad" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="enfermedadDescripcion" type="text" class="materialize-textarea"></textarea>
                                        <label for="enfermedadDescripcion">¿ indique enfermedad ?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Consume Medicamentos ?</label>
                                        <div class="switch">
                                            <label>
                                            No
                                            <input type="checkbox" id="medicamentos" />
                                            <span class="lever"></span>
                                            Si
                                            </label>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_medicamentos" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="medicamentosDescripcion" class="materialize-textarea"></textarea>
                                        <label for="medicamentosDescripcion">Mencionelos</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Ha convulsionado ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="convulsion" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>

                            <div class="col-4">
                                <div id="content_convulsion" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="convulsionDescripcion" type="text" class="materialize-textarea"></textarea>
                                        <label for="convulsionDescripcion">Observaciones</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Algun familiar dentro del colegio ?</label>
                                        <div>
                                            <div class="switch">
                                                <label>
                                                No
                                                <input type="checkbox" id="familiar_colegio" />
                                                <span class="lever"></span>
                                                Si
                                                </label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-2">
                                <div id="content_familiar_colegio" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="familiar_colegioNombre" type="text" class="materialize-textarea"></textarea>
                                        <label for="familiar_colegioNombre">Nombre</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div id="content_familiar_colegio2" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <select id="familiar_colegioParentesco">
                                            <option value="Padre">Padre</option>
                                            <option value="Madre">Madre</option>
                                            <option value="Abuelo">Abuelo(a)</option>
                                            <option value="Hermano">Hermano(a)</option>
                                            <option value="Primo">Primo(a)</option>
                                            <option value="Tio">Tio(a)</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                        <label for="familiar_colegioParentesco">Parentesco</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div id="content_familiar_colegio3" style="display:none" class="form-group">
                                    <div class="form-group input-field">
                                        <textarea id="familiar_colegioDescripcion" class="materialize-textarea"></textarea>
                                        <label for="familiar_colegioDescripcion">Especifíque</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-8">
                                <div class="form-group pt-5">
                                    <center>
                                        <button class="btn btnform">Siguiente</button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div> 
                </form>
            `
        },
        formulario2: {
            title : 'Datos Familiares (Madre)',
            form: `
                <form id="form2">
                    <div class="container p-4">
                        <span id="alerta_form"></span>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_madre" type="text" class="form-control verificationData" data-datatype="text" required />
                                    <label for="nombre_madre">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_madre" type="text" class="form-control verificationData" data-datatype="text" required />
                                    <label for="apellido_madre">Apellido <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group formBox">
                                    ${template_uploadPhotograpy('foto-madre')}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="tipo_documento_madre">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="documento_madre" type="text" class="form-control verificationData" data-datatype="num" required/>
                                    <label for="documento_madre">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field" style="margin-top: 0;">
                                    <p style="display: inline; color: #9e9e9e;">fecha de nacimiento <span style="color: #960032;"><b>*</b></span></p>
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="fecha_nacimiento_madre" type="text" required disabled />
                                        </div>
                                        <div class="col-4">
                                            <button type="button" class="btn btn-primary ml-2 datepicker" data-actor="madre">
                                                <i class="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_madre" type="number" class="form-control" required disabled/>
                                    <label for="edad_madre">Edad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_madre">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_madre">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="estado_civil_madre">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                    <label for="estado_civil_madre">Estado civil</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nivel_instruccion_madre">
                                        <option value="" selected>Seleccionar...</option>
                                        <option value="I">Primaria</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                        <option value="N">Ninguno</option>
                                    </select>
                                    <label for="nivel_instruccion_madre">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_madre" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                    <label for="ocupacion_madre">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_madre" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                    <label for="lugar_trabajo_madre">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_madre" class="materialize-textarea verificationData" data-datatype="text"></textarea>
                                    <label for="habilidad_madre">Habilidad</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="direccion_residencia_madre" class="materialize-textarea" required></textarea>
                                    <label for="direccion_residencia_madre">Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="form-group input-field">
                                            <select id="cod_phone_numbre_madre">
                                                <option value="">--Selecciona Codigo--</option>
                                                ${template_codigos}
                                            </select>
                                            <label for="cod_phone_numbre_madre">Codigo País <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="form-group input-field">
                                            <input id="telefono_movil_madre" class="form-control verificationData" data-datatype="telf_movil" type="number" required/>
                                            <label for="telefono_movil_madre">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_madre" class="form-control verificationData" data-datatype="num" type="number" />
                                    <label for="telefono_residencial_madre">Telefono Residencial </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_trabajo_madre" class="form-control verificationData" data-datatype="num" type="number" />
                                    <label for="telefono_trabajo_madre">Telefono del lugar de trabajo </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <span>
                                        <label>
                                            <input id="vive_estudiante_madre" name="vive" checked="checked" class="with-gap"  type="radio"  /> 
                                            <span>Si</span>
                                        </label>
                                    </span>
                                    <span>
                                        <label>
                                            <input id="femenino_estudiante" name="vive" type="radio" class="with-gap"  class="radio ml-4" />
                                            <span>No</span>
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="religion_madre">
                                        <option value="">--Selecciona una Religíon--</option>
                                        ${template_religion}
                                    </select>
                                    <label for="religion_madre">Religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="religion_madre_otro_container" style="display:none" class="form-group input-field">
                                    <input id="otra_religion_madre" type="text" class="form-control verificationData" data-datatype="text" />
                                    <label for="otra_religion_madre">Mencione religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div> 
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group pt-5">
                                    <center>
                                        <button class="btn btnform">Siguiente</button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            `   
        },
        formulario3: {
            title : 'Datos Familiares (Padre)',
            form: `
                <form id="form3">
                    <div class="container p-4">
                        <span id="alerta_form"></span>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_padre" class="form-control verificationData" data-datatype="text" type="text" required />
                                    <label for="nombre_padre">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_padre" class="form-control verificationData" data-datatype="text" type="text" required />
                                    <label for="apellido_padre">Apellido <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group formBox">
                                    ${template_uploadPhotograpy('foto-padre')}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="tipo_documento_padre">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                    <label for="tipo_documento_padre">Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="documento_padre" class="form-control verificationData" data-datatype="num" type="text" required/>
                                    <label for="documento_padre">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field" style="margin-top: 0;">
                                    <p style="display: inline; color: #9e9e9e;">fecha de nacimiento <span style="color: #960032;"><b>*</b></span></p>
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="fecha_nacimiento_padre" type="text" required disabled />
                                        </div>
                                        <div class="col-4">
                                            <button type="button" class="btn btn-primary ml-2 datepicker" data-actor="padre">
                                                <i class="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_padre" type="number" class="form-control" required disabled/>
                                    <label for="edad_padre">Edad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_padre">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_padre">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="estado_civil_padre">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                    <label for="estado_civil_padre">Estado civil</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nivel_instruccion_padre">
                                        <option value="" selected>Seleccionar...</option>
                                        <option value="I">Primaria</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                        <option value="N">Ninguno</option>
                                    </select>
                                    <label for="nivel_instruccion_padre">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_padre" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                    <label for="ocupacion_padre">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_padre" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                    <label for="lugar_trabajo_padre">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_padre" class="materialize-textarea verificationData" data-datatype="text" ></textarea>
                                    <label for="habilidad_padre">Habilidad</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <label for="direccion_residencia_padre">Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_padre" class="materialize-textarea" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="form-group input-field">
                                            <select id="cod_phone_numbre_padre">
                                                <option value="">--Selecciona Codigo--</option>
                                                ${template_codigos}
                                            </select>
                                            <label for="cod_phone_numbre_madre">Codigo País <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="form-group input-field">
                                            <input id="telefono_movil_padre" class="form-control verificationData" data-datatype="telf_movil" type="number" required/>
                                            <label for="telefono_movil_padre">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_padre" class="form-control verificationData" data-datatype="num" type="number" />
                                    <label for="telefono_residencial_padre">Telefono Residencial </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <label for="telefono_trabajo_padre">Telefono del lugar de trabajo </label>
                                    <input id="telefono_trabajo_padre" class="form-control verificationData" data-datatype="num" type="number" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group pt-2">
                                    <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                    <div class="form-group pt-2">
                                        <span>
                                            <label>
                                                <input id="vive_estudiante_padre" name="vive" checked="checked" class="with-gap"  type="radio"  /> 
                                                <span>Si</span>
                                            </label>
                                        </span>
                                        <span>
                                            <label>
                                                <input id="femenino_estudiante" name="vive" type="radio" class="with-gap"  class="radio ml-4" />
                                                <span>No</span>
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="religion_padre">
                                        <option value="">--Selecciona una Religíon--</option>
                                        ${template_religion}
                                    </select>
                                    <label for="religion_padre">Religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="religion_padre_otro_container" style="display:none" class="form-group input-field">
                                    <input id="otra_religion_padre" type="text" class="form-control" />
                                    <label for="otra_religion_padre">Mencione religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div> 
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group pt-5">
                                    <center>
                                        <button class="btn btnform">Siguiente</button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            `      
        },
        formulario4: {
            title : 'Datos del Representante Legal',
            form: `
                <form id="form4">
                    <div class="container p-4">
                        <span id="alerta_form"></span>
                        <div class="row">
                            <div class="col-8">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <center>
                                                <label>¿ El representante es el padre o la madre ?</label>
                                                <div class="switch">
                                                    <label>
                                                    No
                                                    <input type="checkbox" id="selectRepresentante" />
                                                    <span class="lever"></span>
                                                    Si
                                                    </label>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <center>
                                            <span id="seleccionar_representante" style="display: none">
                                                <label>Selecciona el representante</label>
                                                <div class="form-group pt-2">
                                                    <span class="pill pillLeft">
                                                        <label>
                                                            <input id="selectMadre" name="selectRep" checked="checked" class="with-gap" type="radio"  /> 
                                                            <span style="color: #fff;">Madre</span>
                                                        </label>
                                                    </span>
                                                    <span class="pill pillRight">
                                                        <label>
                                                            <input id="selectPadre" name="selectRep" checked="checked" class="with-gap" type="radio"  /> 
                                                            <span style="color: #fff;">Padre</span>
                                                        </label>
                                                    </span>
                                                </div>
                                            </span>
                                        </center>
                                        <center>
                                            <span id="seleccionar_parenteco">
                                                <div class="form-group input-field">
                                                    <select id="parentesco">
                                                        <option value="Abuelo">Abuelo(a)</option>
                                                        <option value="Hermano">Hermano(a)</option>
                                                        <option value="Primo">Primo(a)</option>
                                                        <option value="Tio">Tio(a)</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                    <label for="parentesco">Parentesco <span style="color: #960032;"><b>*</b></span></label>
                                                </div>
                                            </span>
                                        </center>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_representante" class="form-control verificationData" data-datatype="text" type="text" required />
                                    <label for="nombre_representante">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_representante" class="form-control verificationData" data-datatype="text" type="text" required />
                                    <label for="apellido_representante">Apellido <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group formBox">
                                    ${template_uploadPhotograpy('foto-representante')}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <!--$(document).find('#tipo_documento_representante').siblings('ul').find('li > span')-->
                                    <select id="tipo_documento_representante">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                    <label for="tipo_documento_representante">Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="documento_representante" class="form-control verificationData" data-datatype="num" type="text" required/>
                                    <label for="documento_representante">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field" style="margin-top: 0;">
                                    <p style="display: inline; color: #9e9e9e;">fecha de nacimiento <span style="color: #960032;"><b>*</b></span></p>
                                    <div class="row">
                                        <div class="col-8">
                                            <input id="fecha_nacimiento_representante" type="text" required disabled />
                                        </div>
                                        <div class="col-4">
                                            <button type="button" class="btn btn-primary ml-2 datepicker" data-actor="representante">
                                                <i class="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_representante" type="number" class="form-control" required disabled/>
                                    <label for="edad_representante">Edad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_representante">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_representante">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="estado_civil_representante">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                    <label for="estado_civil_representante">Estado civil</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nivel_instruccion_representante" >
                                        <option value="" selected>Seleccionar...</option>
                                        <option value="I">Primaria</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                        <option value="N">Ninguno</option>
                                    </select>
                                    <label for="nivel_instruccion_representante">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_representante" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                    <label for="ocupacion_representante">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_representante" class="materialize-textarea verificationData" data-dataType="text" required></textarea>
                                    <label for="lugar_trabajo_representante">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_representante" class="materialize-textarea verificationData" data-datatype="text"></textarea>
                                    <label for="habilidad_representante">Habilidad</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <label for="direccion_residencia_representante">Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_representante" class="materialize-textarea verificationData" data-datatype="text" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_movil_representante" type="number" class="form-control verificationData" data-datatype="telf_movil" required/>
                                    <label for="telefono_movil_representante">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_representante" class="form-control verificationData" data-datatype="num" type="number" />
                                    <label for="telefono_residencial_representante">Telefono Residencial</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_trabajo_representante" class="form-control verificationData" data-datatype="num" type="number" />
                                    <label for="telefono_trabajo_representante">Telefono del lugar de trabajo </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group">
                                    <span>
                                        <label>
                                            <input id="vive_estudiante_representante_y" name="vive" checked="checked" class="with-gap"  type="radio"  /> 
                                            <span>Si</span>
                                        </label>
                                    </span>
                                    <span>
                                        <label>
                                            <input id="vive_estudiante_representante_n" name="vive" type="radio" class="with-gap"  class="radio ml-4" />
                                            <span>No</span>
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="religion_representante">
                                        <option value="">--Selecciona una Religíon--</option>
                                        ${template_religion}
                                    </select>
                                    <label for="religion_representante">Religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="religion_representante_otro_container" style="display:none" class="form-group input-field">
                                    <input id="otra_religion_representante" type="text" class="form-control verificationData" data-datatype="text" />
                                    <label for="otra_religion_representante">Mencione religión <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group pt-5">
                                    <center>
                                        <button class="btn btnform">Finalizar</button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            `   
        }
    }

    function procesSwitchs(checked, display, content, obj) {
        $(content).each((index, value) => {
            for(index in value) {
                $('#'+index).css({'display':display});
                let objprops = value[index];
                if(!$.isEmptyObject(objprops)) {
                    let element = $(document).find(objprops.elm)[0];
                    switch (objprops.key) {
                        case 'checked':
                            $(element).prop(objprops.key, objprops.value);
                        break;
                        case 'setValue':
                            $(element).val(objprops.value);
                            M.AutoInit();
                        break;
                    }
                }
            }
        })
        if(obj != false) {
            $(obj).each((index, value) => {
                const objFunction = value[checked];
                for(index in objFunction) {
                    $('#'+index).css({'display':objFunction[index]})
                }
            })
        }
    }

    function handleSwicht (input, content, obj={}, ret=false) {
        var swicth = $(document).find('#'+input)[0];
        var checked = $(swicth).prop('checked');
        var display = checked == true ? 'block' : 'none';
        procesSwitchs(checked, display, content, obj);

        return ret == true ? checked : '';
    }

    function handleSwichtGet (input) {
        var swicth = $(document).find('#'+input)[0];
        var checked = $(swicth).prop('checked');

        return checked;
    }

    function handleSpinnerLoad (element) {
        $(element).html(`
            <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        `);
    }

     /*turn cups*/
     $('.turno_cupo').on('click', function() {
        let elm = $(this)[0];
        turn = $(elm).data('turno');
        let grado = $(elm).data('grado');
        let seccion = $(elm).data('seccion');

        objData.turn = turn;
        objData.grado = grado;
        objData.seccion = seccion;
        console.log(objData);
        const img = turn == 'manana' ? 'river.png' : 'nature.png';

        template_secciones = generateTemplate_secciones(turn);
        console.log(template_secciones);
        let elementSeccion = $(document).find('#seccion')[0];
        $(elementSeccion).html(template_secciones);

        $('#imgTurn').html(`
            <img class="animateImg" src="../assets/img/pre-registro/${img}" style="
                width: 160px;
                position: absolute;
                float: left;
            ">
        `);
        $('#anio_text').html(`${grado}° Año`);
        $('#btn-navigation').html(`
            <a id="btn-session" class="btn btn-md mt-4 btnReturnTurn">VOLVER</a>
        `)
        $('#turn_cups').css('display', 'none');
        $('#pre_registro_forms').css('display', 'block');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

    //btn return TURN
    $(document).on('click', '.btnReturnTurn', function(e)  {
        $('#btn-navigation').html(`
            <a id="btn-session" class="btn btn-md mt-4" href="../landing-page/home.php">PAGINA PRINCIPAL</a>
        `)
        $('#turn_cups').css('display', 'block');
        $('#pre_registro_forms').css('display', 'none');
    })

    //btn return TAP
    $(document).on('click', '.btnAlternative', function(e) {
        let elm = $(this)[0];
        let tap = $(elm).data('tap');
        console.log(tap);

        switch (tap) {
            case 1:
                $('.title-tap').html(arrFormularios.formulario1.title);
                $('.formularios').html(arrFormularios.formulario1.form);
                $('.btn_return_tap').html('');
                $(document).find('#lineatap2').attr('style', '');
                $(document).find('.lt2').attr('style', '');
                $(document).find('#lineatap1').html('1');
                $(document).find('#lineatap1').attr('style', 'background-color: rgb(150, 0, 50); color: rgb(255, 255, 255); border-color: rgb(150, 0, 50);');
                $(document).find('.lt1').attr('style', 'background-color: rgb(33, 109, 30); color: rgb(255, 255, 255)');
                // CREAR FUNCION QUE SETEE LOS DATOS EN CADA INPUT QUE SEA ESCALABLE A TODOS LOS FORMULARIOS
                //estudiante
                $(document).find('#nombre_estudiante').val(objData.estudiante.nombre);
                $(document).find('#apellido_estudiante').val(objData.estudiante.apellido);
                $(document).find('#tipo_documento_estudiante').val(objData.estudiante.tipo_documento);
                $(document).find('#documento_estudiante').val(objData.estudiante.documento);
                $(document).find('#fecha_nacimiento_estudiante').val(DateSlashFormat(objData.estudiante.fecha_nacimiento));
                $(document).find('#edad_estudiante').val(objData.estudiante.edad);
                $(document).find('#nacionalidad_estudiante').val(objData.estudiante.nacionalidad);
                $(document).find('#email_estudiante').val(objData.estudiante.email);
                $(document).find('#direccion_estudiante').val(objData.estudiante.direccion);
                $(document).find('#punto_referencia_estudiante').val(objData.estudiante.punto_referencia);
                $(document).find('#lugar_nacimiento_estudiante').val(objData.estudiante.lugar_nacimiento);
                $(document).find('#estado_estudiante').val(objData.estudiante.estado);
                $(document).find('#estado_estudiante').trigger('change');
                //el municipio se setea en el evento change de #estado_estudiante
                
                $(document).find('#cod_phone_numbre').val(objData.estudiante.telf_code);
                $(document).find('#telefono_movil_estudiante').val(objData.estudiante.telf_movil);
                $(document).find('#telefono_residencial_estudiante').val(objData.estudiante.telf_residencia);
                $(document).find('#habilidades_estudiante').val(objData.estudiante.habilidades);
                $(document).find('#religion_estudiante').val(objData.estudiante.religion);
                $(document).find('#otra_religion_estudiante').val(objData.estudiante.otra_religion);
                objData.estudiante.genero == 'M' 
                    ? $(document).find('#masculino_estudiante').prop('checked', true)
                    : $(document).find('#femenino_estudiante').prop('checked', true);
                objData.estudiante.lateralidad == 'D'
                    ? $(document).find('#diestro_estudiante').prop('checked', true)
                    : $(document).find('#zurdo_estudiante').prop('checked', true);
                    //'preview_foto' : $(document).find('#foto-estudiante')[0].files[0]
                //detalle estudiante
                    $(document).find('#tallaCamisa_estudiante').val(objData.detalle_estudiante.talla_camisa);
                    $(document).find('#tallaPatalon_estudiante').val(objData.detalle_estudiante.talla_pantalon);
                    $(document).find('#estatura_estudiante').val(objData.detalle_estudiante.estatura);
                    $(document).find('#peso_estudiante').val(objData.detalle_estudiante.peso);
                    $(document).find('#grupoSanguineo_estudiante').val(objData.detalle_estudiante.grupo_sanguineo);
                    objData.detalle_estudiante.discapacidad == 'Y'
                        ? $(document).find('#discapacidad').prop('checked', true)
                        : $(document).find('#discapacidad').prop('checked', false);
                    $(document).find('#discapacidadDescripcion').val(objData.detalle_estudiante.discapacidad_descripcion);
                    objData.detalle_estudiante.informeMedico == 'Y'
                        ? $(document).find('#informeMedico').prop('checked', true) 
                        : $(document).find('#informeMedico').prop('checked', false);
                    $(document).find('#informeMedicoDocumento').val(objData.detalle_estudiante.url_informe_medic);
                    objData.detalle_estudiante.alergico == 'Y'
                        ? $(document).find('#alergico').prop('checked', true)
                        : $(document).find('#alergico').prop('checked', false);
                    $(document).find('#alergicoDescripcion').val(objData.detalle_estudiante.alergia);
                    objData.detalle_estudiante.enfermo == 'Y'
                        ? $(document).find('#enfermedad').prop('checked', true)
                        : $(document).find('#enfermedad').prop('checked', false);
                    $(document).find('#enfermedadDescripcion').val(objData.detalle_estudiante.enfermedad);
                    objData.detalle_estudiante.medicado == 'Y'
                        ? $(document).find('#medicamentos').prop('checked', true)
                        : $(document).find('#medicamentos').prop('checked', false);
                    $(document).find('#medicamentosDescripcion').val(objData.detalle_estudiante.medicamento);
                    objData.detalle_estudiante.convulsion == 'Y'
                        ? $(document).find('#convulsion').prop('checked', true)
                        : $(document).find('#convulsion').prop('checked', false);
                    $(document).find('#convulsionDescripcion').val(objData.detalle_estudiante.convulsion_observaciones);
                    objData.detalle_estudiante.familiar_colegio == 'Y'
                        ? $(document).find('#familiar_colegio').prop('checked', true)
                        : $(document).find('#familiar_colegio').prop('checked', false);
                    $(document).find('#familiar_colegioNombre').val(objData.detalle_estudiante.familiar_colegioNombre);
                    $(document).find('#familiar_colegioParentesco').val(objData.detalle_estudiante.familiar_colegioParentesco);
                    $(document).find('#familiar_colegioDescripcion').val(objData.detalle_estudiante.familiar_colegioDescripcion);
                    $(document).find('#content_discapacidad').css('display', 'block');
                    $(document).find('#content_alergico').css('display', 'block');
                    $(document).find('#content_enfermedad').css('display', 'block');
                    $(document).find('#content_medicamentos').css('display', 'block');
                    $(document).find('#content_convulsion').css('display', 'block');
                    $(document).find('#content_familiar_colegio').css('display', 'block');
                    $(document).find('#content_familiar_colegio2').css('display', 'block');
                    $(document).find('#content_familiar_colegio3').css('display', 'block');   
            break;
            case 2:
                console.log('entramos a tap:' + tap);
                $('.title-tap').html(arrFormularios.formulario2.title);
                $('.formularios').html(arrFormularios.formulario2.form);
                $('.btn_return_tap').html(`
                    <button data-tap="${tap-1}" class="btnAlternative">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        atras
                    </button>
                `)
                $(document).find('#lineatap3').attr('style', '');
                $(document).find('.lt3').attr('style', '');
                $(document).find('#lineatap2').html('2');
                $(document).find('#lineatap2').attr('style', 'background-color: rgb(150, 0, 50); color: rgb(255, 255, 255); border-color: rgb(150, 0, 50);');
                $(document).find('.lt2').attr('style', 'background-color: rgb(33, 109, 30); color: rgb(255, 255, 255)');
                // CREAR FUNCION QUE SETEE LOS DATOS EN CADA INPUT QUE SEA ESCALABLE A TODOS LOS FORMULARIOS 

                $(document).find('#nombre_madre').val(objData.madre.nombre),
                $(document).find('#apellido_madre').val(objData.madre.apellido),
                $(document).find('#tipo_documento_madre').val(objData.madre.tipo_documento),
                $(document).find('#documento_madre').val(objData.madre.documento),
                $(document).find('#fecha_nacimiento_madre').val(DateSlashFormat(objData.madre.fecha_nacimiento)),
                $(document).find('#nacionalidad_madre').val(objData.madre.nacionalidad),
                $(document).find('#edad_madre').val(objData.madre.edad),
                $(document).find('#estado_civil_madre').val(objData.madre.estado_civil),
                $(document).find('#nivel_instruccion_madre').val(objData.madre.nivel_instruccion),
                $(document).find('#ocupacion_madre').val(objData.madre.ocupacion),
                $(document).find('#lugar_trabajo_madre').val(objData.madre.lugar_nacimiento),
                $(document).find('#habilidad_madre').val(objData.madre.habilidad),
                $(document).find('#direccion_residencia_madre').val(objData.madre.direccion),
                $(document).find('#telefono_movil_madre').val(objData.madre.telefono_movil), 
                $(document).find('#telefono_residencial_madre').val(objData.madre.telefono_residencia),
                $(document).find('#telefono_trabajo_madre').val(objData.madre.telefono_trabajo),
                $(document).find('#religion_madre').val(objData.madre.religion),
                $(document).find('#otra_religion_madre').val(objData.madre.otra_religion),
                objData.madre.vive_estudiante == 'Y'
                    ? $(document).find('#vive_estudiante_madre').prop('checked', true)
                    : $(document).find('#vive_estudiante_madre').prop('checked', false)
                    //'foto_madre' : formData,
                    //'preview_foto' : $(document).find('#foto-madre')[0].files[0]
            break;
            case 3:
                $('.title-tap').html(arrFormularios.formulario3.title);
                $('.formularios').html(arrFormularios.formulario3.form);
                $('.btn_return_tap').html(`
                    <button data-tap="${tap}" class="btnAlternative">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        atras
                    </button>
                `)
                $(document).find('#lineatap4').attr('style', '');
                $(document).find('.lt4').attr('style', '');
                $(document).find('#lineatap1').html('3');
                $(document).find('#lineatap3').attr('style', 'background-color: rgb(150, 0, 50); color: rgb(255, 255, 255); border-color: rgb(150, 0, 50);');
                $(document).find('.lt3').attr('style', 'background-color: rgb(33, 109, 30); color: rgb(255, 255, 255)');
                // CREAR FUNCION QUE SETEE LOS DATOS EN CADA INPUT QUE SEA ESCALABLE A TODOS LOS FORMULARIOS

            break;
        }

        initConfigDate();
        initMaterialInput(); 
        initConfigDate();
             
    })

    $(document).on('click', '#informeMedico', function(e) {
        handleSwicht ('informeMedico', 
            [{'content_swicth_posee_informe_medico' : {elm: '#informeMedico_digital', key: 'checked', value: false}}], 
            {
                true : {'content_informe_medico_message' : 'block', 'content_informe_medico' : 'none'},
                false: {'content_informe_medico_message' : 'none', 'content_informe_medico' : 'none'}
            }
        );
    })

    $(document).on('click', '#informeMedico_digital', function(e) {
        handleSwicht ('informeMedico_digital', 
            [{'content_informe_medico' : {elm: '#informeMedicoDocumento', key: 'setValue'}}], 
            {
                true : {'content_informe_medico_message' : 'none', 'content_informe_medico' : 'block'},
                false: {'content_informe_medico_message' : 'block', 'content_informe_medico' : 'none'}
            }
        );
    })

    $(document).on('click', '#alergico', function(e) {
        handleSwicht ('alergico', [{'content_alergico' : {}}]);
    })

    $(document).on('click', '#enfermedad', function(e) {
        handleSwicht ('enfermedad', [{'content_enfermedad' : {}}]);
    })

    $(document).on('click', '#medicamentos', function(e) {
        handleSwicht ('medicamentos', [{'content_medicamentos' : {}}]);
    })

    $(document).on('click', '#convulsion', function(e) {
        handleSwicht ('convulsion', [{'content_convulsion' : {}}]);
    })

    $(document).on('click', '#discapacidad', function(e) {
        handleSwicht ('discapacidad', [{'content_discapacidad' : {}}]);
    })

    $(document).on('click', '#familiar_colegio', function(e) {
        handleSwicht ('familiar_colegio', 
            [
                {'content_familiar_colegio' : {}}, 
                {'content_familiar_colegio2' : {}},
                {'content_familiar_colegio3' : {}}
            ]
        );
    })

    $('.title-tap').html(arrFormularios.formulario1.title);
    $('.formularios').html(arrFormularios.formulario1.form);
    uploadPhotography("foto-estudiante");

    //inicio lineTap
    $('#lineatap1').css({
        "background-color" : "#960032",
        "color" : "#fff",
        "border-color" : "#960032"
    });
    $('.lt1').css({
        "background-color" : "rgb(33 109 30)",
        "color" : "#fff",
    })

    //form 1

    //otra religion estudiante
    $(document).on('change', '#religion_estudiante' ,function() {
        otherReligion('religion_estudiante');
    })

    //calculo y set de edad segun fecha de nacimiento.
    $(document).on('click', '.datepicker-done', function(e) {
        let elm = $(document).find('.datepicker')[0];
        let date = $(elm).val();
        let year = calculateAge(date);
        let actor = $(elm).data('actor');

        $(document).find('#fecha_nacimiento_'+actor).val(date);
        $(document).find('#edad_'+actor).val(year);
        M.updateTextFields();
    })

    $(document).on('submit', '#form1', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        var lengthFoto = $(document).find('#foto-estudiante')[0].files.length;
        if(getInvalidData()) { //si es true entonces hay campos invalidos
            $(document).find('.btnform').html('SIGUIENTE');
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else if(lengthFoto == 0) {
            $(document).find('.btnform').html('SIGUIENTE');
            $(document).find('#alerta_foto').html(alert_Images('Debe Ingresar una foto', 'danger'))
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else {
            const unique = [
                {'cedula': $(document).find('#documento_estudiante').val()},
                {'email': $(document).find('#email_estudiante').val()},
                {'telf_movil': $(document).find('#telefono_movil_estudiante').val()},
                {'telf_residencia': $(document).find('#telefono_residencial_estudiante').val()}
            ];

            //VALIDACION DE DATOS EXISTENTES
            dataUnique(unique)
                .then((resp) => {
                    if(resp == true) {
                        //foto estudiante
                        formData.append("foto_estudiante",  $(document).find('#foto-estudiante')[0].files[0]);
                        console.log(formData.getAll("foto_estudiante"));

                        //guardando datos
                        objData.estudiante = {
                            'nombre' : $(document).find('#nombre_estudiante').val(),
                            'apellido': $(document).find('#apellido_estudiante').val(),
                            'tipo_documento': $(document).find('#tipo_documento_estudiante').val(),
                            'documento': $(document).find('#documento_estudiante').val(),
                            'fecha_nacimiento': DateGuionFormat($(document).find('#fecha_nacimiento_estudiante').val()),
                            'edad': $(document).find('#edad_estudiante').val(),
                            'nacionalidad': $(document).find('#nacionalidad_estudiante').val(),
                            'email': $(document).find('#email_estudiante').val(),
                            'direccion': $(document).find('#direccion_estudiante').val(),
                            'punto_referencia': $(document).find('#punto_referencia_estudiante').val(),
                            'lugar_nacimiento' : $(document).find('#lugar_nacimiento_estudiante').val(),
                            'estado': $(document).find('#estado_estudiante').val(),
                            'municipio': $(document).find('#municipio_estudiante').val(),
                            'telf_code' : $(document).find('#cod_phone_numbre_estudiante').val(),
                            'telf_movil': $(document).find('#telefono_movil_estudiante').val(),
                            'telf_residencia': $(document).find('#telefono_residencial_estudiante').val(),
                            'habilidades' : $(document).find('#habilidades_estudiante').val(),
                            'religion' : $(document).find('#religion_estudiante').val(),
                            'otra_religion' : $(document).find('#otra_religion_estudiante').val(),
                            'genero' : $(document).find('#masculino_estudiante').prop('checked') == true ? 'M' : 'F',
                            'lateralidad' : $(document).find('#diestro_estudiante').prop('checked') == true ? 'D' : 'I',
                            //'foto_estudiante' : formData,
                            'preview_foto' : $(document).find('#foto-estudiante')[0].files[0]
                        };

                        console.log(objData.estudiante);

                        objData.detalle_estudiante = {
                            'talla_camisa' : $(document).find('#tallaCamisa_estudiante').val(),
                            'talla_pantalon': $(document).find('#tallaPatalon_estudiante').val(),
                            'estatura': $(document).find('#estatura_estudiante').val(),
                            'peso': $(document).find('#peso_estudiante').val(),
                            'grupo_sanguineo': $(document).find('#grupoSanguineo_estudiante').val(),
                            'discapacidad': $(document).find('#discapacidad').prop('checked') == true ? 'Y' : 'N',
                            'discapacidad_descripcion' : $(document).find('#discapacidadDescripcion').val(),
                            'informeMedico': $(document).find('#informeMedico').prop('checked') == true ? 'Y' : 'N',
                            'url_informe_medico' :  $(document).find('#informeMedicoDocumento').val(),
                            'alergico' : $(document).find('#alergico').prop('checked') == true ? 'Y' : 'N',
                            'alergia' : $(document).find('#alergicoDescripcion').val(),
                            'enfermo' : $(document).find('#enfermedad').prop('checked') == true ? 'Y' : 'N',
                            'enfermedad' : $(document).find('#enfermedadDescripcion').val(),
                            'medicado' : $(document).find('#medicamentos').prop('checked') == true ? 'Y' : 'N',
                            'medicamento' : $(document).find('#medicamentosDescripcion').val(),
                            'convulsion' : $(document).find('#convulsion').prop('checked') == true ? 'Y' : 'N',
                            'convulsion_observaciones' : $(document).find('#convulsionDescripcion').val(),
                            'familiar_colegio' : $(document).find('#familiar_colegio').prop('checked') == true ? 'Y' : 'N',
                            'familiar_colegioNombre' : $(document).find('#familiar_colegioNombre').val(),
                            'familiar_colegioParentesco' : $(document).find('#familiar_colegioParentesco').val(),
                            'familiar_colegioDescripcion' : $(document).find('#familiar_colegioDescripcion').val()
                        }

                        console.log(objData.detalle_estudiante);

                        console.log(objData);

                        setTimeout(() => {
                            $(document).find('#alerta_form').html('');
                            //recopilar datos, procesarlos y guardarlos en base de datos
                            $('#lineatap1').css({
                                "background-color" : "#302E2C",
                                "color" : "#F6CD15",
                                "border-color" : "#F6CD15",
                                "padding" : "14px 15px"
                            });
                            $('.lt1').css({
                                "background-color" : "#F6CD15",
                                "color" : "#302E2C",
                            })
                            $('#lineatap1').html(`<i style="font-size: 20px;" class="fa fa-check" aria-hidden="true"></i>`);
                            $('#lineatap2').css({
                                "background-color" : "#960032",
                                "color" : "#fff",
                                "border-color" : "#960032"
                            });
                            $('.lt2').css({
                                "background-color" : "rgb(33 109 30)",
                                "color" : "#fff",
                            })
                            
                            $('.btn_return_tap').html(`
                                <button data-tap="1" class="btnAlternative">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    atras
                                </button>
                            `)
                            $('.title-tap').html(arrFormularios.formulario2.title);
                            $('.formularios').html(arrFormularios.formulario2.form);
                            //M.AutoInit permite inicializar todos los componentes de Materialise con una sola llamada
                            M.AutoInit();
                            initConfigDate();
                            window.scroll({
                                top: 100,
                                left: 100,
                                behavior: 'smooth'
                            });
                            uploadPhotography("foto-madre");
                        },1500);
                    } else {
                        $(document).find('.btnform').html('SIGUIENTE');
                        $(document).find('#alerta_form').html(alert_Images(`el ${resp.dato}: <b>${resp.value}</b> ya existe en nuestra base de datos, "Por favor verificar o ponerse en contacto con nuestro equipo de soporte."`, 'danger'))
                        window.scrollTo({
                            top: 500,
                            behavior: "smooth"
                        });
                    }
                })
            
        }
    });

    //otra religion estudiante
    $(document).on('change', '#religion_madre' ,function() {
        otherReligion('religion_madre');
    })

    $(document).on('submit', '#form2', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        //foto madre
        formData.append("foto_madre",  $(document).find('#foto-madre')[0].files[0]);

        var lengthFoto = $(document).find('#foto-madre')[0].files.length;
        if(getInvalidData()) { //si es true entonces hay campos invalidos
            $(document).find('.btnform').html('SIGUIENTE');
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else if(lengthFoto == 0) {
            $(document).find('.btnform').html('SIGUIENTE');
            $(document).find('#alerta_foto').html(alert_Images('Debe Ingresar una foto', 'danger'))
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else {

            const unique = [
                {'cedula': $(document).find('#documento_madre').val()},
                {'telf_movil': $(document).find('#telefono_movil_madre').val()},
                {'telf_residencia': $(document).find('#telefono_residencial_madre').val()}
            ];

            //VALIDACION DE DATOS EXISTENTES
            dataUnique(unique)
                .then((resp) => {
                    //datos
                    if(resp == true) {
                        objData.madre = {
                            'nombre' : $(document).find('#nombre_madre').val(),
                            'apellido': $(document).find('#apellido_madre').val(),
                            'tipo_documento': $(document).find('#tipo_documento_madre').val(),
                            'documento': $(document).find('#documento_madre').val(),
                            'fecha_nacimiento': DateGuionFormat($(document).find('#fecha_nacimiento_madre').val()),
                            'nacionalidad': $(document).find('#nacionalidad_madre').val(),
                            'edad': $(document).find('#edad_madre').val(),
                            'estado_civil' : $(document).find('#estado_civil_madre').val(),
                            'nivel_instruccion' : $(document).find('#nivel_instruccion_madre').val(),
                            'ocupacion' : $(document).find('#ocupacion_madre').val(),
                            'lugar_trabajo' : $(document).find('#lugar_trabajo_madre').val(),
                            'habilidad' : $(document).find('#habilidad_madre').val(),
                            'direccion' : $(document).find('#direccion_residencia_madre').val(),
                            'telefono_movil' : $(document).find('#telefono_movil_madre').val(), 
                            'telefono_residencia' : $(document).find('#telefono_residencial_madre').val(),
                            'telefono_trabajo' : $(document).find('#telefono_trabajo_madre').val(),
                            'religion' : $(document).find('#religion_madre').val(),
                            'otra_religion' : $(document).find('#otra_religion_madre').val(),
                            'vive_estudiante' : $(document).find('#vive_estudiante_madre').prop('checked') == true ? 'Y' : 'N',
                            //'foto_madre' : formData,
                            'preview_foto' : $(document).find('#foto-madre')[0].files[0]
                        };
    
                        console.log(objData);
    
                        setTimeout(() => {
                            //recopilar datos, procesarlos y guardarlos en base de datos
                            $('#lineatap2').css({
                                "background-color" : "#302E2C",
                                "color" : "#F6CD15",
                                "border-color" : "#F6CD15",
                                "padding" : "14px 15px"
                            });
                            $('.lt2').css({
                                "background-color" : "#F6CD15",
                                "color" : "#302E2C",
                            })
                            $('#lineatap2').html(`<i style="font-size: 20px;" class="fa fa-check" aria-hidden="true"></i>`);
                            $('#lineatap3').css({
                                "background-color" : "#960032",
                                "color" : "#fff",
                                "border-color" : "#960032"
                            });
                            $('.lt3').css({
                                "background-color" : "rgb(33 109 30)",
                                "color" : "#fff",
                            })
                            $('.btn_return_tap').html(`
                                <button data-tap="2" class="btnAlternative">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    atras
                                </button>
                            `)
                            $('.title-tap').html(arrFormularios.formulario3.title);
                            $('.formularios').html(arrFormularios.formulario3.form);
                            //M.AutoInit permite inicializar todos los componentes de Materialise con una sola llamada
                            M.AutoInit();
                            initConfigDate();
                            window.scroll({
                                top: 100,
                                left: 100,
                                behavior: 'smooth'
                            });
                            uploadPhotography("foto-padre");
                        },1500); 
                    } else {
                        $(document).find('.btnform').html('SIGUIENTE');
                        $(document).find('#alerta_form').html(alert_Images(`el ${resp.dato}: <b>${resp.value}</b> ya existe en nuestra base de datos, "Por favor verificar o ponerse en contacto con nuestro equipo de soporte."`, 'danger'))
                        window.scrollTo({
                            top: 500,
                            behavior: "smooth"
                        });
                    }
                })
        }
    })

    //otra religion estudiante
    $(document).on('change', '#religion_padre' ,function() {
        otherReligion('religion_padre');
    })

    $(document).on('submit', '#form3', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        //foto padre
        formData.append("foto_padre",  $(document).find('#foto-padre')[0].files[0]);

        var lengthFoto = $(document).find('#foto-padre')[0].files.length;
        if(getInvalidData()) { //si es true entonces hay campos invalidos
            $(document).find('.btnform').html('SIGUIENTE');
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else if(lengthFoto == 0) {
            $(document).find('.btnform').html('SIGUIENTE');
            $(document).find('#alerta_foto').html(alert_Images('Debe Ingresar una foto', 'danger'))
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else {

            const unique = [
                {'cedula': $(document).find('#documento_padre').val()},
                {'telf_movil': $(document).find('#telefono_movil_padre').val()},
                {'telf_residencia': $(document).find('#telefono_residencial_padre').val()}
            ];

            //VALIDACION DE DATOS EXISTENTES
            dataUnique(unique)
                .then((resp) => {
                    //datos
                    if(resp == true) {
                        objData.padre = {
                            'nombre' : $(document).find('#nombre_padre').val(),
                            'apellido': $(document).find('#apellido_padre').val(),
                            'tipo_documento': $(document).find('#tipo_documento_padre').val(),
                            'documento': $(document).find('#documento_padre').val(),
                            'fecha_nacimiento': DateGuionFormat($(document).find('#fecha_nacimiento_padre').val()),
                            'nacionalidad': $(document).find('#nacionalidad_padre').val(),
                            'edad': $(document).find('#edad_padre').val(),
                            'estado_civil' : $(document).find('#estado_civil_padre').val(),
                            'nivel_instruccion' : $(document).find('#nivel_instruccion_padre').val(),
                            'ocupacion' : $(document).find('#ocupacion_padre').val(),
                            'lugar_trabajo' : $(document).find('#lugar_trabajo_padre').val(),
                            'habilidad' : $(document).find('#habilidad_padre').val(),
                            'direccion' : $(document).find('#direccion_residencia_padre').val(),
                            'telefono_movil' : $(document).find('#telefono_movil_padre').val(), 
                            'telefono_residencia' : $(document).find('#telefono_residencial_padre').val(),
                            'telefono_trabajo' : $(document).find('#telefono_trabajo_padre').val(),
                            'religion' : $(document).find('#religion_padre').val(),
                            'otra_religion' : $(document).find('#otra_religion_padre').val(),
                            'vive_estudiante' : $(document).find('#vive_estudiante_padre').prop('checked') == true ? 'Y' : 'N',
                            //'foto_padre' : formData,
                            'preview_foto' : $(document).find('#foto-padre')[0].files[0]
                        };
    
                        console.log(objData);
    
                        setTimeout(() => {
                            //recopilar datos, procesarlos y guardarlos en base de datos
                            $('#lineatap3').css({
                                "background-color" : "#302E2C",
                                "color" : "#F6CD15",
                                "border-color" : "#F6CD15",
                                "padding" : "14px 15px"
                            });
                            $('.lt3').css({
                                "background-color" : "#F6CD15",
                                "color" : "#302E2C",
                            })
                            $('#lineatap3').html(`<i style="font-size: 20px;" class="fa fa-check" aria-hidden="true"></i>`);
                            $('#lineatap4').css({
                                "background-color" : "#960032",
                                "color" : "#fff",
                                "border-color" : "#960032"
                            });
                            $('.lt4').css({
                                "background-color" : "rgb(33 109 30)",
                                "color" : "#fff",
                            })
    
                            $('.btn_return_tap').html(`
                                <button data-tap="3" class="btnAlternative">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    atras
                                </button>
                            `)
                            $('.title-tap').html(arrFormularios.formulario4.title);
                            $('.formularios').html(arrFormularios.formulario4.form);
                            //M.AutoInit permite inicializar todos los componentes de Materialise con una sola llamada
                            M.AutoInit();
                            initConfigDate();
                            window.scroll({
                                top: 100,
                                left: 100,
                                behavior: 'smooth'
                            });
                            uploadPhotography("foto-representante");
                        },1500);
                    }  else {
                        $(document).find('.btnform').html('SIGUIENTE');
                        $(document).find('#alerta_form').html(alert_Images(`el ${resp.dato}: <b>${resp.value}</b> ya existe en nuestra base de datos, "Por favor verificar o ponerse en contacto con nuestro equipo de soporte."`, 'danger'))
                        window.scrollTo({
                            top: 500,
                            behavior: "smooth"
                        });
                    }
                })
        }
    })

    $(document).on('click', '#selectRepresentante', function(e) {
        //['seleccionar_parenteco']
        var swicth = handleSwicht ('selectRepresentante', 
            [{'seleccionar_representante' : {}}],

            {
                true : {'seleccionar_parenteco' : 'none', 'seleccionar_representante' : 'block'},
                false: {'seleccionar_parenteco' : 'block', 'seleccionar_representante' : 'none'}
            },
            true
        );
        var selectMadre = $(document).find('#selectMadre').prop('checked');
        var divFoto = '';
        var divImg = '';

        if(swicth) {
            if(selectMadre) {
                $(document).find('#nombre_representante').val(objData.madre.nombre);
                $(document).find('#apellido_representante').val(objData.madre.apellido);
                $(document).find('#tipo_documento_representante').val(objData.madre.tipo_documento);
                $(document).find('#documento_representante').val(objData.madre.documento);
                $(document).find('#fecha_nacimiento_representante').val(DateSlashFormat(objData.madre.fecha_nacimiento));
                $(document).find('#nacionalidad_representante').val(objData.madre.nacionalidad);
                $(document).find('#edad_representante').val(objData.madre.edad);
                $(document).find('#estado_civil_representante').val(objData.madre.estado_civil);
                $(document).find('#nivel_instruccion_representante').val(objData.madre.nivel_instruccion);
                $(document).find('#ocupacion_representante').val(objData.madre.ocupacion);
                $(document).find('#lugar_trabajo_representante').val(objData.madre.lugar_trabajo);
                $(document).find('#habilidad_representante').val(objData.madre.habilidad);
                $(document).find('#direccion_residencia_representante').val(objData.madre.direccion);
                $(document).find('#telefono_movil_representante').val(objData.madre.telefono_movil);
                $(document).find('#telefono_residencial_representante').val(objData.madre.telefono_residencia);
                $(document).find('#telefono_trabajo_representante').val(objData.madre.telefono_trabajo);
                $(document).find('#religion_representante').val(objData.madre.religion);
                $(document).find('#otra_religion_representante').val(objData.madre.otra_religion);

                //preview foto
                $(document).find("#foto-representante-preview div").html(objData.madre.preview_foto.name);
                $(document).find("#foto-representante-preview img").attr('src', URL.createObjectURL(objData.madre.preview_foto));

                if(objData.madre.vive_estudiante == 'Y') {
                    $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
                } else {
                    $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
                }

                if(objData.padre.otra_religion == 10) {
                    $(document).find('#religion_representante_otro_container').css('display', 'block');
                } else {
                    $(document).find('#religion_representante_otro_container').css('display', 'none');
                }

            } else {
                $(document).find('#nombre_representante').val(objData.padre.nombre);
                $(document).find('#apellido_representante').val(objData.padre.apellido);
                $(document).find('#tipo_documento_representante').val(objData.padre.tipo_documento);
                $(document).find('#documento_representante').val(objData.padre.documento);
                $(document).find('#fecha_nacimiento_representante').val(DateSlashFormat(objData.padre.fecha_nacimiento));
                $(document).find('#nacionalidad_representante').val(objData.padre.nacionalidad);
                $(document).find('#edad_representante').val(objData.padre.edad);
                $(document).find('#estado_civil_representante').val(objData.padre.estado_civil);
                $(document).find('#nivel_instruccion_representante').val(objData.padre.nivel_instruccion);
                $(document).find('#ocupacion_representante').val(objData.padre.ocupacion);
                $(document).find('#lugar_trabajo_representante').val(objData.padre.lugar_trabajo);
                $(document).find('#habilidad_representante').val(objData.padre.habilidad);
                $(document).find('#direccion_residencia_representante').val(objData.padre.direccion);
                $(document).find('#telefono_movil_representante').val(objData.padre.telefono_movil);
                $(document).find('#telefono_residencial_representante').val(objData.padre.telefono_residencia);
                $(document).find('#telefono_trabajo_representante').val(objData.padre.telefono_trabajo);
                $(document).find('#religion_representante').val(objData.padre.religion);
                $(document).find('#otra_religion_representante').val(objData.padre.otra_religion);

                $(document).find("#foto-representante-preview div").html(objData.padre.preview_foto.name);
                $(document).find("#foto-representante-preview img").attr('src', URL.createObjectURL(objData.padre.preview_foto));

                if(objData.padre.vive_estudiante == 'Y') {
                    $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
                } else {
                    $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
                }

                if(objData.padre.otra_religion == 10) {
                    $(document).find('#religion_representante_otro_container').css('display', 'block');
                } else {
                    $(document).find('#religion_representante_otro_container').css('display', 'none');
                }
            }
            $("input[type='text']").attr('disabled', 'disabled');
            $("input[type='email']").attr('disabled', 'disabled');
            $("input[type='number']").attr('disabled', 'disabled');
            $("input[type='radio']").attr('disabled', 'disabled');
            $("textarea").attr('disabled', 'disabled');
            $("select").attr('disabled', 'disabled');
            $("#selectMadre").removeAttr('disabled');
            $("#selectPadre").removeAttr('disabled');
        } else {
            $(document).find('#nombre_representante').val('');
            $(document).find('#apellido_representante').val('');
            $(document).find('#tipo_documento_representante').val('V');
            $(document).find('#documento_representante').val('');
            $(document).find('#fecha_nacimiento_representante').val('');
            $(document).find('#nacionalidad_representante').val('VEN');
            $(document).find('#edad_representante').val('');
            $(document).find('#estado_civil_representante').val('N');
            $(document).find('#nivel_instruccion_representante').val('N');
            $(document).find('#ocupacion_representante').val('');
            $(document).find('#lugar_trabajo_representante').val('');
            $(document).find('#habilidad_representante').val('');
            $(document).find('#direccion_residencia_representante').val('');
            $(document).find('#telefono_movil_representante').val('');
            $(document).find('#telefono_residencial_representante').val('');
            $(document).find('#telefono_trabajo_representante').val('');
            $(document).find('#religion_representante').val('');
            //preview foto
            $(document).find("#foto-representante-preview div").html('<span>+</span>');
            $(document).find("#foto-representante-preview img").attr('src', '../assets/img/images-empty.jpg');
            
            $("input[type='text']").removeAttr('disabled', 'disabled');
            $("input[type='email']").removeAttr('disabled', 'disabled');
            $("input[type='number']").removeAttr('disabled', 'disabled');
            $("input[type='radio']").removeAttr('disabled', 'disabled');
            $("textarea").removeAttr('disabled');
            $("select").removeAttr('disabled');

            //mantener desabilitado fecha y edad
            let fechaRepresentante = $(document).find('#fecha_nacimiento_representante')[0];
            let edadRepresentante = $(document).find('#edad_representante')[0];
            $(fechaRepresentante).attr('disabled', 'disabled');
            $(edadRepresentante).attr('disabled', 'disabled');
        }

        //función para reinicializar todas las etiquetas de Materialise en la página si está agregando entradas dinámicamente.
        M.updateTextFields();
        $('select').formSelect();
    })

    $(document).on('click', '#selectMadre', function(e) {
        $(document).find('#nombre_representante').val(objData.madre.nombre);
        $(document).find('#apellido_representante').val(objData.madre.apellido);
        $(document).find('#tipo_documento_representante').val(objData.madre.tipo_documento);
        $(document).find('#documento_representante').val(objData.madre.documento);
        $(document).find('#fecha_nacimiento_representante').val(DateSlashFormat(objData.madre.fecha_nacimiento));
        $(document).find('#nacionalidad_representante').val(objData.madre.nacionalidad);
        $(document).find('#edad_representante').val(objData.madre.edad);
        $(document).find('#estado_civil_representante').val(objData.madre.estado_civil);
        $(document).find('#nivel_instruccion_representante').val(objData.madre.nivel_instruccion);
        $(document).find('#ocupacion_representante').val(objData.madre.ocupacion);
        $(document).find('#lugar_trabajo_representante').val(objData.madre.lugar_trabajo);
        $(document).find('#habilidad_representante').val(objData.madre.habilidad);
        $(document).find('#direccion_residencia_representante').val(objData.madre.direccion);
        $(document).find('#telefono_movil_representante').val(objData.madre.telefono_movil);
        $(document).find('#telefono_residencial_representante').val(objData.madre.telefono_residencia);
        $(document).find('#telefono_trabajo_representante').val(objData.madre.telefono_trabajo);
        $(document).find('#religion_representante').val(objData.madre.religion);

        //preview foto
        $(document).find("#foto-representante-preview div").html(objData.madre.preview_foto.name);
        $(document).find("#foto-representante-preview img").attr('src', URL.createObjectURL(objData.madre.preview_foto));

        if(objData.madre.vive_estudiante == 'Y') {
            $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
            $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
        } else {
            $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
            $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
        }

        //función para reinicializar todas las etiquetas de Materialise en la página si está agregando entradas dinámicamente.
        M.updateTextFields();
        $('select').formSelect();
    })

    $(document).on('click', '#selectPadre', function(e) {
        $(document).find('#nombre_representante').val(objData.padre.nombre);
        $(document).find('#apellido_representante').val(objData.padre.apellido);
        $(document).find('#tipo_documento_representante').val(objData.padre.tipo_documento);
        $(document).find('#documento_representante').val(objData.padre.documento);
        $(document).find('#fecha_nacimiento_representante').val(DateSlashFormat(objData.padre.fecha_nacimiento));
        $(document).find('#nacionalidad_representante').val(objData.padre.nacionalidad);
        $(document).find('#edad_representante').val(objData.padre.edad);
        $(document).find('#estado_civil_representante').val(objData.padre.estado_civil);
        $(document).find('#nivel_instruccion_representante').val(objData.padre.nivel_instruccion);
        $(document).find('#ocupacion_representante').val(objData.padre.ocupacion);
        $(document).find('#lugar_trabajo_representante').val(objData.padre.lugar_trabajo);
        $(document).find('#habilidad_representante').val(objData.padre.habilidad);
        $(document).find('#direccion_residencia_representante').val(objData.padre.direccion);
        $(document).find('#telefono_movil_representante').val(objData.padre.telefono_movil);
        $(document).find('#telefono_residencial_representante').val(objData.padre.telefono_residencia);
        $(document).find('#telefono_trabajo_representante').val(objData.padre.telefono_trabajo);
        $(document).find('#religion_representante').val(objData.padre.religion);

        //preview foto
        $(document).find("#foto-representante-preview div").html(objData.padre.preview_foto.name);
        $(document).find("#foto-representante-preview img").attr('src', URL.createObjectURL(objData.padre.preview_foto));

        if(objData.padre.vive_estudiante == 'Y') {
            $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
            $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
        } else {
            $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
            $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
        }

        //función para reinicializar todas las etiquetas de Materialise en la página si está agregando entradas dinámicamente.
        M.updateTextFields();
        $('select').formSelect();
    })

    //otra religion estudiante
    $(document).on('change', '#religion_representante' ,function() {
        otherReligion('religion_representante');
    })

    //form 4 submit
    $(document).on('submit', '#form4', function(e) {
        e.preventDefault();

        var foto_preview = '';
        var foto_representante = '';

        var swicth = handleSwichtGet('selectRepresentante');
        var option_madre = handleSwichtGet('selectMadre');
        var parentesco = '';

        if(swicth) {
            parentesco = option_madre == true ? 'Madre' : 'Padre';
            foto_preview = option_madre == true ? objData.madre.preview_foto : objData.padre.preview_foto;
            foto_representante = option_madre == true ? objData.madre.foto_madre : objData.padre.foto_padre;
        } else {
            //foto representante
            formData.append("foto_representante",  $(document).find('#foto-representante')[0].files[0]);
            parentesco = $(document).find('#parentesco').val();
            foto_preview = $(document).find('#foto-representante')[0].files[0];
            foto_representante = formData;
        }

        var lengthFoto = $(document).find('#foto-representante')[0].files.length;
        if(getInvalidData()) { //si es true entonces hay campos invalidos
            $(document).find('.btnform').html('SIGUIENTE');
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else if(lengthFoto == 0) {
            $(document).find('#alerta_foto').html(alert_Images('Debe Ingresar una foto, es requicito obligatorio', 'danger'))
            window.scrollTo({
                top: 500,
                behavior: "smooth"
            });
        } else {
            //VALIDACION DE DATOS EXISTENTES
            const unique = [
                {'cedula': $(document).find('#documento_representante').val()},
                {'telf_movil': $(document).find('#telefono_movil_representante').val()},
                {'telf_residencia': $(document).find('#telefono_residencial_representante').val()}
            ];

            dataUnique(unique)
                .then((resp) => {
                    //datos
                    if(resp == true) {
                        //datos
                        objData.representante = {
                            'nombre' : $(document).find('#nombre_representante').val(),
                            'apellido': $(document).find('#apellido_representante').val(),
                            'tipo_documento': $(document).find('#tipo_documento_representante').val(),
                            'documento': $(document).find('#documento_representante').val(),
                            'fecha_nacimiento': DateGuionFormat($(document).find('#fecha_nacimiento_representante').val()),
                            'nacionalidad': $(document).find('#nacionalidad_representante').val(),
                            'edad': $(document).find('#edad_representante').val(),
                            'estado_civil' : $(document).find('#estado_civil_representante').val(),
                            'nivel_instruccion' : $(document).find('#nivel_instruccion_representante').val(),
                            'ocupacion' : $(document).find('#ocupacion_representante').val(),
                            'lugar_trabajo' : $(document).find('#lugar_trabajo_representante').val(),
                            'habilidad' : $(document).find('#habilidad_representante').val(),
                            'direccion' : $(document).find('#direccion_residencia_representante').val(),
                            'telefono_movil' : $(document).find('#telefono_movil_representante').val(), 
                            'telefono_residencia' : $(document).find('#telefono_residencial_representante').val(),
                            'telefono_trabajo' : $(document).find('#telefono_trabajo_representante').val(),
                            'religion' : $(document).find('#religion_representante').val(),
                            'otra_religion' : $(document).find('#otra_religion_representante').val(),
                            'vive_estudiante' : $(document).find('#vive_estudiante_representante').prop('checked') == true ? 'Y' : 'N',
                            'parentesco' : parentesco,
                            //'foto_representante' : foto_representante,
                            //'preview_foto' : foto_preview
                        };

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
                                console.log('entramos');
                                let formDatax = new FormData();
                                appendObjectToFormData(formDatax, objData);
                                console.log(formDatax);
                                $.ajax({
                                    url: "../controllers/controller_registro.php",
                                    type: "POST",
                                    data: formDatax,
                                    processData: false,  // Indica a jQuery que no procese los datos
                                    contentType: false,  // Indica a jQuery que no establezca el tipo de contenido
                                    success: function(response) {
                                        console.log(response);
                                        var resp = jQuery.parseJSON(response);
                                        if(resp.STATUS == 'SUCCESS') {
                                            Swal.fire({
                                                title: resp.MESSAGES,
                                                text: 'Los datos seran procesados, el usuario sera habilitado una vez se formalice la inscripción',
                                                icon: 'success',
                                                confirmButtonColor: '#e0bb66'
                                            }).then((result2) => {
                                                if(result2.isConfirmed) {
                                                    $.post("../controllers/controller_registro.php", {type : 'downloadTemplatePreRegistro', id_estudiante : resp.DATA}, function(response) {
                                                        console.log(response);
                                                    });
                                                }
                                            });
                                        }
                                    },
                                    error: function(xhr, status, error) {
                                        console.error("Error en la petición AJAX:", status, error);
                                    }
                                });
                                /*$.post("../controllers/controller_registro.php", objData, function(response) {
                                    var resp = jQuery.parseJSON(response);
                                    if(resp.STATUS == 'SUCCESS') {
                                        Swal.fire({
                                                title: resp.MESSAGES,
                                                text: 'Los datos seran procesados, el usuario sera habilitado una vez se formalice la inscripción',
                                                icon: 'success',
                                                confirmButtonColor: '#e0bb66'
                                        }).then((result2) => {
                                            if(result2.isConfirmed) {
                                                $.post("../controllers/controller_registro.php", {type : 'downloadTemplatePreRegistro', id_estudiante : resp.DATA}, function(response) {
                                                    console.log(response);
                                                })
                                            }
                                        })
                                    }
                                });*/

                                /*$.ajax({
                                    type: "POST",
                                    enctype: 'multipart/form-data',
                                    url: '../controllers/controller_registro.php',
                                    data: objData,
                                    success: function(resp) {
                                        if(resp.STATUS == 'SUCCESS') {
                                            Swal.fire({
                                                    title: resp.MESSAGES,
                                                    text: 'Los datos seran procesados, el usuario sera habilitado una vez se formalice la inscripción',
                                                    icon: 'success',
                                                    confirmButtonColor: '#e0bb66'
                                            }).then((result2) => {
                                                if(result2.isConfirmed) {
                                                    $.post("../controllers/controller_registro.php", {type : 'downloadTemplatePreRegistro', id_estudiante : resp.DATA}, function(response) {
                                                        console.log(response);
                                                    })
                                                }
                                            })
                                        }
                                    },
                                    error: function(error) {
                                    console.log(error);
                                    }
                                });*/
                            }
                        })
                    } else {
                        $(document).find('.btnform').html('SIGUIENTE');
                        $(document).find('#alerta_form').html(alert_Images(`el ${resp.dato}: <b>${resp.value}</b> ya existe en nuestra base de datos, "Por favor verificar o ponerse en contacto con nuestro equipo de soporte."`, 'danger'))
                        window.scrollTo({
                            top: 500,
                            behavior: "smooth"
                        });
                    }
                })
            
        }
    })


    $(document).on('change', '#estado_estudiante', async function(e) {
        var idEstado = e.target.value;
        var template = '';
        getMunicipio(idEstado).then((response) => {
            $(response).each((index, municipio) => {
                template += `
                    <option value="${municipio.id_municipio}">${municipio.municipio}</option>
                `;
            })
    
            $(document).find('#municipio_estudiante').html(template);
            if(Object.keys(objData.estudiante).length > 0) {
                $(document).find('#municipio_estudiante').val(objData.estudiante.municipio)
            } else {
                console.log('el objeto no se esta llenando antes el trigger');
            }
            $('select').formSelect();
        })
    }) 

   


    //refactor foto estudiante
    function uploadPhotography(idBoxImages) {
        document.querySelector("#"+idBoxImages).addEventListener("change", function(elm) {
            //ELEMENTOS
            let file = elm.target.files[0];
            let url = URL.createObjectURL(file);
            const loadFaceDetection = $(document).find('#load_facedetection');
    
            //DINAMICS
            handleSpinnerLoad(loadFaceDetection);
            $(document).find('#alerta_foto').html('');
            canvas.width = canvas.width;
            $(document).find('#alerta_foto').html('');
            $(document).find('#fitem1').css({
                "background-color" : '#fff',
                "color" : '#856404'
            });
            $(document).find('#fitem2').css({
                "background-color" : '#fff',
                "color" : '#856404'
            });
            $(document).find('#fitem3').css({
                "background-color" : '#fff',
                "color" : '#856404'
            });
            $(document).find('#fitem4').css({
                "background-color" : '#fff',
                "color" : '#856404'
            });
            
            //VALIDATIONS
            if(formatImages(elm, file)) {
                previewBeforeUpload(idBoxImages, elm); //PREVIEW
                $(document).find('#fitem1').css({
                    "background-color" : '#d4edda',
                    "color" : '#155724'
                });
                dimentionsImages(file, (result) => {
                    if(result) {
                        $(document).find('#fitem2').css({
                            "background-color" : '#d4edda',
                            "color" : '#155724'
                        });
                        if(sizeImages(elm)) {
                            $(document).find('#fitem3').css({
                                "background-color" : '#d4edda',
                                "color" : '#155724'
                            });
                            verifyFaces('foto_img', 'canvas')
                                .then((response) => {
                                    $(loadFaceDetection).html('');
                                    if(response.length == 1) {
                                        $(document).find('#fitem4').css({
                                            "background-color" : '#d4edda',
                                            "color" : '#155724'
                                        });
                                        $(document).find('#alerta_foto').html(alert_Images('Imagen validada correctamente', 'success'));
                                    } else {
                                        elm.target.value = '';
                                        $(document).find('#fitem4').css({
                                            "background-color" : '#f8d7da',
                                            "color" : '#721c24'
                                        });
                                        $(document).find('#alerta_foto').html(alert_Images('Se requiere maximo un rostro.', 'danger'));
                                    }
                                });
                        } else {
                            elm.target.value = '';
                            $(loadFaceDetection).html('');
                            $(document).find('#alerta_foto').html(alert_Images('El peso exede el permitido', 'danger'));
                            $(document).find('#fitem3').css({
                                "background-color" : '#f8d7da',
                                "color" : '#721c24'
                            });
                        }
                    } else {
                        elm.target.value = '';
                        $(loadFaceDetection).html('');
                        $(document).find('#alerta_foto').html(alert_Images('Las medidas no son las correctas', 'danger'));
                        $(document).find('#fitem2').css({
                            "background-color" : '#f8d7da',
                            "color" : '#721c24'
                        });
                    }
                })
            } else {
                elm.target.value = '';
                $(loadFaceDetection).html('');
                $(document).find('#alerta_foto').html(alert_Images('debe subir una imagen .jpg | .png | .jpeg', 'danger'));
                $(document).find('#fitem1').css({
                    "background-color" : '#f8d7da',
                    "color" : '#721c24'
                });
            }
        })
    }

    function otherReligion(id) {
        let religion = $(document).find('#'+id).val();
        if(religion == 4) {
            $(document).find('#'+id+'_otro_container').css({'display' : 'block'});
            $(document).find('#otra_'+id).attr('required', 'required');
        } else {
            $(document).find('#'+id+'_otro_container').css({'display' : 'none'});
            $(document).find('#otra_'+id).removeAttr('required');
        }
    }

    function generateTemplate_estados() {
        var template = '';
        $(objEstados).each((index, estado) => {
            template += `<option value="${estado.id_estado}">${estado.estado}</option>`;
        });

        return template;
    }

    function generateTemplate_religion() {
        var template = '';
        $(objReligiones).each((index, religion) => {
            template += `<option value="${religion.id}">${religion.religion}</option>`;
        });

        return template;
    }

    function generateTemplate_secciones(turno) {
        let template = '';
        console.log(objSecciones);
        console.log('el turno');
        console.log(turno);
        $(objSecciones).each((index, seccion) => {
            console.log(seccion);
            if(turno != 'manana') {
                if(seccion != 'C') {
                    template += `<option value="${seccion.id}">${seccion.seccion}</option>`;
                }
            } else {
                template += `<option value="${seccion.id}">${seccion.seccion}</option>`;
            }
        });

        return template;
    }

    function generateTemplate_latam() {
        var template = '';
        console.log('latam: ');
        console.log(objLatam);

        // Encuentra Venezuela y quítala de objLatam
        var venezuela = objLatam.find(pais => pais.iso3 === 'VEN');

        // Agrega Venezuela primero si existe
        if (venezuela) {
            template += `<option value="${venezuela.iso3}">${venezuela.nicename} <span><b>*</b></span></option>`;
        }

        $(objLatam).each((index, pais) => {
            if(pais.iso3 !== 'VEN') {
                template += `<option value="${pais.iso3}">${pais.nicename}</option>`;
            }
        });

        return template;
    }

    function generateTemplate_codigos() {
        var template = '';

        // Encuentra Venezuela y quítala de objLatam
        var venezuelaCode = objLatam.find(pais => pais.iso3 === 'VEN');

        // Agrega Venezuela primero si existe
        if (venezuelaCode) {
            template += `<option value="${venezuelaCode.phonecode}">${'('+venezuelaCode.phonecode +') '+venezuelaCode.nicename}<span><b>*</b></span></option>`;
        }

        $(objLatam).each((index, pais) => {
            if(pais.iso3 !== 'VEN') {
                template += `<option value="${pais.phonecode}">${'('+pais.phonecode +') '+pais.nicename}</option>`;
            }
        });

        return template;
    }


    /*funcion fetch municipios*/
    const getMunicipio = async (idEstado) => {
        var response =  await fetch('../controllers/controller_coordenadas.php?type=municipio&id_estado='+idEstado);
        var arrData = await response.json();
        return arrData
    }  
    
    //template upload foto
    function template_uploadPhotograpy(id) {
        var template = `
            <h4>Fotografia</h4>
            <span id="alerta_foto"></span>
            <div class="grid">
                <span id="load_facedetection"></span>
                <div class="form-element">
                    <input type="file" id="${id}" accept="image/*" />
                    <label for="${id}" id="${id + '-preview'}">
                        <img id="foto_img" src="../assets/img/images-empty.jpg" alt=""/>
                        
                        <canvas id="canvas" width="200" height="200"></canvas>
                        <div>
                            <span>+</span>
                        </div>
                    </label>
                </div>
            </div>
            <div class="alert alert-warning" role="alert" style="margin-top: 10px;">
                <span style="color: black;"><b>La fotografia debe cumplir con los siguientes términos:</b></span>
                <br /><br />
                <ul>
                    <li id="fitem1" class="items_foto"> <b>* Formato .jpg | .jpeg | .png</b></li>
                    <li id="fitem2" class="items_foto"> <b>* Medidas 200x200 pixeles. </b></li>
                    <li id="fitem3" class="items_foto"> <b>* Peso MAX ( 100KB )</b></li>
                    <li id="fitem4" class="items_foto"> <b>* Un rostro verificable </b></li>
                </ul>
            </div>
        `;

        return template;
    }

    //funcion para agregar todo el objeto al formData
    function appendObjectToFormData(formData, obj, namespace) {
        for (let property in obj) {
            if (obj.hasOwnProperty(property)) {
                const formKey = namespace ? `${namespace}[${property}]` : property;
                
                if (obj[property] instanceof File) {
                    // Añadir archivos directamente
                    formData.append(formKey, obj[property]);
                } else if (typeof obj[property] === 'object' && obj[property] !== null) {
                    // Recursión para objetos anidados
                    appendObjectToFormData(formData, obj[property], formKey);
                } else {
                    // Añadir propiedades normales
                    formData.append(formKey, obj[property]);
                }
            }
        }
    }
        
})   
     