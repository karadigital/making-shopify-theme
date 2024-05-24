document.addEventListener( 'DOMContentLoaded', function() {
    var productGallery = new Splide( '#product-gallery__image-list', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination : false,
      arrows     : false,
      cover      : true,
      destroy    : true,
      mediaQuery : 'min',
      breakpoints: {
        375: {
          destroy: false,
        },
        1024: {
          destroy: true,
        }
      }
    } );

    // To connect the thumbnail and product gallery
    var thumbnails = document.getElementsByClassName( 'product-single__thumbnails-item' );
    var currentThumbnail; // Declare currentThumbnail globally

    for ( var i = 0; i < thumbnails.length; i++ ) {
      initThumbnail( thumbnails[ i ], i );
    }

    function initThumbnail( thumbnail, index ) {
      thumbnail.addEventListener( 'click', function (event) {
        if (window.innerWidth <= 767) {
          event.preventDefault(); // Prevent default behavior only on mobile
        }
        productGallery.go( index );
        updateActiveThumbnail(thumbnail);
      });
    }

    function updateActiveThumbnail(thumbnail) {
      if (currentThumbnail) {
        currentThumbnail.classList.remove('is-active');
      }
      thumbnail.classList.add('is-active');
      currentThumbnail = thumbnail;
    }

    productGallery.on('mounted move', function() {
      var visibleIndex = productGallery.index;
      var thumbnail = thumbnails[visibleIndex];
      updateActiveThumbnail(thumbnail);
    });

    productGallery.mount();
});