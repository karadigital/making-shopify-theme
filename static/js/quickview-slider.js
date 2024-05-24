document.addEventListener( 'DOMContentLoaded', function() {

  let quickViewSlider = new Splide( '#quick-view-slider', {
    // type       : "loop",
    // gap        : "5%",
    rewind     : false,
    pagination : true,
    isNavigation: true,
    perPage: 1,
    perMove: 1,
    arrows: false,
    drag: true,
  });

  quickViewSlider.mount();
});