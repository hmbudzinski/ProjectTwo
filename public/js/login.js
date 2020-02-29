// import { decodeBase64 } from "bcryptjs";

$(document).ready(function() {
    $("form.login").on("submit", function(event) {
        console.log("submitted")
        event.preventDefault();

        var userData = {
            email: $("input#email-input").val().trim(),
            password: $("input#password-input").val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        signInUser(userData.email, userData.password);
        $("input#email-input").val("");
        $("input#password-input").val("");
    });

    function signInUser(email, password) {
        console.log(email, password);
        $.post("/api/signin", {
                email: email,
                password: password
            }).then(function(data) {
                console.log("LOGIN REQ.USER", data);
                window.location.assign(`/profile/${data.id}`)
            })
            .catch(function(err) {
                console.log(err);
                alert('Incorrect Email or Password')
            });
    };

    $("#homebtn").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/");
    });

    $("#mobileHome").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/");
    });
});