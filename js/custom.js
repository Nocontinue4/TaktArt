// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
$(document).ready(function() {
    var liOne = $(".slider_section .carousel-indicators li[data-slide-to='0']");
    var liTwo = $(".slider_section .carousel-indicators li[data-slide-to='1']");
    var ulAfter = $(".slider_section .carousel-indicators .ol_design");

    // Set the initial position of ulAfter
    ulAfter.css({
        'position': 'absolute', // Ensure it has a position to move
        'transition': 'left 0.5s ease' // Add transition for smooth movement
    });

    $('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
        if (liOne.hasClass("active")) {
            ulAfter.css({
                'left': '0%' // Adjust based on your requirement
            });
        } else if (liTwo.hasClass("active")) {
            ulAfter.css({
                'left': '50%' // Adjust based on your requirement
            });
        }
    });
});
