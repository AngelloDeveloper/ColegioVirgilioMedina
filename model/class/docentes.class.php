<?php 
    class Docentes extends Conexion {
        //properties
        private $con;
        private $sql;
        private $result;
        private $query;
        private $objData;
        private $pw;
        private $idUsuario;
        private $docente;

        //methods
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->objData = $arrData;
            }
        }

        public function getAllDocentes() {
            $this->sql = "SELECT * FROM docentes WHERE estatus='Y' ORDER BY id DESC";
            $this->query = mysqli_query($this->con, $this->sql);
            while($row = mysqli_fetch_assoc($this->query)) {
                $rows[] = $row;
            }
            $this->result = $rows;
            return $this->result;
        }

        public function getDocente() {
            $this->sql = "SELECT * FROM docentes WHERE id = '{$this->objData['id']}' AND estatus='Y'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            return $this->result;
        }

        public function addUsuario_docente() {
            $this->pw = md5("{$this->objData['documento']}");
            $this->sql = "INSERT INTO 
                usuarios ( 
                    email,
                    pass,
                    estatus,
                    permisos,
                    id_tipo_usuario
                ) 
                VALUES (
                    '{$this->objData['email']}',
                    '{$this->pw}',
                    'Y',
                    '[R,U]',
                    '3'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->idUsuario = mysqli_insert_id($this->con);
            return $this->idUsuario;
        }

        public function addDocente() {
            $this->sql = "INSERT INTO 
                docentes ( 
                    nombre, 
                    apellido,
                    cedula,
                    telf_movil,
                    email,
                    direccion,
                    nivel_instruccion,
                    id_usuarios,
                    estatus
                ) 
                VALUES (
                    '{$this->objData['nombre']}',
                    '{$this->objData['apellido']}',
                    '{$this->objData['documento']}',
                    '{$this->objData['telefono']}',
                    '{$this->objData['email']}',
                    '{$this->objData['direccion']}',
                    '{$this->objData['lv_instruccion']}',
                    '{$this->idUsuario}',
                    'Y'
                )
            ";
           
            $this->query = mysqli_query($this->con, $this->sql);
            $this->docente = mysqli_insert_id($this->con);
            return $this->docente;
        }

        public function updateDocente() {
            $this->sql = " UPDATE 
                docentes
            SET nombre='{$this->objData['nombre']}',
                apellido='{$this->objData['apellido']}',
                cedula='{$this->objData['documento']}',
                telf_movil='{$this->objData['telefono']}',
                email='{$this->objData['email']}',
                direccion='{$this->objData['direccion']}',
                nivel_instruccion='{$this->objData['lv_instruccion']}'
            WHERE id='{$this->objData['id']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->idUsuario = mysqli_insert_id($this->con);
            return $this->idUsuario;
        }

        public function deleteDocente() {
            $this->sql = " UPDATE 
                docentes
            SET estatus='N'
            WHERE id='{$this->objData['id']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->idUsuario = mysqli_insert_id($this->con);
            return $this->idUsuario;
        }

        public function asignacionSeccion() {
            $this->sql = "SELECT * FROM docentes_secciones WHERE id_docente = '{$this->objData['idDocente']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_num_rows($this->query);
            var_dump($this->result);
            die();
        }
    }
?>