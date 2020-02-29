console.log('hi');
$(document).ready(function() {
    console.log('hello');
    console.log(window.location.pathname);
    var url = '/api' + window.location.pathname;

    $.get(url, function(data) {
        $('#first-name').append(data.firstName + ' ' + data.lastName);
        $('#first-name').css({ 'font-size': '150%', color: 'white' });

        // $('#last-name').append(data.lastName);
        // $('#last-name').css({ 'font-size': '150%', color: 'white' });

        $('#email').append(data.email);
        $('#email').css({ 'font-size': '150%', color: 'white' });

        var jsonFand = JSON.parse(data.fandoms);
        $('#fandom').append(jsonFand.join(', '));
        console.log(data.fandoms);
        $('#fandom').css({ 'font-size': '150%', color: 'white' });

        $('#relationship').append(data.relationship);
        $('#relationship').css({ 'font-size': '150%', color: 'white' });

        $('#dad-joke').append(data.dadJoke);
        $('#dad-joke').css({ 'font-size': '150%', color: 'white' });

        $('#cosplay').append(data.cosplay);
        $('#cosplay').css({ 'font-size': '150%', color: 'white' });

        $('#pronounce-gif').append(data.gif);
        $('#pronounce-gif').css({ 'font-size': '150%', color: 'white' });
    });
});

$('#logout').on('click', function(req, res) {
    console.log('click');
    $.get('/logout')
        .then(function() {
            window.location.replace('/');
            req.logout();
            // res.end();
        })
        .catch(function(err) {
            console.log(err);
        });
});

$('#swipe').on('click', function(event) {
    console.log('click');
    $.get('/swipe')
        .then(function() {
            window.location.replace('/swipe');
            // req.logout();
            // res.end();
        })
        .catch(function(err) {
            console.log(err);
        });
});