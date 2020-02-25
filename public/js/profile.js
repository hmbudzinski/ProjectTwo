console.log('hi');
$(document).ready(function() {
    console.log('hello');
    console.log(window.location.pathname);
    var url = '/api' + window.location.pathname;

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    // $.get( "ajax/test.html", function( data ) {
    //     $( ".result" ).html( data );
    //     alert( "Load was performed." );
    //   });

    $.get(url, function(data) {
        console.log(data);
        $('#first-name').empty();
        $('#first-name').text(data.firstName);
        $('#last-name').empty();
        $('#last-name').text(data.lastName);
        $('#email').empty();
        $('#email').text(data.email);
        $('#fandom').empty();
        $('#fandom').text(data.fandoms);
        $('#relationship').empty();
        $('#relationship').text(data.relationship);
        $('#dad-joke').empty();
        $('#dad-joke').text(data.dadJoke);
        $('#cosplay').empty();
        $('#cosplay').text(data.cosplay);
        $('#pronounce-gif').empty();
        $('#pronounce-gif').text(data.gif);
    });
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    //logout works but the code above does not so it is breaking the whole code
    $('#logout').on('click', function(event) {
        console.log('click');
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