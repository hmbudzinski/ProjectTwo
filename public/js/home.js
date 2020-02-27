$(document).ready(function() {
    //changed html just to get it to work, can change back after its fuctioning to look better
    $("#signInBtn").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/signin");
    });

    $("#mobileBtn").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/signin");
    });

    $("#createButton").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/signup")
    });
});