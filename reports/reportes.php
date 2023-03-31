<?php 
    use Mpdf\Mpdf;
    require ('../vendor/autoload.php');
    
    function pre_registro($data) {
        $mpdf = new Mpdf();
        $mpdf->WriteHTML('<h1>pre registro</h1>');
        $mpdf->Output();
    }
?>