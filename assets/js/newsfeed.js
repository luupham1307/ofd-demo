var newsFeed = new Swiper(".newsfeed-wrapper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".newsfeed-prev",
        prevEl: ".newsfeed-next",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

// newsdetails-wrapper
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more-button");
    const hiddenBoxes = document.querySelectorAll(".newsdetails-wrapper.hidden");

    showMoreButton.addEventListener("click", function () {
        hiddenBoxes.forEach(function (box, index) {
            if (index < 12) {
                box.style.display = "block";
            }
        });
        hiddenBoxes = document.querySelectorAll(".newsdetails-wrapper.hidden");
        if (hiddenBoxes.length === 0) {
            showMoreButton.style.display = "none";
        }
    });
});
