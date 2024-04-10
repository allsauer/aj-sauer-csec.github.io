$(document).ready(function() {
    var images = [
        "img/NDE.png", "img/THMCERT1.png", "img/EHE.png",
    ];
    var currentIndex = 0;

    function showLightbox(index) {
        var imageUrl = images[index];
        var lightboxImage = $('<img>').attr('src', imageUrl);
        $('.lightbox').empty().append(lightboxImage).fadeIn();
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
        if (!$(e.target).is('img')) {
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
