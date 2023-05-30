

<?php 
    // Require composer autoload
    //$mpdf = new \Mpdf\Mpdf();
    require_once  '../vendor/autoload.php';

    class GeneralReports extends \Mpdf\Mpdf {

        function __construct($CONFIG) {
            parent::__construct($CONFIG);
        }
        
        function prepareTemplate($template, $objData) {
            include($template.'.template.php');
            $newTemplate = template($objData);
            return $newTemplate;
        }

        function prepareStelesheet($template) {
            $stylesheet = file_get_contents('../reports/'.$template.'.template.css');
            return $stylesheet;
        }
    
        function generateReport($template, $stylesheet) {
            $this->WriteHTML($stylesheet, \Mpdf\HTMLParserMode::HEADER_CSS);
            $this->WriteHTML($template, \Mpdf\HTMLParserMode::HTML_BODY);
            $this->output();
        }
    }
?>