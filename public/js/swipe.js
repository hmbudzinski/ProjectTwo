$(document).ready(function() {
  $('.cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        fade: true,
        cssEase: 'linear'
      }
    }
    ]
  });

  $(".modal").modal();
  // $.get("/api", function(data) {
  //   for (var i = 0; i < data.length; i++) {
  //     var profiles = [
  //       {
  //         Name: data.firstName,
  //         Info: data.fandoms,
  //         Image: " ",
  //         contact: data.email,
  //         Page: data.id
  //       }
  //     ];
  //     console.log(profiles);
  //   }
  // });

  // function getInfo(){
  //   $ajax('api/swipe', {
  //     method: 'GET',
  //   }).then(function(data){
  //     console.log('Data: ', data);
  //   });
  // }
  // getInfo();

});
// const Handlebars = require("handlebars");
// var source = $('#card').html();
// var template = Handlebars.compile(source);
// var context = [{
//   Name: 'Ben',
//   Info: 'Lord of the Rings',
//   contact: 'email.email',
//   Page: 'id # 4'
// }]
// ;
// var html = template(context);
// $(document.body).append(html);

// app.get('/swipe', function(req, res){
//   res.render('swipe', context[0]);
//   console.log(context[0]);
// });