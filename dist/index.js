$(document).ready(function() {

  let hamburger = $(".hamburger");
  let navbar = $(".navbar");
  let close = $(".close");
  let sectionOne = $(".section-one");
  let sectionTwoTop = $(".section-two").offset().top;
  let sectionThreeChild = Array.from($(".section-three__grid .child"));
  let animate = false;
  let windowHeight = $(window).scrollTop();

  const load = () => {
    let tl = new TimelineLite();
    tl.from(sectionOne, 1, {left: -300,ease: Power1.easeOut});
    tl.from(navbar, 1, {right: -300}, "+0");

    TweenMax.set($(".section-two .child"), {opacity: 0});
    TweenMax.set($(".section-three .child"), {bottom: -100, opacity: 0});
  };

  const animateService = () => {
    let child = Array.from($(".section-two .child"));
    child.forEach((item, index) => {
      animate = true;
      let delay = 0.2 * index;
      let tl = new TimelineMax();
      tl.fromTo($(item), 1, {top: -100}, {top: 0,ease: Power1.easeInOut}, delay);
      tl.to($(item), 0.5, {opacity: 1}, "+0.5");
    });
  };

  const animateIcon = () => {
    sectionThreeChild.forEach((item, index) => {
      let tl = new TimelineMax();
      let delay = 0.2 * index;
      tl.to($(item), 1, {bottom: 0, opacity: 1}, delay);
    });
  };

  const isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    };
    return false;
  }


  if (!isMobile()) {
    load();

    if (windowHeight >= (sectionTwoTop - 450)) {
      if (!animate) {
        animateService();
      }
    };

    if(windowHeight >= (sectionTwoTop + 150) && !isMobile()) {
      animateIcon();
    }
  }


// animation on scroll
  $(window).scroll(function() {
    let windowHeight = $(window).scrollTop();

    if (windowHeight >= (sectionTwoTop - 450) && !isMobile()) {
      if (!animate) {
        animateService();
      }
    }

    if(windowHeight >= (sectionTwoTop + 150) && !isMobile()) {
      animateIcon();
    }
  });


// navbar a animation
  $(".navbar a").click(function() {
    var $href = $(this).attr("href");
    $("html, body").stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });


// mobile navigation
  hamburger.click(() => {
    navbar.addClass("show");
  });


  close.click(() => {
    navbar.removeClass("show");
  });

});