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
                                <div class="form-group">
                                    <label>Nombres <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="nombre_estudiante" type="text" placeholder="Nombres" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Apellidos <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="apellido_estudiante" type="text" placeholder="Apellidos" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="tipo_documento_estudiante" class="form-control input">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Documento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="documento_estudiante" type="text" placeholder="12345678" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="fechaNacimiento_estudiante" type="date" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Edad <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="edad_estudiante" type="number" placeholder="13" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="nacionalidad_estudiante" class="form-control input">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Correo Electrónico <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="email_estudiante" type="email" class="form-control input" placeholder="email@gmail.com" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Dirección de Residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_estudiante" type="text" placeholder="urbanización calle #" class="form-control input" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <label>Genero <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <input id="masculino_estudiante" type="radio" name="genero" class="radio" checked="checked" /> Masculino
                                    <input id="femenino_estudiante" type="radio" name="genero" class="radio ml-4" /> Femenino
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Talla de Camisa</label>
                                    <select id="tallaCamisa_estudiante" class="form-control input">
                                        <option value="N">Seleccionar...</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="U">U</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Talla de Pantalon</label>
                                    <select id="tallaPatalon_estudiante" class="form-control input">
                                        <option value="N">Seleccionar...</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="U">U</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        
                            <div class="col-4">
                                <label>Estatura (Mts)</label>
                                <div class="form-group">
                                    <input id="estatura_estudiante" type="text" placeholder="ej: 1.64" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Peso (Kg)</label>
                                    <input id="peso_estudiante" type="number" placeholder="ej: 58" class="form-control input" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Grupo Sanguineo</label>
                                    <select id="grupoSanguineo_estudiante" class="form-control input">
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
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Discapacidad</label>
                                    <textarea id="discapacidad_estudiante" type="text" placeholder="mencione su discapacidad" class="form-control input"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>Informe Médico</label>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="informeMedico">
                                            <label class="custom-control-label" for="informeMedico">No / Si</label>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_informe_medico" style="display: none" class="form-group">
                                    <label>Adjuntar Informe</label>
                                    <div class="form-group pt-2">
                                        <input id="informeMedicoDocumento" type="file" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Es Alergico ?</label>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="alergico">
                                            <label class="custom-control-label" for="alergico">No / Si</label>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_alergico" style="display:none" class="form-group">
                                    <label>¿ a que ?</label>
                                    <div class="form-group pt-2">
                                        <input id="alergicoDescripcion" type="text" placeholder="indicar alergia" class="form-control input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Padece alguna enfermedad ?</label>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="enfermedad">
                                            <label class="custom-control-label" for="enfermedad">No / Si</label>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_enfermedad" style="display:none" class="form-group">
                                    <label>¿ cual ?</label>
                                    <div class="form-group pt-2">
                                        <input id="enfermedadDescripcion" type="text" placeholder="indicar enfermedad" class="form-control input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <center>
                                        <label>¿ Consume Medicamentos ?</label>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="medicamentos">
                                            <label class="custom-control-label" for="medicamentos">No / Si</label>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="content_medicamentos" style="display:none" class="form-group">
                                    <label>Mencionelos</label>
                                    <div class="form-group pt-2">
                                        <textarea id="medicamentosDescripcion" placeholder="indicar Medicamentos" class="form-control input" ></textarea>
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
                                <div class="form-group">
                                    <label>Nombre <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="nombre_madre" type="text" placeholder="indicar Nombre de la madre" class="form-control input" required />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Apellido <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="apellido_madre" type="text" placeholder="indicar Apellido de la madre" class="form-control input" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="tipo_documento_madre" class="form-control input">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Documento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="documento_madre" type="text" placeholder="12345678" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="fecha_nacimiento_madre" type="date" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="nacionalidad_madre" class="form-control input">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Edad <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="edad_madre" type="number" placeholder="indique edad" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Estado civil</label>
                                    <select id="estado_civil_madre" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nivel de Instruccion</label>
                                    <select id="nivel_instruccion_madre" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="ocupacion_madre" type="text" placeholder="indique su ocupacion" class="form-control input" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="lugar_trabajo_madre" type="text" placeholder="indique su lugar de trabajo" class="form-control input" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Habilidad</label>
                                    <textarea id="habilidad_madre" type="text" placeholder="indique su Habilidad" class="form-control input"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_madre" class="form-control input" placeholder="urb. calle #casa" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="telefono_movil_madre" type="number" placeholder="ej. 0424******" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Residencial</label>
                                    <input id="telefono_residencial_madre" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono del lugar de trabajo</label>
                                    <input id="telefono_trabajo_madre" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Religion</label>
                                    <input id="religion_madre" type="text" placeholder="ej. catolico" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <input id="vive_estudiante_madre" type="radio" name="vive" class="radio " checked="checked" /> Si
                                    <input type="radio" name="vive" class="radio ml-4" /> No
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
                                <div class="form-group">
                                    <label>Nombre <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="nombre_padre" type="text" placeholder="indicar Nombre de la madre" class="form-control input" required />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Apellido <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="apellido_padre" type="text" placeholder="indicar Apellido de la madre" class="form-control input" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="tipo_documento_padre" class="form-control input">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Documento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="documento_padre" type="text" placeholder="12345678" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="fecha_nacimiento_padre" type="date" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="nacionalidad_padre" class="form-control input">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Edad <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="edad_padre" type="number" placeholder="indique edad" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Estado civil</label>
                                    <select id="estado_civil_padre" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nivel de Instruccion</label>
                                    <select id="nivel_instruccion_padre" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="ocupacion_padre" type="text" placeholder="indique su ocupacion" class="form-control input" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="lugar_trabajo_padre" type="text" placeholder="indique su lugar de trabajo" class="form-control input" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Habilidad</label>
                                    <textarea id="habilidad_padre" type="text" placeholder="indique su Habilidad" class="form-control input"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_padre" class="form-control input" placeholder="urb. calle #casa" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="telefono_movil_padre" type="number" placeholder="ej. 0424******" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Residencial </label>
                                    <input id="telefono_residencial_padre" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono del lugar de trabajo </label>
                                    <input id="telefono_trabajo_padre" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Religion</label>
                                    <input id="religion_padre" type="text" placeholder="ej. catolico" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <input id="vive_estudiante_padre" type="radio" name="vive" class="radio " checked="checked" /> Si
                                    <input type="radio" name="vive" class="radio ml-4" /> No
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
                                                <div class="custom-control custom-switch">
                                                    <input type="checkbox" class="custom-control-input" id="selectRepresentante">
                                                    <label class="custom-control-label" for="selectRepresentante">No / Si</label>
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
                                                        Madre <input id="selectMadre" type="radio" name="selectRep" class="radio ml-2" checked="checked" />
                                                    </span>
                                                    <span class="pill pillRight">
                                                        <input id="selectPadre" type="radio" name="selectRep" class="radio mr-2" /> Padre
                                                    </span>
                                                </div>
                                            </span>
                                        </center>
                                        <center>
                                            <span id="seleccionar_parenteco">
                                                <div class="form-group pt-2">
                                                    <label>Parentesco <span style="color: #960032;"><b>*</b></span></label>
                                                    <select id="parentesco" class="form-control input">
                                                        <option value="Abuelo">Abuelo(a)</option>
                                                        <option value="Hermano">Hermano(a)</option>
                                                        <option value="Primo">Primo(a)</option>
                                                        <option value="Tio">Tio(a)</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
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
                                <div class="form-group">
                                    <label>Nombre <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="nombre_representante" type="text" placeholder="indicar Nombre de la madre" class="form-control input" required />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Apellido <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="apellido_representante" type="text" placeholder="indicar Apellido de la madre" class="form-control input" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Tipo de documento <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="tipo_documento_representante" class="form-control input">
                                        <option value="V">V-</option>
                                        <option value="E">E-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Documento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="documento_representante" type="text" placeholder="12345678" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Fecha de Nacimiento <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="fecha_nacimiento_representante" type="date" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nacionalidad <span style="color: #960032;"><b>*</b></span></label>
                                    <select id="nacionalidad_representante" class="form-control input">
                                        <option value="VEN">Venezolana</option>
                                        <option value="COL">Colombiana</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Edad <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="edad_representante" type="number" placeholder="indique edad" class="form-control input" required/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Estado civil</label>
                                    <select id="estado_civil_representante" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="S">Soltero(a)</option>
                                        <option value="C">Casado(a)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Nivel de Instruccion</label>
                                    <select id="nivel_instruccion_representante" class="form-control input">
                                        <option value="N" selected>Seleccionar...</option>
                                        <option value="B">Bachiller</option>
                                        <option value="U">Estudios Universitarios</option>
                                        <option value="P">Post-Grado</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Ocupación <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="ocupacion_representante" type="text" placeholder="indique su ocupacion" class="form-control input" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Lugar de trabajo <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="lugar_trabajo_representante" type="text" placeholder="indique su lugar de trabajo" class="form-control input" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Habilidad</label>
                                    <textarea id="habilidad_representante" type="text" placeholder="indique su Habilidad" class="form-control input"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Direccion de residencia <span style="color: #960032;"><b>*</b></span></label>
                                    <textarea id="direccion_residencia_representante" class="form-control input" placeholder="urb. calle #casa" required></textarea>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Movil <span style="color: #960032;"><b>*</b></span></label>
                                    <input id="telefono_movil_representante" type="number" placeholder="ej. 0424******" class="form-control input" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono Residencial</label>
                                    <input id="telefono_residencial_representante" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Telefono del lugar de trabajo </label>
                                    <input id="telefono_trabajo_representante" type="number" placeholder="ej. 0212******" class="form-control input" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Religion</label>
                                    <input id="religion_representante" type="text" placeholder="ej. catolico" class="form-control input" />
                                </div>
                            </div>
                            <div class="col-4">
                                <label>¿ Vive con el estudiante ? <span style="color: #960032;"><b>*</b></span></label>
                                <div class="form-group pt-2">
                                    <input id="vive_estudiante_representante_y" type="radio" name="vive" class="radio " checked="checked" /> Si
                                    <input id="vive_estudiante_representante_n" type="radio" name="vive" class="radio ml-4" /> No
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
            'fecha_nacimiento': $(document).find('#fechaNacimiento_estudiante').val(),
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
            'fecha_nacimiento': $(document).find('#fecha_nacimiento_madre').val(),
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
            'fecha_nacimiento': $(document).find('#fecha_nacimiento_padre').val(),
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
                $(document).find('#fecha_nacimiento_representante').val(objData.madre.fecha_nacimiento);
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
                $(document).find('#fecha_nacimiento_representante').val(objData.padre.fecha_nacimiento);
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
        }
    })

    $(document).on('click', '#selectMadre', function(e) {
        $(document).find('#nombre_representante').val(objData.madre.nombre);
        $(document).find('#apellido_representante').val(objData.madre.apellido);
        $(document).find('#tipo_documento_representante').val(objData.madre.tipo_documento);
        $(document).find('#documento_representante').val(objData.madre.documento);
        $(document).find('#fecha_nacimiento_representante').val(objData.madre.fecha_nacimiento);
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
    })

    $(document).on('click', '#selectPadre', function(e) {
        $(document).find('#nombre_representante').val(objData.padre.nombre);
        $(document).find('#apellido_representante').val(objData.padre.apellido);
        $(document).find('#tipo_documento_representante').val(objData.padre.tipo_documento);
        $(document).find('#documento_representante').val(objData.padre.documento);
        $(document).find('#fecha_nacimiento_representante').val(objData.padre.fecha_nacimiento);
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
            'fecha_nacimiento': $(document).find('#fecha_nacimiento_representante').val(),
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

        Swal.fire({
            title: 'Esta listo para continuar ?',
            text: "Los datos que ha suministrado seran guardados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                $.post("../controllers/controller_registro.php", objData, function(response) {
                    var resp = jQuery.parseJSON(response);
                    if(resp.STATUS == 'SUCCESS') {
                        Swal.fire(
                            resp.MESSAGES,
                            'Los datos seran procesados, el usuario sera habilitado una vez se formalice la inscripción',
                            'success'
                        ).then((result2) => {
                            if(result2.isConfirmed) {
                                window.location.replace('http://localhost/CVM/ColegioVirgilioMedina/auth/login.php');
                            }
                        })
                    }
                });
                
            }
        })

    })

})