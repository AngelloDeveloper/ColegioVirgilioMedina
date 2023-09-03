<?php 
    class Estudiantes extends Conexion {
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

        public function verificationDataExist($data) {
            $key = key($data);
            if($key == 'email') {
                $this->sql = " SELECT * FROM usuarios WHERE {$key} = '{$data[$key]}'";
                $this->query = mysqli_query($this->con, $this->sql);
                $count = mysqli_num_rows($this->query);
                if($count == 0) {
                    return false;
                } else { return [$key => ['usuarios' => $data[$key]]];}
            } else { //cedula, telf_movil, telf_residencia
                 //tabla estudiantes
                $this->sql = " SELECT * FROM estudiantes WHERE {$key} = {$data[$key]}";
                $this->query = mysqli_query($this->con, $this->sql);
                $count = mysqli_num_rows($this->query);
                if($count == 0) {
                    //tabla madres
                    $this->sql = " SELECT * FROM madres WHERE {$key} = {$data[$key]}";
                    $this->query = mysqli_query($this->con, $this->sql);
                    $count = mysqli_num_rows($this->query);
                    if($count == 0) {
                        //tabla padres
                        $this->sql = " SELECT * FROM padres WHERE {$key} = {$data[$key]}";
                        $this->query = mysqli_query($this->con, $this->sql);
                        $count = mysqli_num_rows($this->query);
                        if($count == 0) {
                            //tabla representantes
                            $this->sql = " SELECT * FROM representantes WHERE {$key} = {$data[$key]}";
                            $this->query = mysqli_query($this->con, $this->sql);
                            $count = mysqli_num_rows($this->query);
                            if($count == 0) {
                                return false;
                            } else {return [$key => ['representantes' => $data[$key]]];}
                        } else {return [$key => ['padres' => $data[$key]]];}
                    } else {return [$key => ['madres' => $data[$key]]];}
                } else {return [$key => ['estudiantes' => $data[$key]]];}
            }
        }
    }
?>