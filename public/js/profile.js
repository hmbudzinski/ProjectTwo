console.log("hi");
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  console.log(window.location);
  $.get(`/profile/${response.dataValues.id}`).then(function(data) {
    console.log(`${response.dataValues.id}`);
    $("#first-name").empty();
    $("#first-name").text(data.firstName);

    $("#last-name").empty();
    $("#last-name").text(data.lastName);

    $("#email").empty();
    $("#email").text(data.email);

    $("#fandom").empty();
    $("#fandom").text(data.fandoms);

    $("#relationship").empty();
    $("#relationship").text(data.relationship);

    $("#dad-joke").empty();
    $("#dad-joke").text(data.dadJoke);

    $("#cosplay").empty();
    $("#cosplay").text(data.cosplay);

    $("#pronounce-gif").empty();
    $("#pronounce-gif").text(data.gif);
  });
});

// $(document).ready(function() {
//   var logout = $("#logout");

//   //changed html just to get it to work, can change back after its fuctioning to look better
//   logout.on("click", function(event) {
//     //console works
//     console.log("click");

//     $.get("/logout")
//       .then(function() {
//         window.location.replace("/");
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   });
// });
