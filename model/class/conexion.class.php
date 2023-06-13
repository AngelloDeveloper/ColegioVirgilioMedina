<?php 
    require_once  '../vendor/autoload.php';

    class Conexion extends Dotenv\Dotenv {
        //properties
        private $host;
        private $user;
        private $password;
        private $db;
        
        //methods
        private function ENV() {
            $this->createImmutable('../')->load();
        }

        private function setCredentials() {
            $this->ENV();
            $this->host     = $_ENV['HOST_DB'];
            $this->user     = $_ENV['USER_DB'];
            $this->password = $_ENV['PASS_DB'];
            $this->db       = $_ENV['DATABASE_DB']; 
        }

        public function conexion() {
            $this->setCredentials();
            $con = mysqli_connect($this->host,$this->user,$this->password, $this->db);
            mysqli_set_charset($con, "utf8mb4");
            return $con;
        }
    }
?>