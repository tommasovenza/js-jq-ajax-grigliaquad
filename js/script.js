$(document).ready(function () {

    $('.cella').click(function () {

        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(data) {
                    console.log(data)
                },

                error: function() {
                    alert('qualcosa non va');
                }
            }   
        );

    });



});