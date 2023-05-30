<?php 
    function template($objData) {

        $arrNacionalidad = [
            'VEN' => 'Venezolano',
            'COL' => 'Colombiano'
        ];

        $arrFechaNacimiento = explode('/', $objData['estudiante_fecha_nacimiento']);
        $arrGenero =  $objData['estudiante_genero'] == 'M' ? ['X',''] : ['','X'];
      
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
                            <p style="font-size: 12px;"> Año a Cursar: _____________________</p>
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
                            <center><img style="width:80px;" src="../assets/img/escudopng2.png" /></center>
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
                                <b>Cédula:</b> '.$objData['estudiante_cedula'].' <b>Lugar de Nacimiento:</b> '.$arrNacionalidad[$objData['estudiante_nacionalidad']].' <b>Municipio:</b>          <b>Estado:</b>
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
                                <b>Punto de Referencia:</b>  
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Talla de Camisa:</b> '.$objData['estudiante_direccion'].' <b>Pantalón:</b> <b>Estatura:</b> <b>Peso:</b> 
                                <hr style="margin: 0px; padding: 0px; width:100%" />
                            </p>
                            <p style="font-size: 12px;">
                                <b>Grupo Sanguíneo:</b> ___________________<b>Discapacidad:</b> _________________________________<b>Informe médico:     Si (  )    No (   ) </b>
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Es alérgico?   Si (   )    No (   )    a qué?</b>___________________________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Padece alguna enfermedad?</b> _______________________<b>¿Consume medicamentos?</b> __________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Ha convulsionado?    Si (  )    No   (   )    Observaciones:</b> ___________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>Lateralidad:   Derecha (   ) Izquierda (   )   Habilidades:</b> _________________________________<b>Religión:</b> ___________________________  
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Familiar dentro del Colegio?  Si (   )   No (   )  Nombre:</b> _______________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>¿Familiar dentro del Colegio?  Si (   )   No (   )  Nombre:</b> _______________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>Parentesco:</b> ______________________  <b>Especifique:</b> _________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                <b>Telf. Móvil:</b> _____________ <b>Telf. Residencial:</b> _____________<b>Correo electrónico:</b> __________________________________________
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
                            <center><img style="width:80px;" src="../assets/img/escudopng2.png" /></center>
                        </td>
                        <td style="width: 25%;">
                            <center><img style="width:80px;" src="../assets/img/escudopng2.png" /></center>
                        </td>
                    </tr>
                </table>
                <table  style="width:100%;">
                    <tr>
                        <td>
                            <p style="font-size: 12px;">
                                <b>Nombre de la Madre:</b>______________________________________________________________________C.I. N°__________________________
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Dia:________Mes:________Año:_________________Edad:__________________Nacionalidad:______________
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: _______________ Nivel de Instrucción: ______________________Ocupación: ______________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: _________________________________________________ Telf.: del lugar de trabajo: ____________
                            </p>
                            <p style="font-size: 12px;">
                                Habilidad: _________________________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: ______________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: __________________________________ Teléfono Residencial: _______________________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: __________________  Nº de Hijos: __________________ ¿Vive con el niño (a)?  _______________________
                            </p>
                            <br />
                            <p style="font-size: 12px;">
                                <b>Nombre del Padre:</b>______________________________________________________________________C.I. N°__________________________
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Dia:________Mes:________Año:_________________Edad:__________________Nacionalidad:______________
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: _______________ Nivel de Instrucción: ______________________Ocupación: ______________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: _________________________________________________ Telf.: del lugar de trabajo: ____________
                            </p>
                            <p style="font-size: 12px;">
                                Habilidad: _________________________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: ______________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: __________________________________ Teléfono Residencial: _______________________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: __________________  Nº de Hijos: __________________ ¿Vive con el niño (a)?  _______________________
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
                            <center><h5>Madre  (   )    Padre  (   )</h5></center>
                        </td>
                        <td style="width: 50%;">
                            <center><img style="width:80px;" src="../assets/img/escudopng2.png" /></center>
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
                                Nombres y Apellidos: _______________________________________________________ C.I. Nº_________________  
                            </p>
                            <p style="font-size: 12px;">
                                Fecha de Nacimiento: Día: ___ Mes: ________ Año: _____  Edad: _____   Parentesco: ______________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Especifique: ______________________________________________________Nacionalidad:______________________
                            </p>
                            <p style="font-size: 12px;">
                                Estado Civil: _______________ Nivel de Instrucción: ______________________ Ocupación: ______________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Lugar de trabajo: ___________________________________________________________________________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Telf.: del lugar de trabajo: _______________ Habilidad: ____________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Dirección de residencia: ______________________________________________________________________________
                            </p>
                            <p style="font-size: 12px;">
                                Teléfono Móvil: ___________________________________ Teléfono de habitación: ________________________ 
                            </p>
                            <p style="font-size: 12px;">
                                Religión: __________________________________ ¿Vive con el niño(a)?______________________________________
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