$(document).ready(function () {

    $('.riga .cella').click(function () {

        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(data) {
                    
                    var numero = data.response;
                    console.log(numero);


                    $('.riga .cella .number').text(numero);

                    

                    if (numero < 5) {
                        $('.riga .cella .number').removeClass('green');
                        $('.riga .cella .number').addClass('yellow');
                    } else {
                        $('.riga .cella .number').removeClass('yellow');
                        $('.riga .cella .number').addClass('green');
                    }
                },

                error: function() {
                    alert('qualcosa non va');
                }
            }   
        );

    });



});