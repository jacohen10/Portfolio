$(document).ready(function(){
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  function findImgHeight() {
    portfolio1 = $("#portfolio1")[0];
    portfolio1Span = $(".text-content")[0];
    imgHeight = portfolio1.height + 8;
    console.log(imgHeight);
    $(portfolio1Span).css("height", imgHeight + "px");

    console.log(imgHeight);
  }
  findImgHeight();

  $(window).on('resize', function(){
    findImgHeight();
  });
  
});
