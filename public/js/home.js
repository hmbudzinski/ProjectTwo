$(document).ready(function() {
    var signInBtn = $("#signInBtn");
    var createAccount = $("#createButton");

    //changed html just to get it to work, can change back after its fuctioning to look better
    signInBtn.on("click", function(event) {
        //console works
        console.log("click")
        event.preventDefault();
        window.location.replace("/signin");
    });

    createAccount.on("click", function(event) {
        //console works
        console.log("clickity Click")
        event.preventDefault();
        window.location.replace("/signup")
    });
});