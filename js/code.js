$(function () {


    let verification = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    $('#formulaireConnexion').submit(function () {


        if ($('input[type="email"]').val() == "" || !(verification.test($('#email').val()))) {
            $('.invalid-feedback:first').show();
        } else {
            $('.invalid-feedback:first').hide();
        }

        if ($('input[type="password"]').val() == "") {
            $('.invalid-feedback:last').show();
        } else {
            $('.invalid-feedback:last').hide();
        }


        if ($('input[type="email"]').val() == "" || !(verification.test($('#email').val())) || $('input[type="password"]').val() == "") {
            return false;
        }



    });


});
