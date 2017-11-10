$(document).ready(function(){

  let hamburger = $(".hamburger");
  let navbar = $(".navbar");
  let close = $(".close");
  let sectionOne = $(".section-one");

  const load = () => {
    let tl = new TimelineLite();
    tl.from(sectionOne, 1, {left: -300, ease: Power1.easeOut});
    tl.from(navbar, 1, {right: -300}, "+0");
  };

  load();


  $(".navbar a").click(function(){
    var $href = $(this).attr("href");
    console.log($($href).offset().top);
    $("html, body").stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });

  hamburger.click(() => {
    navbar.addClass("show");
  });


  close.click(() => {
    navbar.removeClass("show");
  });

});