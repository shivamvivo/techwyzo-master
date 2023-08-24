new WOW().init();
$("#carouselFade").carousel();
$("#clients").owlCarousel({
    autoPlay: 3000,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [600, 2],
    itemsMobile: [320, 2],
    transitionStyle: "fade"
});
$(document).ready(function() {
    $(".fancybox").fancybox()
});
jQuery(document).ready(function() {
    jQuery(".scrollbar-inner").scrollbar()
});