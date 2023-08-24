$(".spons_slider").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, ]
}), $(".footr_logo_slider").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, ]
}), $(".testi_slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 600,
    fade: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !1,
            dots: !1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
}), $(function() {
    $("#menu").slicknav()
}), $("[data-targetit]").on("click", function() {
    $(this).siblings().removeClass("current"), $(this).addClass("current");
    var s = $(this).data("targetit");
    $("." + s).siblings('[class^="tabs"]').removeClass("current"), $("." + s).addClass("current"), $(".slick-slider").slick("setPosition", 0)
});