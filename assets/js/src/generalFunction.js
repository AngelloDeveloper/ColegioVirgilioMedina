function DateGuionFormat(fecha) {
    var formatDate = fecha.split('/').reverse().join('-');
    return formatDate;
}

function DateSlashFormat(fecha) {
    var formatDate = fecha.split('-').reverse().join('/');
    return formatDate;
}


function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function rangeAge(edad, rangoEdad={}) {
    if(rangoEdad.length == 0) {
        return false;
    }

    return edad >= rangoEdad.start && edad <= rangoEdad.end ? true : false;
}

function limitar_cadena(cadena, limite, sufijo){
    if(cadena.length > limite){
        return cadena.substr(0, limite) + sufijo;
    }

    return cadena;
}

function uuid() {
    var result='';
    for(var i=0; i<32; i++)
    result += Math.floor(Math.random()*16).toString(16).toUpperCase();
    return result;
}
