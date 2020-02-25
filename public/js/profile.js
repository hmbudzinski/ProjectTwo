$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    // $.get(`/profile/${response.dataValues.id}`).then(function(data) {
    //     console.log(data);
    //     $('#first-name').empty();
    //     $('#first-name').text(data.firstName);

    //     $('#last-name').empty();
    //     $('#last-name').text(data.lastName);

    //     $('#email').empty();
    //     $('#email').text(data.email);

    //     $('#fandom').empty();
    //     $('#fandom').text(data.fandoms);

    //     $('#relationship').empty();
    //     $('#relationship').text(data.relationship);

    //     $('#dad-joke').empty();
    //     $('#dad-joke').text(data.dadJoke);

    //     $('#cosplay').empty();
    //     $('#cosplay').text(data.cosplay);

    //     $('#pronounce-gif').empty();
    //     $('#pronounce-gif').text(data.gif);
    // });

    //logout works but the code above does not so it is breaking the whole code
    $('#logout').on("click", function(event) {
        console.log("click");
        $.get('/logout')
            .then(function() {
                window.location.replace('/');
                res.end();
            })
            .catch(function(err) {
                console.log(err);
            });
    });
});