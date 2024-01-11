<?php 
    class Pre_Registro extends conexion {
        
        //Properties
        private $objData;
        private $sql;
        private $query;
        private $con;
        private $idUsuario;
        private $idEstudiante;
        private $idMadre;
        private $idPadre;
        private $idRepresentante;
        private $idDetalleEstudiante;
        private $pw;
        private $result;

        //Constructor
        public function __construct($arrData='') {
            $this->objData = $arrData;
            $this->con  = $this->conexion();
        }

        //Methods

        public function reg_usuario_estudiante() {
            $this->pw = md5("{$this->objData['estudiante']['documento']}");
            $this->sql = "INSERT INTO 
                usuarios ( 
                    email,
                    pass,
                    estatus,
                    permisos,
                    id_tipo_usuario
                ) 
                VALUES (
                    '{$this->objData['estudiante']['email']}',
                    '{$this->pw}',
                    'N',
                    '[R,U]',
                    '4'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idUsuario = mysqli_insert_id($this->con);
            return $this->idUsuario;
        }

        public function reg_detalle_estudiante() {
            $this->sql = "INSERT INTO 
                estudiantes_detalles ( 
                    talla_camisa, 
                    talla_pantalon,
                    estatura,
                    peso,
                    grupo_sanguineo,
                    discapacidad,
                    url_informe_medico,
                    alergico,
                    alergia,
                    enfermo,
                    enfermedad,
                    medicado,
                    medicamento,
                    convulsion,
                    convulsion_observaciones
                ) 
                VALUES (
                    '{$this->objData['detalle_estudiante']['talla_camisa']}',
                    '{$this->objData['detalle_estudiante']['talla_pantalon']}',
                    '{$this->objData['detalle_estudiante']['estatura']}',
                    '{$this->objData['detalle_estudiante']['peso']}',
                    '{$this->objData['detalle_estudiante']['grupo_sanguineo']}',
                    '{$this->objData['detalle_estudiante']['discapacidad']}',
                    '{$this->objData['detalle_estudiante']['url_informe_medico']}',
                    '{$this->objData['detalle_estudiante']['alergico']}',
                    '{$this->objData['detalle_estudiante']['alergia']}',
                    '{$this->objData['detalle_estudiante']['enfermo']}',
                    '{$this->objData['detalle_estudiante']['enfermedad']}',
                    '{$this->objData['detalle_estudiante']['medicado']}',
                    '{$this->objData['detalle_estudiante']['medicamento']}',
                    '{$this->objData['detalle_estudiante']['convulsion']}',
                    '{$this->objData['detalle_estudiante']['convulsion_observaciones']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idDetalleEstudiante = mysqli_insert_id($this->con);
            return $this->idDetalleEstudiante;
        }

        public function reg_estudiante($photo) {
            $this->sql = "INSERT INTO 
                estudiantes ( 
                    nombre, 
                    apellido,
                    cedula,
                    tipo_documento,
                    nacionalidad,
                    edad,
                    genero,
                    telf_code,
                    telf_movil,
                    telf_residencia,
                    email,
                    direccion,
                    punto_referencia,
                    fecha_nacimiento,
                    habilidades,
                    id_estado,
                    id_municipio,
                    id_usuario,
                    id_detalles_estudiante,
                    id_representante,
                    id_mama,
                    id_papa,
                    foto
                ) 
                VALUES (
                    '{$this->objData['estudiante']['nombre']}',
                    '{$this->objData['estudiante']['apellido']}',
                    '{$this->objData['estudiante']['documento']}',
                    '{$this->objData['estudiante']['tipo_documento']}',
                    '{$this->objData['estudiante']['nacionalidad']}',
                    '{$this->objData['estudiante']['edad']}',
                    '{$this->objData['estudiante']['genero']}',
                    '{$this->objData['estudiante']['telf_code']}',
                    '{$this->objData['estudiante']['telf_movil']}',
                    '{$this->objData['estudiante']['telf_residencia']}',
                    '{$this->objData['estudiante']['email']}',
                    '{$this->objData['estudiante']['direccion']}',
                    '{$this->objData['estudiante']['punto_referencia']}',
                    '{$this->objData['estudiante']['fecha_nacimiento']}',
                    '{$this->objData['estudiante']['habilidades']}',
                    '{$this->objData['estudiante']['estado']}',
                    '{$this->objData['estudiante']['municipio']}',
                    '{$this->idUsuario}',
                    '{$this->idDetalleEstudiante}',
                    '{$this->idRepresentante}',
                    '{$this->idMadre}',
                    '{$this->idPadre}',
                    '{$photo}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idEstudiante = mysqli_insert_id($this->con);
            return $this->idEstudiante;
        }

        public function reg_madre($photo) {
            $this->sql = "INSERT INTO 
                madres ( 
                    nombre, 
                    apellido,
                    cedula,
                    tipo_documento,
                    fecha_nacimiento,
                    edad,
                    nacionalidad,
                    estado_civil,
                    nivel_instruccion,
                    ocupacion,
                    lugar_trabajo,
                    habilidad,
                    direccion_residencia,
                    telf_movil,
                    telf_residencia,
                    telf_trabajo,
                    religion,
                    vive_estudiante,
                    foto
                ) 
                VALUES (
                    '{$this->objData['madre']['nombre']}',
                    '{$this->objData['madre']['apellido']}',
                    '{$this->objData['madre']['documento']}',
                    '{$this->objData['madre']['tipo_documento']}',
                    '{$this->objData['madre']['fecha_nacimiento']}',
                    '{$this->objData['madre']['edad']}',
                    '{$this->objData['madre']['nacionalidad']}',
                    '{$this->objData['madre']['estado_civil']}',
                    '{$this->objData['madre']['nivel_instruccion']}',
                    '{$this->objData['madre']['ocupacion']}',
                    '{$this->objData['madre']['lugar_trabajo']}',
                    '{$this->objData['madre']['habilidad']}',
                    '{$this->objData['madre']['direccion']}',
                    '{$this->objData['madre']['telefono_movil']}',
                    '{$this->objData['madre']['telefono_residencia']}',
                    '{$this->objData['madre']['telefono_trabajo']}',
                    '{$this->objData['madre']['religion']}',
                    '{$this->objData['madre']['vive_estudiante']}',
                    '{$photo}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idMadre = mysqli_insert_id($this->con);
            return $this->idMadre;
        }

        public function reg_padre($photo) {
            $this->sql = "INSERT INTO 
                padres ( 
                    nombre, 
                    apellido,
                    cedula,
                    tipo_documento,
                    fecha_nacimiento,
                    edad,
                    nacionalidad,
                    estado_civil,
                    nivel_instruccion,
                    ocupacion,
                    lugar_trabajo,
                    habilidad,
                    direccion_residencia,
                    telf_movil,
                    telf_residencia,
                    telf_trabajo,
                    religion,
                    vive_estudiante,
                    foto
                ) 
                VALUES (
                    '{$this->objData['padre']['nombre']}',
                    '{$this->objData['padre']['apellido']}',
                    '{$this->objData['padre']['documento']}',
                    '{$this->objData['padre']['tipo_documento']}',
                    '{$this->objData['padre']['fecha_nacimiento']}',
                    '{$this->objData['padre']['edad']}',
                    '{$this->objData['padre']['nacionalidad']}',
                    '{$this->objData['padre']['estado_civil']}',
                    '{$this->objData['padre']['nivel_instruccion']}',
                    '{$this->objData['padre']['ocupacion']}',
                    '{$this->objData['padre']['lugar_trabajo']}',
                    '{$this->objData['padre']['habilidad']}',
                    '{$this->objData['padre']['direccion']}',
                    '{$this->objData['padre']['telefono_movil']}',
                    '{$this->objData['padre']['telefono_residencia']}',
                    '{$this->objData['padre']['telefono_trabajo']}',
                    '{$this->objData['padre']['religion']}',
                    '{$this->objData['padre']['vive_estudiante']}',
                    '{$photo}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idPadre = mysqli_insert_id($this->con);
            return $this->idPadre;
        }

        public function reg_representante($photo='') {
            $this->sql = "INSERT INTO 
                representantes ( 
                    nombre, 
                    apellido,
                    cedula,
                    tipo_documento,
                    fecha_nacimiento,
                    edad,
                    nacionalidad,
                    estado_civil,
                    nivel_instruccion,
                    ocupacion,
                    lugar_trabajo,
                    habilidad,
                    direccion_residencia,
                    telf_movil,
                    telf_residencia,
                    telf_trabajo,
                    religion,
                    vive_estudiante,
                    parentesco
                ) 
                VALUES (
                    '{$this->objData['representante']['nombre']}',
                    '{$this->objData['representante']['apellido']}',
                    '{$this->objData['representante']['documento']}',
                    '{$this->objData['representante']['tipo_documento']}',
                    '{$this->objData['representante']['fecha_nacimiento']}',
                    '{$this->objData['representante']['edad']}',
                    '{$this->objData['representante']['nacionalidad']}',
                    '{$this->objData['representante']['estado_civil']}',
                    '{$this->objData['representante']['nivel_instruccion']}',
                    '{$this->objData['representante']['ocupacion']}',
                    '{$this->objData['representante']['lugar_trabajo']}',
                    '{$this->objData['representante']['habilidad']}',
                    '{$this->objData['representante']['direccion']}',
                    '{$this->objData['representante']['telefono_movil']}',
                    '{$this->objData['representante']['telefono_residencia']}',
                    '{$this->objData['representante']['telefono_trabajo']}',
                    '{$this->objData['representante']['religion']}',
                    '{$this->objData['representante']['vive_estudiante']}',
                    '{$this->objData['representante']['parentesco']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idRepresentante = mysqli_insert_id($this->con);
            return $this->idRepresentante;
        }

        public function getDataPreRegistro() {
            $this->sql = "SELECT 
                estudiantes.nombre as estudiante_nombre, 
                estudiantes.apellido as estudiante_apellido, 
                estudiantes.cedula as estudiante_cedula, 
                estudiantes.tipo_documento as estudiante_tipo_documento,
                estudiantes.nacionalidad as estudiante_nacionalidad,
                estudiantes.edad as estudiante_edad,
                estudiantes.genero as estudiante_genero,
                estudiantes.email as estudiante_email,
                estudiantes.direccion as estudiante_direccion,
                estudiantes.fecha_nacimiento as estudiante_fecha_nacimiento,
                estudiantes.habilidades as estudiante_habilidades,
                estudiantes.telf_movil as estudiante_telf_movil,
                estudiantes.telf_residencia as estudiante_telf_residencia,
                estudiantes.foto as estudiante_foto,
                estados.estado as estudiante_estado,
                religiones.religion as estudiante_religion,
                estudiantes.otra_religion as estudiante_otra_religion,
                municipios.municipio as estudiante_municipio,
                estudiantes_detalles.*,
                madres.nombre as madre_nombre,
                madres.apellido as madre_apellido,
                madres.cedula as madre_cedula,
                madres.tipo_documento as madre_tipo_documento,
                madres.fecha_nacimiento as madre_fecha_nacimiento,
                madres.edad as madre_edad,
                madres.nacionalidad as madre_nacionalidad,
                madres.estado_civil as madre_estado_civil,
                madres.nivel_instruccion as madre_nivel_instruccion,
                madres.ocupacion as madre_ocupacion,
                madres.lugar_trabajo as madre_lugar_trabajo,
                madres.habilidad as madre_habilidad,
                madres.direccion_residencia as madre_direccion_residencia,
                madres.telf_movil as madre_telf_movil,
                madres.telf_residencia as madre_telf_residencia,
                madres.telf_trabajo as madre_telf_trabajo,
                madres.religion as madre_religion,
                madres.vive_estudiante as madre_vive_estudiante,
                madres.foto as madre_foto,
                padres.nombre as padre_nombre,
                padres.apellido as padre_apellido,
                padres.cedula as padre_cedula,
                padres.tipo_documento as padre_tipo_documento,
                padres.fecha_nacimiento as padre_fecha_nacimiento,
                padres.edad as padre_edad,
                padres.nacionalidad as padre_nacionalidad,
                padres.estado_civil as padre_estado_civil,
                padres.nivel_instruccion as padre_nivel_instruccion,
                padres.ocupacion as padre_ocupacion,
                padres.lugar_trabajo as padre_lugar_trabajo,
                padres.habilidad as padre_habilidad,
                padres.direccion_residencia as padre_direccion_residencia,
                padres.telf_movil as padre_telf_movil,
                padres.telf_residencia as padre_telf_residencia,
                padres.telf_trabajo as padre_telf_trabajo,
                padres.religion as padre_religion,
                padres.vive_estudiante as padre_vive_estudiante,
                padres.foto as padre_foto,
                representantes.nombre as representantes_nombre,
                representantes.apellido as representantes_apellido,
                representantes.cedula as representantes_cedula,
                representantes.tipo_documento as representantes_tipo_documento,
                representantes.fecha_nacimiento as representantes_fecha_nacimiento,
                representantes.edad as representantes_edad,
                representantes.nacionalidad as representantes_nacionalidad,
                representantes.estado_civil as representantes_estado_civil,
                representantes.nivel_instruccion as representantes_nivel_instruccion,
                representantes.ocupacion as representantes_ocupacion,
                representantes.lugar_trabajo as representantes_lugar_trabajo,
                representantes.habilidad as representantes_habilidad,
                representantes.direccion_residencia as representantes_direccion_residencia,
                representantes.telf_movil as representantes_telf_movil,
                representantes.telf_residencia as representantes_telf_residencia,
                representantes.telf_trabajo as representantes_telf_trabajo,
                representantes.religion as representantes_religion,
                representantes.vive_estudiante as representantes_vive_estudiante
                FROM estudiantes
                    LEFT JOIN estudiantes_detalles ON estudiantes.id_detalles_estudiante = estudiantes_detalles.id
                    LEFT JOIN madres ON estudiantes.id_mama = madres.id
                    LEFT JOIN padres ON estudiantes.id_papa = padres.id
                    LEFT JOIN representantes ON estudiantes.id_representante = representantes.id
                    LEFT JOIN estados ON estudiantes.id_estado = estados.id_estado
                    LEFT JOIN municipios ON estudiantes.id_municipio = municipios.id_municipio
                    LEFT JOIN religiones ON estudiantes.religion = religiones.id
                WHERE estudiantes.id = {$this->objData['id_estudiante']}";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            return $this->result;
        }

        public function uploadPhoto($file) {
            $uploadDirectory = __DIR__ . '/../twp/';

            // Asegúrate de que el directorio existe
            if (!file_exists($uploadDirectory)) {
                mkdir($uploadDirectory, 0777, true);
            }

            // Verifica si el archivo ha sido cargado
            if (isset($file)) {
                // Asegúrate de que el archivo se haya subido correctamente
                if ($file['error']['preview_foto'] == UPLOAD_ERR_OK) {
                    $tmpName = $file['tmp_name']['preview_foto'];
                    $name = basename($file['name']['preview_foto']);
                    $uploadPath = $uploadDirectory . $name;

                    // Mueve el archivo al directorio de destino
                    if (move_uploaded_file($tmpName, $uploadPath)) {
                        // La ruta del archivo se almacena para usarla más tarde
                        $this->result = $name;
                        return $this->result;
                    } else {
                        // Manejo de errores
                        // El archivo no se pudo mover al directorio de destino
                    }
                } else {
                    // Manejo de errores
                    // Error al subir el archivo
                }
            } else {
                // El campo 'foto' no existe en $_FILES
            }

           
        }

    }

?>