$(function() {
    const BASE_URL = "../controllers/";
    const CONTROLLER_PRINCIPAL = "controller_cupos.php";
    initMaterialInput();


    //submit events
    $('#form-manana').submit((e) => {
        e.preventDefault();
        let elm = e.target;
        const obj = {
            type: 'addCupos',
            periodo: '',
            turn: 'manana',
            objData: $(elm).serializeArray()
        };

        $.post('../controllers/controller_cupos.php', obj, function(response) {
            console.log(response);
        })

    })

    $('#form-tarde').submit((e) => {
        e.preventDefault();
        let elm = e.target;
        const obj = {
            type: 'addCupos',
            periodo: '',
            turn: 'tarde',
            objData: $(elm).serializeArray()
        };

        $.post('../controllers/controller_cupos.php', obj, function(response) {
            console.log(response);
        })
    })
})