<?php 
    class Login extends Conexion {
        //properties
        private $email;
        private $pw;
        private $con;
        private $query;
        private $sql;
        private $sql2;
        private $result;

        //constructor
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->email = $arrData['email'];
                $this->pw = md5("{$arrData['password']}");
            }
        }
        //methods
        public function validation() {
            $this->sql = "SELECT 
                        id,
                        email,
                        estatus,
                        permisos,
                        id_tipo_usuario
                    FROM 
                        usuarios
                    WHERE 
                        email = '{$this->email}' AND 
                        pass = '{$this->pw}' 
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
        
            return $this->result;
        }

        public function session($idUser, $idUserType) {
            session_start();

            switch ($idUserType) {
                case '4':
                    $this->sql = "SELECT
                        usuarios.id as idUser, 
                        usuarios.estatus as estatus,
                        usuarios.permisos as permisos,
                        usuarios.id_tipo_usuario as userTypeId,
                        tipos_usuarios.tipo_usuario as userType,
                        estudiantes.nombre as nombre,
                        estudiantes.apellido as apellido,
                        estudiantes.cedula as documento,
                        estudiantes.tipo_documento as documentType,
                        estudiantes.nacionalidad as nacionalidad,
                        estudiantes.edad as edad,
                        estudiantes.genero as genero,
                        estudiantes.email as email,
                        estudiantes.direccion as direccion,
                        estudiantes.fecha_nacimiento as fechaNacimiento,
                        estudiantes_detalles.talla_camisa as tallaCamisa,
                        estudiantes_detalles.talla_pantalon as tallaPantalon,
                        estudiantes_detalles.peso as peso,
                        estudiantes_detalles.grupo_sanguineo as grupoSanguineo,
                        estudiantes_detalles.discapacidad as discapacidad,
                        estudiantes_detalles.alergico as alergico,
                        estudiantes_detalles.alergia as alergia,
                        estudiantes_detalles.enfermo as enfermo,
                        estudiantes_detalles.enfermedad as enfermedad,
                        estudiantes_detalles.medicado as medicado,
                        estudiantes_detalles.medicamento as medicamento,
                        madres.id as idMadre,
                        madres.nombre as madreNombre,
                        madres.apellido as madreApellido,
                        madres.cedula as madreDocumento,
                        madres.telf_movil as madreTelfMovil,
                        padres.id as idPadre,
                        padres.nombre as padreNombre,
                        padres.apellido as padreApellido,
                        padres.cedula as padreDocumento,
                        padres.telf_movil as padreTelfMovil,
                        representantes.id as idRepresentante,
                        representantes.nombre as representanteNombre,
                        representantes.apellido as representanteApellido,
                        representantes.cedula as representanteDocumento,
                        representantes.telf_movil as representanteTelfMovil,
                        representantes.parentesco as representanteParentesco
                    FROM 
                        usuarios
                        LEFT JOIN tipos_usuarios ON usuarios.id_tipo_usuario = tipos_usuarios.id
                        LEFT JOIN estudiantes ON usuarios.id = estudiantes.id_usuario
                        LEFT JOIN estudiantes_detalles ON estudiantes.id_detalles_estudiante = estudiantes_detalles.id
                        LEFT JOIN madres ON estudiantes.id_mama = madres.id
                        LEFT JOIN padres ON estudiantes.id_papa = padres.id
                        LEFT JOIN representantes ON estudiantes.id_representante = representantes.id
                    WHERE 
                        usuarios.id = '{$idUser}'  
                ";

                $this->sql2 = "SELECT
                        modulos.id as moduloId,
                        modulos.titulo as moduloTitulo,
                        modulos.descripcion as moduloDescripcion,
                        sub_modulos.id as subModuloId,
                        sub_modulos.titulo as subModuloTitulo,
                        sub_modulos.descripcion as subModuloDescripcion,
                        sub_modulos.url as subModuloUrl
                    FROM
                        tusuarios_smodulos
                        LEFT JOIN sub_modulos ON tusuarios_smodulos.id_sub_modulo = sub_modulos.id
                        LEFT JOIN modulos ON sub_modulos.id_modulo = modulos.id
                    WHERE
                        tusuarios_smodulos.id_tipo_usuario = '{$idUserType}' AND
                        tusuarios_smodulos.access = 'Y' AND
                        sub_modulos.status = 'Y' AND
                        modulos.status = 'Y'
                ";
                break;
                case '3':
                    $this->sql = "SELECT
                        usuarios.id as idUser, 
                        usuarios.estatus as estatus,
                        usuarios.permisos as permisos,
                        usuarios.id_tipo_usuario as userTypeId,
                        docentes.nombre as nombre,
                        docentes.apellido as apellido,
                        docentes.cedula as documento,
                        docentes.telf_movil as telefono,
                        docentes.email as email,
                        docentes.direccion as direccion, 
                        docentes.nivel_instruccion as lv_instruccion
                    FROM 
                        usuarios
                        LEFT JOIN docentes ON usuarios.id = docentes.id
                    WHERE 
                        usuarios.id = '{$idUser}'";

                    $this->sql2 = "SELECT
                        modulos.id as moduloId,
                        modulos.titulo as moduloTitulo,
                        modulos.descripcion as moduloDescripcion,
                        sub_modulos.id as subModuloId,
                        sub_modulos.titulo as subModuloTitulo,
                        sub_modulos.descripcion as subModuloDescripcion,
                        sub_modulos.url as subModuloUrl
                    FROM
                        tusuarios_smodulos
                        LEFT JOIN sub_modulos ON tusuarios_smodulos.id_sub_modulo = sub_modulos.id
                        LEFT JOIN modulos ON sub_modulos.id_modulo = modulos.id
                    WHERE
                        tusuarios_smodulos.id_tipo_usuario = '{$idUserType}' AND
                        tusuarios_smodulos.access = 'Y' AND
                        sub_modulos.status = 'Y' AND
                        modulos.status = 'Y'";
                break;
                case '2':
                    # code...
                break;
                case '1':
                    # code...
                break;
            }

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            $_SESSION['user_data'] = $this->result;
            $this->query = mysqli_query($this->con, $this->sql2);
            $_SESSION['user_access'] = self::getStructureMenuAccess($this->query);
            
            return (!empty($_SESSION)) ? 'SUCCESS' : 'FAIL';
        }

        public function getModules() {
            $this->sql = "SELECT
                    *
                FROM
                    modulos
            ";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getStructureMenuAccess($userTypeModules) {
            $modulos = self::getModules();
            while ($row = mysqli_fetch_assoc($userTypeModules)) {  
                foreach($modulos as $modulo) {
                    if($modulo['id'] == $row['moduloId']) {
                        $rows[$modulo['titulo']]['subModulos'][$row['subModuloId']]['titulo'] = $row['subModuloTitulo'];
                        $rows[$modulo['titulo']]['subModulos'][$row['subModuloId']]['descripcion'] = $row['subModuloDescripcion'];
                        $rows[$modulo['titulo']]['subModulos'][$row['subModuloId']]['url'] = $row['subModuloUrl'];
                    } 
                }  
            } 

            return $rows;
        }

        public function logout() {
            session_start();
            session_destroy();
        }
    }
?>