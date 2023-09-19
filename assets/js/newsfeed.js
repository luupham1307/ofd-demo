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
var newsFavorite = new Swiper(".newsfeed-favorite-wrapper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".arrow-next1",
        prevEl: ".arrow-prev1",
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
// newsfeed-details
// document.addEventListener("DOMContentLoaded", function () {
//     const showMoreButton = document.getElementById("show-more-button");
//     let hiddenBoxes = document.querySelectorAll(".newsdetails-wrapper.hidden");

//     showMoreButton.addEventListener("click", function () {
//         hiddenBoxes.forEach(function (box, index) {
//             if (index < 12) {
//                 box.style.display = "block";
//             }
//         });
//         hiddenBoxes = document.querySelectorAll(".newsdetails-wrapper.hidden");
//         if (hiddenBoxes.length === 0) {
//             showMoreButton.style.display = "none";
//         }
//     });
// });

// newsdetails-wrapper
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more-button");
    let hiddenBoxes = Array.from(document.querySelectorAll(".newsdetails-wrapper.hidden"));

    showMoreButton.addEventListener("click", function (e) {
        e.preventDefault();

        for (let index = 0; index < Math.min(hiddenBoxes.length, 12); index++) {
            hiddenBoxes[index].style.display = "block";
        }
        hiddenBoxes = hiddenBoxes.slice(12);

        // if (hiddenBoxes.length === 0) {
        //     showMoreButton.style.display = "none";
        // }
    });
});

