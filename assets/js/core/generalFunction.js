function DateGuionFormat(fecha) {
    var formatDate = fecha.split('/').reverse().join('-');
    return formatDate;
}

function DateSlashFormat(fecha) {
    var formatDate = fecha.split('-').reverse().join('/');
    return formatDate;
}

function makeid(length) {
    var SalaGenerate     = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        SalaGenerate += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return SalaGenerate;
 }

 function replaceCracterEspecialities(caracter1, caracter2, objData) {
     if(objData.length > 1) {
        var lengthString = objData.length;
        for(var i = 0; i <= lengthString; i++) {
            var resultAux = objData[i]['id_especialidad_medica'].replace(caracter1, "");
        }
        return objData;

     } else {
        objData[0]['id_especialidad_medica']
        var resultAux = objData[0]['id_especialidad_medica'].replace(caracter1, "");
        return result;
     }
 }

 function Edad(FechaNacimiento) {

    var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var ano = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(ano);

    edad = Math.floor( ( (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365) );
   
    return edad;
}

function initConfigDate() {
    var date = new Date();
    var year = date.getFullYear();
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        yearRange: [1950, year],
        i18n: {
            done: 'Listo',
            cancel: 'Cancelar',
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            months: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Augosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Deciembre'
            ],
            weekdays: [
                'Domingo',
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado'
            ],
            weekdaysShort: [
                'Dom',
                'Lun',
                'Mar',
                'Mie',
                'Jue',
                'Vie',
                'Sab'
            ],
            weekdaysAbbrev: ['D','L','M','M','J','V','S'],
        }
       
    });
    var instance = M.Datepicker.getInstance($('.datepicker'));
    instance.setDate(new Date());
    instance.gotoDate(new Date());
}