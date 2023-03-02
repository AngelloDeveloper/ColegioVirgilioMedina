<?php 
    class Planificacion extends Conexion {
        //properties
        private $sql;
        private $query;
        private $con;
        private $objData;
        private $secciones;
        private $result;

        //methods
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->objData = $arrData;
            }
        }

        public function addPlanificacion() {
            $this->secciones = json_decode(json_encode($this->objData['secciones']), true);
            $this->sql = "INSERT INTO 
                planificacion ( 
                    titulo,
                    descripcion,
                    id_periodo,
                    id_materia,
                    id_docente,
                    id_lapso,
                    id_grado
                ) 
                VALUES (
                    '{$this->objData['titulo']}',
                    '{$this->objData['descripcion']}',
                    '{$this->objData['id_periodo']}',
                    '{$this->objData['materia']}',
                    '{$this->objData['id_docente']}',
                    '{$this->objData['lapso']}',
                    '{$this->objData['anio']}'
                )
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_insert_id($this->con);
            return $this->result;
        }

        public function addPlanificacionSecciones($idPlanificacion) {
            $this->secciones = json_decode(json_encode($this->objData['secciones']), true);
            foreach($this->secciones as $seccion) {
                $this->sql = "INSERT INTO 
                    planificacion_secciones ( 
                        id_planificacion,
                        id_seccion
                    ) 
                    VALUES (
                        '{$idPlanificacion}',
                        '{$seccion}'
                    )
                ";

                $this->query = mysqli_query($this->con, $this->sql);
            }
            $this->result = mysqli_insert_id($this->con);
            return $this->result;
        }

        public function getPlanificacion($idMateria) {
            $this->sql = "SELECT
                    * 
                FROM 
                    planificacion 
                WHERE id_docente = {$this->objData['id_docente']} AND id_materia = {$idMateria}"
            ;

            $this->query = mysqli_query($this->con, $this->sql);
            $numData = mysqli_num_rows($this->query);
            if(!empty($numData)) {
                while ($row = mysqli_fetch_assoc($this->query)) { 
                    $rows[] = $row; 
                }
                $this->result = $rows;
            } else {
                $this->result = null;
            }

            return $this->result;
        }
    }
?>