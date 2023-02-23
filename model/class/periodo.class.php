<?php 
    class Periodo extends Conexion {
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

        public function getAllPeriodos() {
            $this->sql = " SELECT
                    *
                FROM
                    periodo_escolar
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            while ($row = mysqli_fetch_assoc($this->query)) { 
                $rows[] = $row; 
            } 
            $this->result = $rows;
            return $this->result;
        }

       public function getPeriodo($parm=[]) {
            $this->sql = " SELECT
                    *
                FROM
                    periodo_escolar
                WHERE 
                    estatus = 'Y'
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);

            if(!empty($parm)) {
                $return = [];
                foreach($parm as $parameter) {
                    $return[$parameter] = $this->result[$parameter];
                }

                $this->result = $return;
            }

            return $this->result;
        }
    }
?>