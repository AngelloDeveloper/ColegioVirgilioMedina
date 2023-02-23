<?php 
    class Lapsos extends Conexion {
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

        public function getAllLapsos() {
            $this->sql = " SELECT
                    *
                FROM
                    lapsos
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