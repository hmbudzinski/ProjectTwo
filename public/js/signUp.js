$(document).ready(function() {
    $('select').formSelect();
});

//in this file we need to add sequelize for pushing the inputted data to the existing table

// The code in signUp.js handles what happens when the user clicks the "Sign Up" button.

// When user clicks add-btn
$('#signUp').on('click', function(event) {
    event.preventDefault();

    // Make a newUser object
    var newUser = {
        firstName: $('#first_name')
            .val()
            .trim(),
        lastName: $('#last_name')
            .val()
            .trim(),
        email: $('#email')
            .val()
            .trim(),
        password: $('#password')
            .val()
            .trim(),
        fandoms: $('#fandom')
            .val()
            .trim(),
        relationship: $('#relationship')
            .val()
            .trim(),
        dadJoke: $('#dadJoke')
            .val()
            .trim(),
        cosplay: $('#cosplay')
            .val()
            .trim(),
        gif: $('#gif').val()
    };

    // Send an AJAX POST-request with jQuery
    $.post('/api/signup', newUser)
        // On success, run the following code
        .then(function(data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $('#first_name').val('');
    $('#last_name').val('');
    $('#email').val('');
    $('#password').val('');
    $('#fandoms').val('');
    $('#relationship').val('');
    $('#dadJoke').val('');
    $('#cosplay').val('');
    $('#gif').val('');
});