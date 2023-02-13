<?php 
    class Conexion {
        //properties
        private $host = 'localhost';
        private $users = 'root';
        private $password = '';
        private $db = 'cvm';
        
        //methods
        public function conexion() {
            $con = mysqli_connect($this->host,$this->users,$this->password, $this->db);
            $conect = mysqli_select_db($con, $this->db);

            return $con;
        }
    }
?>