<?php 
    class Paises extends conexion {
        
        //Properties
        private $objData;
        private $sql;
        private $query;
        private $con;
        private $result;

        //Constructor
        public function __construct($arrData='') {
            $this->objData = $arrData;
            $this->con  = $this->conexion();
        }

        public function getAllPaises() {
            $this->sql = "SELECT * FROM paises";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getPais($id) {
            $this->sql = "SELECT * FROM paises WHERE id = {$id}";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

        public function getPisesZone() {
            $zona = $this->objData['zona'];
            $this->sql = "SELECT * FROM paises WHERE zona = '{$zona}'";
            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }
    }
?>