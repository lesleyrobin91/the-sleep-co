// A $( document ).ready() block.
$( document ).ready(function() {


    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle();
      });

      // activate animate on scroll
      AOS.init({
        duration: 500 // values from 0 to 3000, with step 50ms
      });
});

// initializing the pop-up gallery
lightGallery(document.getElementById('lightgallery'), {
  download: false,
  speed: 500
});

lightGallery(document.getElementById('lightgallery-2'), {
  download: false,
  speed: 500
});