$(function () {
  feather.replace();

  $("#content").fullpage({
    anchors: ["intro", "pf01", "pf02", "pf03", "pf04", "pf05", "pf06", "info"],
    navigation: false,
    css3: false,
    scrollOverflow: false,
    scrollingSpeed: 1200,
    parallax: true,

    afterRender: function () {
      $("#content .section").eq(0).addClass("on");
    },

    afterLoad: function (lnk, idx) {
      $("#content .section")
        .eq(idx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
    },

    onLeave: function (idx, nidx) {
      $(".gnb .lnk>li")
        .eq(nidx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
    },
  });
});

let scrollNum = 0;
function scroll() {
  $(".scroll span").eq(scrollNum).addClass("on").siblings().removeClass("on");
  scrollNum++;
  if (scrollNum > 2) {
    scrollNum = 0;
  }
}

setInterval(scroll, 600);

function mainTxtTimeline() {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  tl.from(".intro_main_tit .d", {
    y: -200,
    autoAlpha: 0,
    scale: 0.3,
    ease: "bounce",
  })
    .from(".intro_main_tit .g", {
      y: -200,
      autoAlpha: 0,
      scale: 0.3,
      ease: "bounce",
    })
    .from(".intro_main_tit .a", {
      y: -200,
      autoAlpha: 0,
      scale: 0.3,
      ease: "bounce",
    });
}

mainTxtTimeline();

var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  rotate: 45,
  //spaceBetween: 30,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
