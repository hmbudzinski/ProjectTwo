$(document).ready(function() {
    $('select').formSelect();
    var fileName = null;
    $('input[type="file"]').change(function(e) {
        fileName = e.target.files[0];
        console.log(fileName);
    });
});


function group1() {
    var g1 = $('input[name=group1]:checked');
    var g1DataName = $(g1).data('name');
    console.log('g1', g1);
    console.log('g1DataName', g1DataName);
    return g1DataName;
}

function group2() {
    var g2 = $('input[name=group2]:checked');
    var g2DataName = $(g2).data('name');
    console.log('g2', g2);
    console.log('g2DataName', g2DataName);
    return g2DataName;
}

function group3() {
    var g3 = $('input[name=group3]:checked');
    var g3DataName = $(g3).data('name');
    console.log('g3', g3);
    console.log('g3DataName', g3DataName);
    return g3DataName;
}

function fandoms() {
    var fandom = $('#fandom').val();
    console.log('fandom', fandom);
    return JSON.stringify(fandom);
}

$('#signUp').on('click', function(event) {
    event.preventDefault();
    console.log('6');

    var uploadedImage;

    var file = document.querySelector('#file-input').files[0];
    console.log("file:::" + file)
    var reader = new FileReader();
    if (file) {
        // reader.readAsDataURL(file);
        // console.log(reader, "READER");
        // reader.onload = function() {
        //     console.log(reader.result);
        //     uploadedImage = reader.result;
        //     console.log("image Uploaded:" + uploadedImage);
        //     return uploadedImage;
        // };
        uploadedImage = URL.createObjectURL(file);
    } else {
        uploadedImage = URL.createObjectURL("assets/person-placeholder.jpg");

    }
    console.log("uploadedImage:" + uploadedImage);

    var relationship = group1();
    var dadJoke = group2();
    var gif = group3();
    var fanFunk = fandoms();

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
        fandoms: fanFunk,
        relationship: relationship,
        dadJoke: dadJoke,
        cosplay: $('#cosplay')
            .val()
            .trim(),
        gif: gif,
        uploadedImage: uploadedImage
    };

    // Send an AJAX POST-request with jQuery
    $.post('/api/signup', newUser)
        // On success, run the following code
        .then(function(newUser) {
            // Log the data we found
            console.log(newUser, '2');
            console.log(`bout to redirect to /profile/${newUser.id}`)
            window.location.assign(`/profile/${newUser.id}`);
        });

    // Empty each input box by replacing the value with an empty string
    $('#first_name').val('');
    $('#last_name').val('');
    $('#email').val('');
    $('#password').val('');
    $('#fandoms').val('');
    $('#cosplay').val('');

    $("#homebutton").on("click", function(event) {
        event.preventDefault();
        window.location.replace("/");
    });
});