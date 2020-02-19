// $(document).ready(function() {
var submitBtn = $("form.login");
var emailInput = $("input#email-input");
var passwordInput = $("input#password-input");

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
// });