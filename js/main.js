$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#itaNavbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            setTimeout(function () {
                window.location.hash = hash;
            }, 2000);

            $(".ita-nav-item").removeClass("active");
            $(this.parentElement).addClass("active");

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 2000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
            });
        } // End if
    });
});