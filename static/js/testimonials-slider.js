let testimonialsSlider = new Splide( '#testimonials-slider', {
    type       : "loop",
    gap        : "5%",
    rewind     : false,
    pagination : false,
    isNavigation: false,
    perPage: 3,
    perMove: 1,
    arrows: false,
    drag: true,
    autoplay: false,
    breakpoints: {
        640: {
        drag: true,
        perPage: 1,
        autoplay: true,
        },
    }
    });

    var testimonialBar = testimonialsSlider.root.querySelector( '.progress-status-slider' );

    // Updates the bar width whenever the carousel moves:
    testimonialsSlider.on( 'mounted move', function () {
    var end  = testimonialsSlider.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( testimonialsSlider.index + 1 ) / end, 1 );
    testimonialBar.style.width = String( 100 * rate ) + '%';
});
  
testimonialsSlider.mount();