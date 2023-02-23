<?php 
    class Materias extends Conexion {
        //properties
        private $sql;
        private $query;
        private $con;
        private $result;
        private $objData;

        //methods
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->objData = $arrData;
            }
        }

        public function addMaterias() {
            
        }

        public function getAllMaterias() {
            $this->sql = "SELECT * FROM materias";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getMateria() {

        }
    }
?>