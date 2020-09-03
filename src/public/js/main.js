AOS.init({ duration: 800, easing: "slide", once: !1 }),
  jQuery(document).ready(function (e) {
    "use strict";
    e(".carruselmio").owlCarousel({
      items: 1,
      loop: !0,
      margin: 10,
      autoplay: !0,
      autoplayTimeout: 5e3,
      animateOut: "fadeOut",
      autoplayHoverPause: !1,
    }),
      e(".loader").delay(1e3).fadeOut("slow"),
      e("#overlayer").delay(1e3).fadeOut("slow");
    e(".js-clone-nav").each(function () {
      e(this)
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    }),
      setTimeout(function () {
        var a = 0;
        e(".site-mobile-menu .has-children").each(function () {
          var s = e(this);
          s.prepend('<span class="arrow-collapse collapsed"><i style="font-size: 25px;z-index: 99;position: relative;top: -9px;" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></i> '),
            s
              .find(".arrow-collapse")
              .attr({
                "data-toggle": "collapse",
                "data-target": "#collapseItem" + a,
              }),
            s.find("> ul").attr({ class: "collapse", id: "collapseItem" + a }),
            a++;
        });
      }, 1e3),
      e("body").on("click", ".arrow-collapse", function (a) {
        var s = e(this);
        s.closest("li").find(".collapse").hasClass("show")
          ? s.removeClass("active")
          : s.addClass("active"),
          a.preventDefault();
      }),
      e(window).resize(function () {
        e(this).width() > 768 &&
          e("body").hasClass("offcanvas-menu") &&
          e("body").removeClass("offcanvas-menu");
      }),
      e("body").on("click", ".js-menu-toggle", function (a) {
        var s = e(this);
        a.preventDefault(),
          e("body").hasClass("offcanvas-menu")
            ? (e("body").removeClass("offcanvas-menu"), s.removeClass("active"))
            : (e("body").addClass("offcanvas-menu"), s.addClass("active"));
      }),
      e(document).mouseup(function (a) {
        var s = e(".site-mobile-menu");
        s.is(a.target) ||
          0 !== s.has(a.target).length ||
          (e("body").hasClass("offcanvas-menu") &&
            e("body").removeClass("offcanvas-menu"));
      });
    e(".nonloop-block-13").length > 0 &&
      e(".nonloop-block-13").owlCarousel({
        center: !1,
        items: 1,
        loop: !0,
        stagePadding: 0,
        margin: 0,
        autoplay: !0,
        nav: !0,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: { margin: 0, nav: !0, items: 2 },
          1000: { margin: 0, stagePadding: 0, nav: !0, items: 3 },
          1200: { margin: 0, stagePadding: 0, nav: !0, items: 4 },
        },
      }),
      e(".slide-one-item").owlCarousel({
        center: !1,
        items: 1,
        loop: !0,
        stagePadding: 0,
        margin: 0,
        autoplay: !0,
        pauseOnHover: !1,
        nav: !0,
        navText: [
          '<span class="icon-keyboard_arrow_left">',
          '<span class="icon-keyboard_arrow_right">',
        ],
      }),
      e(".slide-one-item-alt").owlCarousel({
        center: !1,
        items: 1,
        loop: !0,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1e3,
        autoplay: !0,
        pauseOnHover: !0,
        onDragged: function (a) {
          "left" == a.relatedTarget._drag.direction
            ? e(".slide-one-item-alt-text").trigger("next.owl.carousel")
            : e(".slide-one-item-alt-text").trigger("prev.owl.carousel");
        },
      }),
      e(".slide-one-item-alt-text").owlCarousel({
        center: !1,
        items: 1,
        loop: !0,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1e3,
        autoplay: !0,
        pauseOnHover: !0,
        onDragged: function (a) {
          "left" == a.relatedTarget._drag.direction
            ? e(".slide-one-item-alt").trigger("next.owl.carousel")
            : e(".slide-one-item-alt").trigger("prev.owl.carousel");
        },
      }),
      e(".custom-next").click(function (a) {
        a.preventDefault(),
          e(".slide-one-item-alt").trigger("next.owl.carousel"),
          e(".slide-one-item-alt-text").trigger("next.owl.carousel");
      }),
      e(".custom-prev").click(function (a) {
        a.preventDefault(),
          e(".slide-one-item-alt").trigger("prev.owl.carousel"),
          e(".slide-one-item-alt-text").trigger("prev.owl.carousel");
      });
    e("#date-countdown").countdown("2020/10/10", function (a) {
      e(this).html(
        a.strftime(
          '<span class="countdown-block"><span class="label">%w</span> weeks </span><span class="countdown-block"><span class="label">%d</span> days </span><span class="countdown-block"><span class="label">%H</span> hr </span><span class="countdown-block"><span class="label">%M</span> min </span><span class="countdown-block"><span class="label">%S</span> sec</span>'
        )
      );
    });
    e(".datepicker").length > 0 && e(".datepicker").datepicker();
    e(".js-sticky-header").sticky({ topSpacing: 0 });
    !(function () {
      e(".site-menu-toggle");
      e("body").on(
        "click",
        ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
        function (a) {
          a.preventDefault();
          var s = this.hash;
          e("html, body").animate(
            { scrollTop: e(s).offset().top },
            600,
            "easeInOutExpo",
            function () {
              console.log(s), (window.location.hash = s);
            }
          );
        }
      );
    })();
    e(window).scroll(function () {
      e(this).scrollTop() > 100
        ? e(".js-sticky-header").addClass("shrink")
        : e(".js-sticky-header").removeClass("shrink");
    });
    var a;
    (a = e("#posts")),
      e(window).resize(function () {
        a.isotope({ columnWidth: ".col-sm-3" });
      }),
      a.isotope({ filter: "*" }),
      e("#filters").on("click", "button", function () {
        var s = e(this).attr("data-filter");
        a.isotope({ filter: s }),
          e("#filters button").removeClass("active"),
          e(this).addClass("active");
      });
  }),
  $(".autoplay").slick({
    infinite: !0,
    autoplay: !0,
    speed: 2e3,
    autoplaySpeed: 100,
    accessibility: !1,
    pauseOnHover: !0,
    arrows: !1,
    draggable: !0,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          draggable: !0,
          slidesToScroll: 1,
          infinite: !0,
          dots: !1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          draggable: !0,
          mobileFirst: !0,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, draggable: !0, slidesToScroll: 1 },
      },
    ],
  });
