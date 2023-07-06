<?php 
    class Planificacion extends Conexion {
        //properties
        private $sql;
        private $query;
        private $con;
        private $objData;
        private $secciones;
        private $result;
        private $where;

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
                    porcentaje,
                    id_periodo,
                    id_materia,
                    id_docente,
                    id_lapso,
                    id_grado
                ) 
                VALUES (
                    '{$this->objData['titulo']}',
                    '{$this->objData['descripcion']}',
                    '{$this->objData['porcentaje']}',
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

        public function addActividades($idPlanificacion) {
            $actividades = json_decode(json_encode($this->objData['actividades']), true);
            foreach($actividades as $data) {
                $this->sql = "INSERT INTO 
                    planificacion_actividades ( 
                        actividad,
                        porcentaje,
                        id_planificacion
                    ) 
                    VALUES (
                        '{$data['actividad']}',
                        '{$data['porcentaje']}',
                        '{$idPlanificacion}'
                    )
                ";

                $this->query = mysqli_query($this->con, $this->sql);
                $this->result = mysqli_insert_id($this->con);
            }

            return $this->result;
        }

        public function validarPlanificacion() {
            $this->sql = "SELECT 
                    SUM(porcentaje) AS total_porcentaje 
                FROM 
                    planificacion 
                WHERE
                    id_docente = {$this->objData['id_docente']} AND
                    id_materia = {$this->objData['materia']} AND
                    id_periodo = {$this->objData['id_periodo']} AND
                    id_lapso = {$this->objData['lapso']} AND
                    id_grado = {$this->objData['anio']}
            ";

            $this->query = mysqli_query($this->con, $this->sql);
            $this->result = mysqli_fetch_assoc($this->query);
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
                $this->result = false;
            }

            return $this->result;
        }

        public function search_planificacion() {

            if(!empty($this->objData['id_docente'])) {
                $this->where[] = "id_docente = '{$this->objData['id_docente']}'";
            }
            if(!empty($this->objData['materia'])) {
                $this->where[] = "id_materia = '{$this->objData['materia']}'";
            }
            if(!empty($this->objData['anio'])) {
                $this->where[] = "id_grado = '{$this->objData['anio']}'";
            }
            if(!empty($this->objData['lapso'])) {
                $this->where[] = "id_lapso= '{$this->objData['lapso']}'";
            }
            if(!empty($this->objData['planificacion'])) {
                $this->where[] = "titulo LIKE '%{$this->objData['planificacion']}%'";
            }
            if(!empty($this->objData['secciones'])) {
                $secciones = json_decode(json_encode($this->objData['secciones']), true);
                $planificacion_secciones = "INNER JOIN planificacion_secciones ON planificacion.id = planificacion_secciones.id_planificacion";
                foreach($secciones as $seccion) {
                    $this->where[] = "planificacion_secciones.id_seccion = {$seccion}";
                }
            } else {
                $planificacion_secciones = "";
            }


            $wh = implode(' AND ', $this->where);
            $this->sql = "SELECT 
                    planificacion.*
                FROM 
                    planificacion 
                    {$planificacion_secciones}
                WHERE 
                    {$wh}"
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