//functions validation data type in inputs.

const arrDataPatterntype = {
    'text' : { 
        reg: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/, 
        message: 'Solo se admiten letras'
    },
    'num' : {
        reg: /^[0-9]+$/, 
        message: 'Solo se admiten numeros'
    },
    'date' : {
        reg: /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/, 
        message: 'solo formato de fecha valido: dd/mm/yyyy'
    },
    'email' : {
        reg: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
        message: 'El correo no es valido'
    },
    'telf_movil' : {
        reg : /(\+)?[ -]*([0-9][ -]*){10}/,
        message : 'El numero telefónico no es valido'
    },
    'mts' : {
        reg: /^[1]*(\.[0-9]{2})+$/, 
        message: 'valor invalido, se requiere un valor menor a 2 mts, ejem: (1.52)'
    },
    'kgs' : {
        reg: /^[0-9]{2,3}$/, 
        message: 'se admite un valor de 2 o 3 digitos, ejem: (53 o 102)'
    },
    'url' : '',
    'boolean' : ''
};

function validateData(value, dataType) {
    let pattern = arrDataPatterntype[dataType]['reg'];
    validation = pattern.test(value) ? true : false;
    return validation;
}

function styleValidation(elm, value ,validation, dataType) {
    if(value != '') {
        if(validation) {
            $(elm).parent().find('span').remove();
        } else {   
            let span = $(elm).parent().children('span').length; 
            if(span == 0) {
                let validmessage = $(elm).data('validmessage');
                let message = validmessage != undefined ? validmessage : arrDataPatterntype[dataType]['message'];
                $(elm).parent().append(`<span style="color: #D9131C;">${message}</span>`);
            }
        }
    } else {
        $(elm).parent().find('span').remove();
    }
}

function asyncVerificationDataInput() {
    $(document).on('keyup', '.verificationData', function() {
        let elm = $(this)[0];
        let value = $(elm).val();
        let dataType = $(elm).data('datatype');
        let validation = validateData(value, dataType);
        styleValidation(elm, value, validation, dataType);
})
}

asyncVerificationDataInput();