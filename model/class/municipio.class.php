<?php 
    class Municipio extends conexion {
        
        //Properties
        private $objData;
        private $sql;
        private $query;
        private $con;
        private $result;

        //Constructor
        public function __construct($arrData='') {
            //$this->objData = $arrData;
            $this->con  = $this->conexion();
        }

        public function getAllMunicipio() {
            $this->sql = "SELECT * FROM estados";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getMunicipio($id) {
            $this->sql = "SELECT * FROM municipios WHERE id_estado = {$id}";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }
    }
?>