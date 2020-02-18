$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
        console.log(data);
        $("#user-name").empty();
        $("#user-name").text(data.firstName);

        $("#dad-joke").empty();
        $("#dad-joke").text(data.dadJokes);

        $("#fandom").empty();
        $("#fandom").text(data.famdomOf);

        $("#is-introvert").empty();
        $("#is-introvert").text(data.isIntrovert);

        $("#pronounce-gif").empty();
        $("#pronounce-gif").text(data.pronunceGif);
    });
});