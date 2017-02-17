$(document).ready(function() {
    $("#form").submit(function(event) {
        if (validate()) {
            $.ajax({
                url: "http://private-644da-frontend7.apiary-mock.com/aplication",
                type: "post",
                dataType: "json",
                success: function(response) {
                    for (var i = 0; i < response.length; i++) {
                        var person = response[i];

                        if (person.edad > 25 && person.sexe.toLowerCase() == "femeni") {
                            console.log(person.nom);
                        };
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });

            $("#ok").css("display", "block");
        }
        event.preventDefault();
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateName(name) {
        var re = /^[A-Za-z ]+$/;
        return re.test(name);
    }

    function validate() {
        $("#result").text("");
        var email = $("#email");
        var name = $("#name");
        var result = false;

        if (validateEmail(email.val())) {
            email.css("border-color", "");
            result = true;
        } else {
            email.css("border-color", "red");
            result = false;
        }
        if (validateName(name.val())) {
            name.css("border-color", "");
            result = true;
        } else {
            name.css("border-color", "red");
            result = false;
        }

        return result;
    }
});