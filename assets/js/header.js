
  let intro = $("#intro");
  let header = $("#header");

  let introH = intro.innerHeight();
  let headerH = header.innerHeight();

  /* Header class on scroll  */

  headerScroll();

  $(window).on("scroll resize", function(){
      headerScroll();
  });

  function headerScroll() {
      introH = intro.innerHeight();
      headerH = header.innerHeight();

     let scrollTop = $(this).scrollTop() //проверяет на сколько проскроллена страница

     if (scrollTop >= (introH - headerH)) {
         header.addClass("header-dark");
     } else {
         header.removeClass("header-dark");
     }
  }
