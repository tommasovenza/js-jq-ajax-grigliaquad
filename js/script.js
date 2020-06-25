$(document).ready(function() {

    $('.riga .cella').click(function() {

        var element = this;

        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(data) {
                    
                    var numero = data.response;
                    console.log(numero);

                    $(element).text(numero);    

                    if (numero < 5) {
                        $(element).removeClass('green');
                        $(element).addClass('yellow');
                    } else {
                        $(element).removeClass('yellow');
                        $(element).addClass('green');
                    }
                },

                error: function() {
                    alert('qualcosa non va');
                }
            }   
        );

    });



});