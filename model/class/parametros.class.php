<?php 
    class Parametros extends Conexion {
        //properties
        //private $objData;
        private $query;
        private $con;
        private $sql;
        private $result;
        //methods
        public function __construct() {
            $this->con = $this->conexion();
            /*if(!empty($arrData)) {
                $this->objData = $arrData;
            }*/
        }

        function getParameter($param) {
            $this->sql = "SELECT * FROM parametros WHERE parametro = '{$param}'";
            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
            return $this->result;
        }
    }
?>