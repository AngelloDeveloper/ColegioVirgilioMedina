<?php 
    class Cupos extends Conexion {
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

        public function getCuposForPeriodo($idPeriodo, $turno='') {
            if($turno!='') {
                $this->sql = " SELECT
                    *
                FROM
                    cupos
                WHERE
                    id_periodo = '{$idPeriodo}' AND turno = '{$turno}'
                ";
            } else {
                $this->sql = " SELECT
                    *
                FROM
                    cupos
                WHERE
                    id_periodo = '{$idPeriodo}'
                ";
            }
            

            $this->query = mysqli_query($this->con, $this->sql);
            $count = mysqli_num_rows($this->query);
            if($count != 0) {
                while ($row = mysqli_fetch_assoc($this->query)) { 
                    $rows[] = $row; 
                } 
                $this->result = $rows;
            } else {
                $this->result = 0;
            }

            return $this->result;
        }

        public function getTurnoPeriodo() {
            $this->sql = " SELECT
                    *
                FROM
                    cupos
                WHERE
                    id_periodo = '{$this->objData['periodo']}'  AND turno = '{$this->objData['turn']}'
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $count = mysqli_num_rows($this->query);
           
            if($count != 0) {
                while ($row = mysqli_fetch_assoc($this->query)) { 
                    $rows[] = $row; 
                } 
                $this->result = $rows;
            } else {
                $this->result = 0;
            }

            return $this->result;
        }

        public function addCupos() {
            $this->sql = "INSERT INTO 
                cupos ( 
                    id_grado,
                    cupo,
                    turno,
                    id_periodo
                ) 
                VALUES 
                    ('{$this->objData['objData'][0]['name']}','{$this->objData['objData'][0]['value']}','{$this->objData['turn']}','{$this->objData['periodo']}'),
                    ('{$this->objData['objData'][1]['name']}','{$this->objData['objData'][1]['value']}','{$this->objData['turn']}','{$this->objData['periodo']}'),
                    ('{$this->objData['objData'][2]['name']}','{$this->objData['objData'][2]['value']}','{$this->objData['turn']}','{$this->objData['periodo']}'),
                    ('{$this->objData['objData'][3]['name']}','{$this->objData['objData'][3]['value']}','{$this->objData['turn']}','{$this->objData['periodo']}'),
                    ('{$this->objData['objData'][4]['name']}','{$this->objData['objData'][4]['value']}','{$this->objData['turn']}','{$this->objData['periodo']}')
            ";

            $this->query  = mysqli_query($this->con, $this->sql);
            return $this->result;
        }

        public function UpdateCupos() {
            for($i=0; $i <= 4; $i++) {
                $this->sql = " UPDATE cupos
                    SET cupo = {$this->objData['objData'][$i]['value']}
                    WHERE id_grado = {$this->objData['objData'][$i]['name']} AND turno = '{$this->objData['turn']}' AND id_periodo = {$this->objData['periodo']};
                ";
                $this->query  = mysqli_query($this->con, $this->sql);
            }
            return $this->result;
        }
    }
?>