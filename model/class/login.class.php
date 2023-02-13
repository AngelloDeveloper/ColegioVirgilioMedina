<?php 
    class Login extends Conexion {
        //properties
        private $email;
        private $pw;
        private $con;
        private $query;
        private $sql;
        private $result;

        //constructor
        public function __construct($arrData='') {
            $this->email = $arrData['email'];
            $this->pw = md5("{$arrData['password']}");
            $this->con = $this->conexion();
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
                        email = '{$this->email}' AND pass = '{$this->pw}'   
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
        
            return $this->result;
        }

        public function session($idUser, $idUserType) {

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
                break;
                case '3':
                    # code...
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
            return (!empty($_SESSION['user_data'])) ? 'SUCCESS' : 'FAIL';
        }
    }
?>