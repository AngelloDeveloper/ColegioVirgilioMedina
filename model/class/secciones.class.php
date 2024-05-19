<?php 
    class Secciones extends Conexion {
        //properties
        private $con;
        private $query;
        private $sql;
        private $result;
        private $objData;

        //constructor
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->objData = $arrData;
            }
        }

        public function getAllSecciones() {
            $this->sql = " SELECT * FROM secciones";
            $this->query = mysqli_query($this->con, $this->sql);
            if(mysqli_num_rows($this->query) == 0) {
                return [];
            }
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getGradosForSeccions() {
            $this->sql = " SELECT * FROM seccion_grado";
            $this->query = mysqli_query($this->con, $this->sql);
            if(mysqli_num_rows($this->query) == 0) {
                return [];
            }
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getSeccion($id) {
            $this->sql = "SELECT * FROM secciones WHERE id = {$id}";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            return $this->result;
        }

        public function getSeccionesGrado($idGrado) {
            $this->sql = "SELECT 
                    secciones.id AS id,
                    secciones.seccion AS seccion
                FROM
                    seccion_grado
                    LEFT JOIN secciones ON secciones.id = seccion_grado.id_seccion
                WHERE
                    seccion_grado.id_grado = {$idGrado}
            ";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function addSeccion() {

            //$turns = json_encode($this->objData['turno']);
            $turns = json_encode($this->uniqueTurns($this->objData['grados']));
            $this->sql = "INSERT INTO 
                secciones ( 
                    seccion,
                    turno
                ) 
                VALUES (
                    '{$this->objData['seccion']}',
                    '{$turns}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_insert_id($this->con);
            return $this->addSeccionGrados($this->result, $this->objData['grados']);
        }

        public function addSeccionGrados($idSeccion, $arrGrados) {
            foreach($arrGrados as $grado) {
                $explodeTurn = explode('-', $grado);
                $this->sql = "INSERT INTO 
                    seccion_grado ( 
                        id_seccion,
                        id_grado,
                        turno
                    ) 
                    VALUES (
                        '{$idSeccion}',
                        '{$explodeTurn[0]}',
                        '{$explodeTurn[1]}'
                    )
                ";

                $this->query = mysqli_query($this->con, $this->sql);
                $this->result = mysqli_insert_id($this->con);
            }
           
            return true;
        }

        public function deleteSeccion() {
            $this->sql = "DELETE FROM  secciones WHERE id = '{$this->objData['idSection']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_insert_id($this->con);

            $this->sql = "DELETE FROM  seccion_grado WHERE id_seccion = '{$this->objData['idSection']}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_insert_id($this->con);

            return $this->result;
        }

        protected function uniqueTurns($arrgrados) {
            $gradosTurn = [];
            $arrResult = [];
            $return = [];
            foreach($arrgrados as $index => $grado) {
               $explod = explode('-', $grado);
               $gradosTurn[$index] = $explod[1];
            }

            $arrResult = array_unique($gradosTurn);
            if(count($arrResult) == 1) {
                foreach($arrResult as $value) {
                    $return = [$value];
                }
            } 

            if(count($arrResult) == 2) {
                $return = ["M","T"];
            }

            return $return;
        }
    }
?>