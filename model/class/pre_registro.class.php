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
                    medicamento
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
                    '{$this->objData['detalle_estudiante']['medicamento']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idDetalleEstudiante = mysqli_insert_id($this->con);
            return $this->idDetalleEstudiante;
        }

        public function reg_estudiante() {
            $this->sql = "INSERT INTO 
                estudiantes ( 
                    nombre, 
                    apellido,
                    cedula,
                    tipo_documento,
                    nacionalidad,
                    edad,
                    genero,
                    email,
                    direccion,
                    fecha_nacimiento,
                    id_usuario,
                    id_detalles_estudiante,
                    id_representante,
                    id_mama,
                    id_papa
                ) 
                VALUES (
                    '{$this->objData['estudiante']['nombre']}',
                    '{$this->objData['estudiante']['apellido']}',
                    '{$this->objData['estudiante']['documento']}',
                    '{$this->objData['estudiante']['tipo_documento']}',
                    '{$this->objData['estudiante']['nacionalidad']}',
                    '{$this->objData['estudiante']['edad']}',
                    '{$this->objData['estudiante']['genero']}',
                    '{$this->objData['estudiante']['email']}',
                    '{$this->objData['estudiante']['direccion']}',
                    '{$this->objData['estudiante']['fecha_nacimiento']}',
                    '{$this->idUsuario}',
                    '{$this->idDetalleEstudiante}',
                    '{$this->idRepresentante}',
                    '{$this->idMadre}',
                    '{$this->idPadre}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idEstudiante = mysqli_insert_id($this->con);
            return $this->idEstudiante;
        }

        public function reg_madre() {
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
                    vive_estudiante
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
                    '{$this->objData['madre']['vive_estudiante']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idMadre = mysqli_insert_id($this->con);
            return $this->idMadre;
        }

        public function reg_padre() {
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
                    vive_estudiante
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
                    '{$this->objData['padre']['vive_estudiante']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idPadre = mysqli_insert_id($this->con);
            return $this->idPadre;
        }

        public function reg_representante() {
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

    }

?>