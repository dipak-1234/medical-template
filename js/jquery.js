$("#owl-demo").owlCarousel({
  autoPlay: 3000, // set AutoPlay to 3 seconds
  lazyLoad: true,

  items: 2,
  itemsDesktop: [1199, 2],
  itemsDesktopSmall: [1050, 2],
});
$(".carousel-slider").owlCarousel({
  autoPlay: 4000,
  lazyLoad: true,

  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [1050, 2],
  itemsMobile: [450, 1],
});
$(".carousel-owl").owlCarousel({
  autoPlay: 5000,
  lazyLoad: true,

  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [1050, 2],
  itemsMobile: [450, 1],
});

// $(document).ready(function () {
//   if ($("#sidebar").length) {
//     // make sure sticky element exist
//     var ele = $("#sidebar");
//     var stickyTop = $("#sidebar").offset().top; // returns number
//     var stickyHeight = $("#sidebar").height();

//     $(window).scroll(function () {
//       // scroll event
//       var limit = $("#doctor").offset().top - stickyHeight - 25;

//       var windowTop = $(window).scrollTop(); // returns number

//       if (stickyTop < windowTop) {
//         ele.css({ position: "fixed", top: 0 });
//       } else {
//         ele.css("position", "static");
//       }

//       if (limit < windowTop) {
//         var diff = limit - windowTop;
//         ele.css({ top: diff });
//       }
//     });
//   }
// });
