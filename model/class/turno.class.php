<?php 
    class Turnos extends Conexion {
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

        public function getAllTurnos() {
            $this->sql = " SELECT
                    *
                FROM
                    turnos
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;            
        }

        public function getTurnoId($turno) {
            $this->sql = " SELECT
                    *
                FROM
                    turnos
                WHERE turno = '{$turno}'
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            return $this->result; 
        }
    }
?>