$(document).ready(function() {
    var submitBtn = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    //need to do this page after the signup page is functioning
    submitBtn.on("submit", function(event) {
        console.log("submitted")
        event.preventDefault();

        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        console.log(email, password);
        $.post("/api/signin", {
                email: email,
                password: password
            }).then(function() {
                window.location.replace("/profile")
            })
            .catch(function(err) {
                console.log(err);
            });
    };
});

$(document).ready(function() {
    var homebtn = $("#homebtn");

    //changed html just to get it to work, can change back after its fuctioning to look better
    homebtn.on("click", function(event) {
        //console works
        console.log("click")
        event.preventDefault();
        window.location.replace("/");
    });
});