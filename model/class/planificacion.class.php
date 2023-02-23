<?php 
    class Planificacion extends Conexion {
        //properties
        private $sql;
        private $query;
        private $con;
        private $objData;
        private $secciones;

        //methods
        public function __construct($arrData='') {
            $this->con = $this->conexion();
            if(!empty($arrData)) {
                $this->objData = $arrData;
            }
        }

        public function addPlanificacion() {
            $this->secciones = json_decode(json_encode($this->objData['secciones']), true);
            foreach($this->secciones as $seccion) {
                $this->sql = "INSERT INTO 
                    planificacion ( 
                        titulo,
                        descripcion,
                        id_periodo,
                        id_materia,
                        id_docente,
                        id_lapso,
                        id_seccion,
                        id_grado
                    ) 
                    VALUES (
                        '{$this->objData['titulo']}',
                        '{$this->objData['descripcion']}',
                        '{$this->objData['id_periodo']}',
                        '{$this->objData['materia']}',
                        '{$this->objData['id_docente']}',
                        '{$this->objData['lapso']}',
                        '$seccion',
                        '{$this->objData['anio']}'
                    )
                ";

                $this->query = mysqli_query($this->con, $this->sql);
            }

            return mysqli_insert_id($this->con);
        }
    }
?>