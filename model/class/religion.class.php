<?php 
    class Religion extends Conexion {
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

        public function getAllReligiones() {
            $this->sql = "SELECT * FROM religiones";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }
    }
?>