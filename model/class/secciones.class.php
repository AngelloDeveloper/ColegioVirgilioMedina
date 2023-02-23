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
    }
?>