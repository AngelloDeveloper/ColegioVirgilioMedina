//functions validation data type in inputs.

const arrDataPatterntype = {
    'text' : {reg: new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"), message: 'Solo se admiten letras'},
    'num' : {reg: new RegExp("^[0-9]+$"), message: 'Solo se admiten numeros'},
    'date' : '',
    'email' : '',
    'url' : '',
    'boolean' : ''
};

function validateData(value, dataType) {
    let pattern = arrDataPatterntype[dataType]['reg'];
    let validation = pattern.test(value) ? true : false;
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
                console.log(validmessage);
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