function init() {
    $(document).ready(function(){
        $('select').formSelect();
    });

    $(document).ready(function(){
        initConfigDate();
    });
}

function initMaterialInput() {
    M.AutoInit();
    M.updateTextFields();
    M.FormSelect.init($('select'));
    M.Collapsible.init($('.collapsible'));
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
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dic'
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