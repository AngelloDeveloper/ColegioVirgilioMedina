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
            $this->sql = " UPDATE docentes
            SET estatus='N'
            WHERE id='{$this->objData['id']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->idUsuario = mysqli_insert_id($this->con);
            return $this->idUsuario;
        }

        public function asignacion_docente_secciones() {
            $active = !empty($this->objData['data']['active']) ? $this->objData['data']['active'] : null;
            $inactive = !empty($this->objData['data']['inactive']) ? $this->objData['data']['inactive'] : null;
            if(!empty($active)) {
                $this->docenteSeccionConfig($active, 'active');
            }
            if(!empty($inactive)) {
                $this->docenteSeccionConfig($inactive, 'inactive');
            }            
        }

        private function docenteSeccionConfig($arr=[], $type) {
            switch ($type) {
                case 'active':
                    foreach($arr as $seccion) {
                        $this->sql = " SELECT * 
                            FROM  docentes_secciones 
                            WHERE id_docente = '{$this->objData['idDocente']}' 
                            AND id_seccion = '{$seccion['id']}'
                        ";
        
                        $this->query = mysqli_query($this->con, $this->sql);
                        $this->result = mysqli_num_rows($this->query);
                        if($this->result == 0) {
                            $this->addDocenteSeccion($seccion['id']);
                        } else {
                            $this->updateDocenteSeccion($seccion['id'], 'Y');
                        }
                    }
                break;
                case 'inactive':
                    foreach($arr as $seccion) {
                        $this->sql = " SELECT * 
                            FROM  docentes_secciones 
                            WHERE id_docente = '{$this->objData['idDocente']}' 
                            AND id_seccion = '{$seccion['id']}'
                        ";
        
                        $this->query = mysqli_query($this->con, $this->sql);
                        $this->result = mysqli_num_rows($this->query);
                        if($this->result != 0) {
                            $this->updateDocenteSeccion($seccion['id'], 'N');
                        }
                    }
                break;
               
            }
            return;
        }

        private function addDocenteSeccion($seccionId) {
            $this->sql = "INSERT INTO 
                docentes_secciones ( 
                    id_docente, 
                    id_seccion,
                    estatus
                ) 
                VALUES (
                    '{$this->objData['idDocente']}',
                    '{$seccionId}',
                    'Y'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            return;
        }

        private function updateDocenteSeccion($seccionId, $status) {
            $this->sql = "UPDATE docentes_secciones
                SET estatus='{$status}'
                WHERE id_docente = '{$this->objData['idDocente']}'
                AND id_seccion = '{$seccionId}'
            ";
            $this->query = mysqli_query($this->con, $this->sql);
            return;
        }

        public function getDocenteSecciones() {
            $this->sql = "SELECT 
                docentes_secciones.id_docente,
                docentes_secciones.id_seccion,
                docentes_secciones.estatus,
                secciones.seccion
            FROM  docentes_secciones 
            LEFT JOIN secciones ON docentes_secciones.id_seccion = secciones.id
            WHERE id_docente = '{$this->objData['id']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_num_rows($this->query);
            if($this->result != 0) {
                while ($row = mysqli_fetch_assoc($this->query)) { 
                    $rows[] = $row; 
                }
                $this->result = $rows;
            } else {
                $this->result = null;
            }
            
            return $this->result;
        }
    }    
?>