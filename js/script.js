$(document).ready(function() {
    var images = [
        "img/htb_1.png", "img/htb_2.png", "img/htb_3.png",
        "img/htb_4.png", "img/htb_5.png", "img/htb_6.png",
        "img/htb_7.png", "img/htb_8.png", "img/htb_9.png",
        "img/htb_10.png", "img/htb_11.png", "img/htb_12.png",
        "img/htb_13.png", "img/htb_14.png", "img/htb_15.png",
        "img/htb_16.png", "img/htb_17.png", "img/htb_18.png",
        "img/htb_19.png", "img/htb_20.png", "img/htb_21.png",
        "img/htb_22.png", "img/htb_23.png", "img/htb_24.png"
    ];
    var currentIndex = 0;

    function showLightbox(index) {
        var imageUrl = images[index];
        var lightboxImage = $('<img>').attr('src', imageUrl);
        var lightbox = $('.lightbox').empty().append(lightboxImage);
        lightbox.fadeIn();
    }

    function hideLightbox() {
        $('.lightbox').fadeOut();
    }

    function navigate(delta) {
        currentIndex = (currentIndex + delta + images.length) % images.length;
        showLightbox(currentIndex);
    }

    images.forEach(function(image, index) {
        var imgElement = $('<img>').attr('src', image).attr('alt', 'Certificate ' + (index + 1))
                                   .addClass('certificate-img').data('index', index)
                                   .on('click', function() {
                                       currentIndex = $(this).data('index');
                                       showLightbox(currentIndex);
                                   });
        $('.certificates-gallery').append(imgElement);
    });

    $('.lightbox').on('click', function(e) {
        if ($(e.target).is('img')) {
            // If the clicked element is the image, hide the lightbox.
            hideLightbox();
        }
    });

    // Attach keydown event to navigate with arrow keys
    $(document).keydown(function(e) {
        if (e.key === "Escape") { // Escape key to close the lightbox
            hideLightbox();
        } else if (e.key === "ArrowRight") { // Right arrow to go to the next image
            navigate(1);
        } else if (e.key === "ArrowLeft") { // Left arrow to go to the previous image
            navigate(-1);
        }
    });
});