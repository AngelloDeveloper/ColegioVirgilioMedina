<?php 
    function template($objData) {

        $arrNacionalidad = [
            'VEN' => 'Venezolano',
            'COL' => 'Colombiano'
        ];

        $arrEstadoCivil = [
            'C' => 'Casado',
            'S' => 'Soltero'
        ];

        $arrNivelInstruccion = [
            'N' => 'Ninguno',
            'B' => 'Bachiller',
            'U' => 'Universitario',
            'P' => 'Postgrado'
        ];

        $arrFechaNacimiento = explode('/', $objData['estudiante_fecha_nacimiento']);
        $arrGenero =  $objData['estudiante_genero'] == 'M' ? ['X',''] : ['','X'];

        //variables
        if($objData['alergico'] == 'Y') {
            $es_alergico_SI = 'X';
            $es_alergico_NO = '';
            $alergia = $objData['alergia'];
        } else {
            $es_alergico_SI = '';
            $es_alergico_NO = 'X';
            $alergia = '';
        }

        if($objData['convulsion'] == 'Y') {
            $a_convulcionado_SI = 'X';
            $a_convulcionado_NO = '';
            $convulcion = $objData['convulsion_observaciones'];
        }  else {
            $a_convulcionado_SI = '';
            $a_convulcionado_NO = 'X';
            $convulcion = '';
        }

        if($objData['lateralidad'] == 'D') {
            $lateral_derecho = 'X';
            $lateral_izquierdo = '';
        } else {
            $lateral_derecho = '';
            $lateral_izquierdo = 'X';
        }

        if(!empty($objData['estudiante_otra_religion'])) {
            $religion = $objData['estudiante_otra_religion'];
        } else {
            $religion = $objData['estudiante_religion'];
        }

        if($objData['familiar_colegio'] == 'Y') {
            $fam_col_SI = 'X';
            $fam_col_NO = '';
            $nom_fam_col = $objData['nombre_fam_col'];
            $parem_fam_col = $objData['parem_fam_col'];
            $detalles_fam_col = $objData['detalles_fam_col'];
        } else {
            $fam_col_SI = '';
            $fam_col_NO = 'X';
            $nom_fam_col = '';
            $parem_fam_col = '';
            $detalles_fam_col = '';
        }

        $date_madre = explode('-', $objData['madre_fecha_nacimiento']);
        $madre_vive_estudiante = $objData['madre_vive_estudiante'] ? 'SI' : 'NO';

        $date_padre = explode('-', $objData['padre_fecha_nacimiento']);
        $padre_vive_estudiante = $objData['padre_vive_estudiante'] ? 'SI' : 'NO';

        $date_rep = explode('-', $objData['representantes_fecha_nacimiento']);
        $representante_vive_estudiante = $objData['representantes_vive_estudiante'] ? 'SI' : 'NO';
      
        $template = '
            <body>  
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <center><img src="../assets/img/ministerio.png" class="logos" /></center>
                        </td>
                        <td>
                            <p class="republica"><center>República Bolivariana de Venezuela</center></p>
                            <p class="republica"><center>Ministerio del Poder Popular para la Educación</center></p>
                            <p class="republica"><center>U.E Colegio Virgilio Medína Ramírez</center></p>
                            <p class="republica"><center>Santa Ana - Municipio Córdoba</center></p>
                            <p class="republica"><center>Estado Táchira</center></p>
                        </td>
                        <td>
                            <center><img src="../assets/img/escudopng2.png" class="logos" /></center>
                        </td>
                    </tr>
                    <tr>
                        <td><span style="font-size: 11px;"><b>Cod. Plantel: PD00262006</b></span></td>
                    </tr>
                </table>
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <center>
                                <h4><u>FICHA DE INSCRIPCIÓN</u><br/> <span style="color: #224466;"> AÑO ESCOLAR 2022-2023</span></h4>
                            </center>
                        </td>
                    </tr>
                </table>
                <br />
                <table  style="width:100%;">
                    <tr>
                        <td style="width: 33%;"></td>
                        <td style="width: 33%;"></td>
                        <td style="width: 33%;">
                            <p style="font-size: 12px;"> Fecha de Inscripción: <u>'.date('d').'</u>/<u>'.date('m').'</u>/<u>'.date('Y').'</u></p>
                            <p style="font-size: 12px;"> Año a Cursar: cuarto año </p>
                        </td>
                    </tr>
                </table>
                <br />
                <!--NIÑO-->
                <table  style="width:100%;">
                    <tr>
                        <td style="width: 50%;">
                            <h4 style="color: red;">DATOS PERSONALIZADOS DEL NIÑO(A)</h4>
                        </td>
                        <td style="width: 50%;">
                            <center><img style="width:80px;" src="../twp/'.$objData['estudiante_foto'].'" /></center>
                        </td>
                    </tr>
                </table>
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <p style="font-size: 12px;">
                                <b>Nombre y Apellidos:</b> '.$objData['estudiante_nombre'].' '.$objData['estudiante_apellido'].'
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Cédula:</b> '.$objData['estudiante_cedula'].' <b>Lugar de Nacimiento:</b> '.$arrNacionalidad[$objData['estudiante_nacionalidad']].' <b>Municipio:</b> '.$objData['estudiante_municipio'].'         <b>Estado:</b> '.$objData['estudiante_estado'].'
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Fecha de Nacimiento: Dia:</b> '.$arrFechaNacimiento[2].' <b>Mes:</b> '.$arrFechaNacimiento[1].' <b>Año:</b> '.$arrFechaNacimiento[0].' <b>Edad:</b> '.$objData['estudiante_edad'].' <b>Genero: M( </b>'.$arrGenero[0].' <b>) F( </b>'.$arrGenero[1].' <b>)</b>
                            </p>
                            <p style="font-size: 12px;">
                                <b>Dirección de Habitación:</b> '.$objData['estudiante_direccion'].'
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Punto de Referencia: </b>  
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Talla de Camisa:</b> '.$objData['talla_camisa'].' <b>Pantalón:</b> '.$objData['talla_pantalon'].'<b>Estatura:</b> '.$objData['estatura'].' <b>Peso:</b> '.$objData['peso'].' 
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Grupo Sanguíneo:</b> '.$objData['grupo_sanguineo'].'<b>Discapacidad:</b> '.$objData['discapacidad'].'<b>Informe médico:     Si ( X )    No (   ) </b>
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Es alérgico?   Si ( '.$es_alergico_SI.' )    No ( '.$es_alergico_NO.'  )    a qué?</b> '.$alergia.'
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Padece alguna enfermedad?</b> '.$objData['enfermedad'].' <b>¿Consume medicamentos?</b> '.$objData['medicamento'].'
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Ha convulsionado?    Si ( '.$a_convulcionado_SI.' )    No   ( '.$a_convulcionado_NO.' )    Observaciones:</b> '.$convulcion.'
                            </p>
                            <p style="font-size: 12px;">
                                <b>Lateralidad:   Derecha ( '.$lateral_derecho.'  ) Izquierda ( '.$lateral_izquierdo.' )   Habilidades:</b> '.$objData['estudiante_habilidades'].'<b>Religión:</b> '.$religion.'  
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Familiar dentro del Colegio?  Si ( '.$fam_col_SI.' )   No ( '.$fam_col_NO.' )  Nombre:</b> '.$nom_fam_col.'
                            </p>
                            <p style="font-size: 12px;">
                                <b>Parentesco:</b> '.$parem_fam_col.'  <b>Especifique:</b> '.$detalles_fam_col.'
                            </p>
                            <p style="font-size: 12px;">
                                <b>Telf. Móvil:</b> '.$objData['estudiante_telf_movil'].' <b>Telf. Residencial:</b> '.$objData['estudiante_telf_residencia'].' <b>Correo electrónico:</b> '.$objData['estudiante_email'].'
                            </p>
                        </td>
                    </tr>
                </table>

                <!--DATOS FAMILIARES-->

                <table  style="width:100%;">
                    <tr>
                        <td style="width: 50%;">
                            <h4 style="color: red;">DATOS FAMILIARES</h4>
                        </td>
                        <td style="width: 25%;">
                            <center><img style="width:80px;" src="../twp/'.$objData['madre_foto'].'" /></center>
                        </td>
                        <td style="width: 25%;">
                            <center><img style="width:80px;" src="../twp/'.$objData['padre_foto'].'" /></center>
                        </td>
                    </tr>
                </table>
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <p style="font-size: 12px;">
                                <b>Nombre de la Madre:</b> '.$objData['madre_nombre'].' '.$objData['madre_apellido'].' C.I. N° '.$objData['madre_cedula'].'
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Dia: '.$date_madre[2].' Mes: '.$date_madre[1].'Año: '.$date_madre[0].' Edad: '.$objData['madre_edad'].' Nacionalidad: '.$arrNacionalidad[$objData['madre_nacionalidad']].'
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: '.$arrEstadoCivil[$objData['madre_estado_civil']].' Nivel de Instrucción: '.$arrNivelInstruccion[$objData['madre_nivel_instruccion']].' Ocupación: '.$objData['madre_ocupacion'].'
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: '.$objData['madre_lugar_trabajo'].' Telf.: del lugar de trabajo: '.$objData['madre_telf_trabajo'].'
                            </p>
                            <p style="font-size: 12px;">
                                Habilidad: '.$objData['madre_habilidad'].'
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: '.$objData['madre_direccion_residencia'].'
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: '.$objData['madre_telf_movil'].' Teléfono Residencial: '.$objData['madre_telf_residencia'].' 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: '.$religion.'  Nº de Hijos: __________________ ¿Vive con el niño (a)?  '.$madre_vive_estudiante.'
                            </p>
                            <br />
                            <p style="font-size: 12px;">
                                <b>Nombre del Padre:</b> '.$objData['padre_nombre'].' '.$objData['padre_apellido'].' C.I. N° '.$objData['padre_cedula'].'
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Dia: '.$date_padre[2].' Mes: '.$date_padre[1].' Año: '.$date_padre[0].' Edad: '.$objData['padre_edad'].'Nacionalidad: '.$arrNacionalidad[$objData['padre_nacionalidad']].'
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: '.$arrEstadoCivil[$objData['padre_estado_civil']].' Nivel de Instrucción: '.$arrNivelInstruccion[$objData['padre_nivel_instruccion']].' Ocupación: '.$objData['padre_ocupacion'].' 
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: '.$objData['padre_lugar_trabajo'].' Telf.: del lugar de trabajo: '.$objData['padre_telf_trabajo'].'
                            </p>
                            <p style="font-size: 12px;">
                                Habilidad: '.$objData['padre_habilidad'].'
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: '.$objData['padre_direccion_residencia'].'
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: '.$objData['padre_telf_movil'].' Teléfono Residencial: '.$objData['padre_telf_residencia'].' 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: '.$religion.' Nº de Hijos: __________________ ¿Vive con el niño (a)?  '.$padre_vive_estudiante.'
                            </p>
                        </td>
                    </tr>
                </table>

                <!--REPRESENTANTE-->
                <table style="width:100%;">
                    <tr>
                        <td style="width: 30%;">
                            <h4 style="color: red;">REPRESENTANTE LEGAL</h4>
                        </td>
                        <td style="width: 20%;">
                            <center><h5>Madre  ( X )    Padre  (   )</h5></center>
                        </td>
                        <td style="width: 50%;">
                            <center><img style="width:80px;" src="../twp/'.$objData['madre_foto'].'" /></center>
                        </td>
                    </tr>
                </table>
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <p style="font-size: 12px;">
                                <b>Representante Legal Autorizado:</b>
                            </p>
                            <p style="font-size: 12px;">
                                Nombres y Apellidos: '.$objData['representantes_nombre'].' '.$objData['representantes_apellido'].' C.I. Nº '.$objData['representantes_cedula'].'  
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Día: '.$date_rep[2].' Mes: '.$date_rep[1].' Año: '.$date_rep[0].'  Edad: '.$objData['representantes_edad'].'   Parentesco: Madre 
                            </p>
                            <p style="font-size: 12px;">
                                Especifique: ______________________________________________________Nacionalidad: '.$arrNacionalidad[$objData['representantes_nacionalidad']].'
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: '.$arrEstadoCivil[$objData['representantes_estado_civil']].' Nivel de Instrucción: '.$arrNivelInstruccion[$objData['representantes_nivel_instruccion']].' Ocupación: '.$objData['representantes_ocupacion'].' 
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: '.$objData['representantes_lugar_trabajo'].'
                            </p>
                            <p style="font-size: 12px;">
                                Telf.: del lugar de trabajo: '.$objData['representantes_telf_trabajo'].' Habilidad: '.$objData['representantes_habilidad'].'
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: '.$objData['representantes_direccion_residencia'].'
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: '.$objData['representantes_telf_movil'].' Teléfono de habitación: '.$objData['representantes_telf_residencia'].' 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: '.$religion.' ¿Vive con el niño(a)? '.$representante_vive_estudiante.'
                            </p>
                            <p style="font-size: 12px;">
                            Documento de Autorización que presenta: _______________________________________________________________
                            __________________________________________________________________________________________________                            
                            </p>
                        </td>
                    </tr>
                </table>
            </body>
        ';

        return $template;
    } 
?>