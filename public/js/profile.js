$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
        console.log(data);
        $("#first-name").empty();
        $("#first-name").text(data.firstName);

        $("#last-name").empty();
        $("#last-name").text(data.lastName);

        $("#email").empty();
        $("#email").text(data.email);

        $("#dad-joke").empty();
        $("#dad-joke").text(data.dadJokes);

        $("#fandom").empty();
        $("#fandom").text(data.fandom);

        $("#is-introvert").empty();
        $("#is-introvert").text(data.isIntrovert);

        $("#pronounce-gif").empty();
        $("#pronounce-gif").text(data.pronunceGif);
    });
});

$(document).ready(function() {
    var logout = $("#logout");

    //changed html just to get it to work, can change back after its fuctioning to look better
    logout.on("click", function(event) {
        //console works
        console.log("click")

        $.get("/logout").then(function() {
                window.location.replace("/")
            })
            .catch(function(err) {
                console.log(err);
            });
    });
});