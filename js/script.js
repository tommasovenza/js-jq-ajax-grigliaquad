$(document).ready(function () {

    $('.cella').click(function () {

        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(data) {
                    
                    var numero = data.response;
                    console.log(numero);


                    $('.number').append(numero);
                },

                error: function() {
                    alert('qualcosa non va');
                }
            }   
        );

    });



});