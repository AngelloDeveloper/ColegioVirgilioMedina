$(function() {

    const objData = {
        'estudiante' : {},
        'detalle_estudiante' : {},
        'madre' : {},
        'padre' : {},
        'representante' : {},
        'type' : 'setPreRegistro'
    }

    const arrFormularios = {
        formulario1: {
            title : 'Datos del Estudiante',
            form: `
                <form id="form1">
                    <div class="container p-4">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_estudiante" type="text" class="form-control" required/>
                                    <label for="nombre_estudiante">Nombres <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_estudiante" type="text" class="form-control" required/>
                                    <label for="apellido_estudiante">Apellidos <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="input-field">
                                    <select id="tipo_documento_estudiante">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="documento_estudiante" type="text" class="form-control" required/>
                                    <label for="documento_estudiante">Documento de Identidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="fechaNacimiento_estudiante"  type="text" class="datepicker" required/>
                                    <label for="fechaNacimiento_estudiante">Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_estudiante" type="number" class="form-control" required/>
                                    <label for="edad_estudiante">Edad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_estudiante">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_estudiante">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="email_estudiante" type="email" class="form-control" required/>
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
                                <label>Genero <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <span>
                                        <label>
                                            <input id="masculino_estudiante" name="genero" checked="checked" class="with-gap"  type="radio"  /> 
                                            <span>Masculino</span>
                                        </label>
                                    </span>
                                    <span>
                                        <label>
                                            <input id="femenino_estudiante" name="genero" type="radio" class="with-gap"  class="radio ml-4" />
                                            <span>Femenino</span>
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
                                    </select>
                                    <label for="tallaCamisa_estudiante">Talla de Camisa</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="tallaPatalon_estudiante">
                                        <option value="N">Seleccionar...</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="U">U</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                    <label for="tallaPatalon_estudiante">Talla de Pantalon</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="estatura_estudiante" type="text" />
                                    <label for="estatura_estudiante">Estatura (Mts)</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="peso_estudiante" type="number" />
                                    <label for="peso_estudiante">Peso (Kg)</label>
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
                                    <label for="grupoSanguineo_estudiante">Grupo Sanguineo</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="discapacidad_estudiante" class="materialize-textarea" ></textarea>
                                    <label for="discapacidad_estudiante">Discapacidad</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>Informe Médico</label>
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
                                <div id="content_informe_medico" style="display: none">
                                    <label>Adjuntar Informe</label>
                                    <div class="file-field input-field pt-2">
                                        <div class="btn materialcustom">
                                            <span>File</span>
                                            <input type="file" multiple>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input id="informeMedicoDocumento" class="file-path validate" type="text" placeholder="Upload one or more files">
                                        </div>
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
                                        <input id="alergicoDescripcion" type="text" />
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
                                        <input id="enfermedadDescripcion" type="text"/>
                                        <label for="enfermedadDescripcion">¿ cual ?</label>
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
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_madre" type="text" required />
                                    <label for="nombre_madre">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_madre" type="text" required />
                                    <label for="apellido_madre">Apellido <span style="color: #960032;"><b>*</b></span></label>
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
                                    <input id="documento_madre" type="text" required/>
                                    <label for="documento_madre">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="fecha_nacimiento_madre" type="text" class="datepicker" required/>
                                    <label for="fecha_nacimiento_madre">Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_madre">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_madre">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_madre" type="number" required/>
                                    <label for="edad_madre">Edad <span style="color: #960032;"><b>*</b></span></label>
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
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                    <label for="nivel_instruccion_madre">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_madre" class="materialize-textarea" required></textarea>
                                    <label for="ocupacion_madre">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_madre" class="materialize-textarea" required></textarea>
                                    <label for="lugar_trabajo_madre">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_madre" class="materialize-textarea"></textarea>
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
                                <div class="form-group input-field">
                                    <input id="telefono_movil_madre" type="number" required/>
                                    <label for="telefono_movil_madre">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_madre" type="number" />
                                    <label for="telefono_residencial_madre">Telefono Residencial </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_trabajo_madre" type="number" />
                                    <label for="telefono_trabajo_madre">Telefono del lugar de trabajo </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="religion_madre" type="text" />
                                    <label for="religion_madre">Religion</label>
                                </div>
                            </div>
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
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="nombre_padre" type="text" required />
                                    <label for="nombre_padre">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_padre" type="text" required />
                                    <label for="apellido_padre">Apellido <span style="color: #960032;"><b>*</b></span></label>
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
                                    <input id="documento_padre" type="text" required/>
                                    <label for="documento_padre">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="fecha_nacimiento_padre" type="text" class="datepicker" required/>
                                    <label for="fecha_nacimiento_padre">Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_padre">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_padre">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_padre" type="number" required/>
                                    <label for="edad_padre">Edad <span style="color: #960032;"><b>*</b></span></label>
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
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                    <label for="nivel_instruccion_padre">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_padre" class="materialize-textarea" required></textarea>
                                    <label for="ocupacion_padre">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_padre" class="materialize-textarea" required></textarea>
                                    <label for="lugar_trabajo_padre">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_padre" class="materialize-textarea" ></textarea>
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
                                <div class="form-group input-field">
                                    <input id="telefono_movil_padre" type="number"  required/>
                                    <label for="telefono_movil_padre">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_padre" type="number" />
                                    <label for="telefono_residencial_padre">Telefono Residencial </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <label for="telefono_trabajo_padre">Telefono del lugar de trabajo </label>
                                    <input id="telefono_trabajo_padre" type="number" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="religion_padre" type="text" />
                                    <label for="religion_padre">Religion</label>
                                </div>
                            </div>
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
                                    <input id="nombre_representante" type="text" required />
                                    <label for="nombre_representante">Nombre <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="apellido_representante" type="text" required />
                                    <label for="apellido_representante">Apellido <span style="color: #960032;"><b>*</b></span></label>
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
                                    <input id="documento_representante" type="text" required/>
                                    <label for="documento_representante">Documento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="fecha_nacimiento_representante" type="text" class="datepicker" required/>
                                    <label for="fecha_nacimiento_representante">Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <select id="nacionalidad_representante">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                    <label for="nacionalidad_representante">Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="edad_representante" type="number" required/>
                                    <label for="edad_representante">Edad <span style="color: #960032;"><b>*</b></span></label>
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
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                    <label for="nivel_instruccion_representante">Nivel de Instruccion</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="ocupacion_representante" class="materialize-textarea" required></textarea>
                                    <label for="ocupacion_representante">Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="lugar_trabajo_representante" class="materialize-textarea" required></textarea>
                                    <label for="lugar_trabajo_representante">Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <textarea id="habilidad_representante" class="materialize-textarea"></textarea>
                                    <label for="habilidad_representante">Habilidad</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <label for="direccion_residencia_representante">Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_representante" class="materialize-textarea" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_movil_representante" type="number" required/>
                                    <label for="telefono_movil_representante">Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_residencial_representante" type="number" />
                                    <label for="telefono_residencial_representante">Telefono Residencial</label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="telefono_trabajo_representante" type="number" />
                                    <label for="telefono_trabajo_representante">Telefono del lugar de trabajo </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group input-field">
                                    <input id="religion_representante" type="text" />
                                    <label for="religion_representante">Religion</label>
                                </div>
                            </div>
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

    function handleSwicht (input, content, ret=false, content2='') {
        var swicth = $(document).find('#'+input)[0];
        var checked = $(swicth).prop('checked');
        
        if(checked) {
            $('#'+content).css({'display':'block'});
            if(content2 != '') {
                $('#'+content2).css({'display':'none'});
            }
        } else {
            $('#'+content).css({'display':'none'});
            if(content2 != '') {
                $('#'+content2).css({'display':'block'});
            }
        }

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

    function reloadMaterial() {
        var header = `
            <!--Import materialize.css-->
            <link type="text/css" rel="stylesheet" href="../assets/materialize/css/materialize.min.css"  media="screen,projection"/>
            <link type="text/css" rel="stylesheet" href="../assets/materialize/css/custom.css"  media="screen,projection"/>
            <!-- CSS Files -->
            <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="css/registro.css" />
            <!--JavaScript at end of body for optimized loading-->
            <script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>
            <script type="text/javascript" src="../assets/materialize/js/init.js"></script>
        `;
        $('#reloadMaterial').html(header);
    }

    $(document).on('click', '#informeMedico', function(e) {
        handleSwicht ('informeMedico', 'content_informe_medico');
    })

    $(document).on('click', '#alergico', function(e) {
        handleSwicht ('alergico', 'content_alergico');
    })

    $(document).on('click', '#enfermedad', function(e) {
        handleSwicht ('enfermedad', 'content_enfermedad');
    })

    $(document).on('click', '#medicamentos', function(e) {
        handleSwicht ('medicamentos', 'content_medicamentos');
    })

    $('.title-tap').html(arrFormularios.formulario1.title);
    $('.formularios').html(arrFormularios.formulario1.form);

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
    $(document).on('submit', '#form1', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        //guardando datos
        objData.estudiante = {
            'nombre' : $(document).find('#nombre_estudiante').val(),
            'apellido': $(document).find('#apellido_estudiante').val(),
            'tipo_documento': $(document).find('#tipo_documento_estudiante').val(),
            'documento': $(document).find('#documento_estudiante').val(),
            'fecha_nacimiento': DateGuionFormat($(document).find('#fechaNacimiento_estudiante').val()),
            'edad': $(document).find('#edad_estudiante').val(),
            'nacionalidad': $(document).find('#nacionalidad_estudiante').val(),
            'email': $(document).find('#email_estudiante').val(),
            'direccion': $(document).find('#direccion_estudiante').val(),
            'genero' : $(document).find('#masculino_estudiante').prop('checked') == true ? 'M' : 'F'
        };

        objData.detalle_estudiante = {
            'talla_camisa' : $(document).find('#tallaCamisa_estudiante').val(),
            'talla_pantalon': $(document).find('#tallaPatalon_estudiante').val(),
            'estatura': $(document).find('#estatura_estudiante').val(),
            'peso': $(document).find('#peso_estudiante').val(),
            'grupo_sanguineo': $(document).find('#grupoSanguineo_estudiante').val(),
            'discapacidad': $(document).find('#discapacidad_estudiante').val(),
            'informeMedico': $(document).find('#informeMedico').prop('checked') == true ? 'Y' : 'N',
            'url_informe_medico' :  $(document).find('#informeMedicoDocumento').val(),
            'alergico' : $(document).find('#alergico').prop('checked') == true ? 'Y' : 'N',
            'alergia' : $(document).find('#alergicoDescripcion').val(),
            'enfermo' : $(document).find('#enfermedad').prop('checked') == true ? 'Y' : 'N',
            'enfermedad' : $(document).find('#enfermedadDescripcion').val(),
            'medicado' : $(document).find('#medicamentos').prop('checked') == true ? 'Y' : 'N',
            'medicamento' : $(document).find('#medicamentosDescripcion').val()
        }

        setTimeout(() => {
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
        },1500);
    });

    //form 2
    $(document).on('submit', '#form2', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        //datos
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
            'vive_estudiante' : $(document).find('#vive_estudiante_madre').prop('checked') == true ? 'Y' : 'N'
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
        },1500);
    })

    //form 3
    $(document).on('submit', '#form3', function(e) {
        e.preventDefault();
        handleSpinnerLoad('.btnform');

        //datos
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
            'vive_estudiante' : $(document).find('#vive_estudiante_padre').prop('checked') == true ? 'Y' : 'N'
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
        },1500);
    })

    //form 4 intercative
    $(document).on('click', '#selectRepresentante', function(e) {
        var swicth = handleSwicht ('selectRepresentante', 'seleccionar_representante', true, 'seleccionar_parenteco');
        var selectMadre = $(document).find('#selectMadre').prop('checked');

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
                if(objData.madre.vive_estudiante == 'Y') {
                    $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
                } else {
                    $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
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
                if(objData.padre.vive_estudiante == 'Y') {
                    $(document).find('#vive_estudiante_representante_n').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_y').attr('checked', 'checked');
                } else {
                    $(document).find('#vive_estudiante_representante_y').removeAttr('checked');
                    $(document).find('#vive_estudiante_representante_n').attr('checked', 'checked');
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
            
            $("input[type='text']").removeAttr('disabled', 'disabled');
            $("input[type='email']").removeAttr('disabled', 'disabled');
            $("input[type='number']").removeAttr('disabled', 'disabled');
            $("input[type='radio']").removeAttr('disabled', 'disabled');
            $("textarea").removeAttr('disabled');
            $("select").removeAttr('disabled');
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

    //form 4 submit
    $(document).on('submit', '#form4', function(e) {
        e.preventDefault();

        var swicth = handleSwichtGet('selectRepresentante');
        var option_madre = handleSwichtGet('selectMadre');
        var parentesco = '';

        if(swicth) {
            parentesco = option_madre == true ? 'Madre' : 'Padre';
        } else {
            parentesco = $(document).find('#parentesco').val();
        }

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
            'vive_estudiante' : $(document).find('#vive_estudiante_representante').prop('checked') == true ? 'Y' : 'N',
            'parentesco' : parentesco
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

})