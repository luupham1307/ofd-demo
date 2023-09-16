// bestseller
var swiper = new Swiper(".best-clothes-swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".bestseller-next",
        prevEl: ".bestseller-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});


// Swiper cho phần "HÀNG MỚI"
var swiperNewItems = new Swiper(".new-clothes-swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});
// cls
var collection = new Swiper(".collection-items", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".collection-next",
        prevEl: ".collection-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

// network
var swiper = new Swiper(".network-img", {
    slidesPerView: 5,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },

});

// collection
function changeTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}
// nav-items
const navItems = document.querySelectorAll('.nav-items a');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        navItems.forEach(otherItem => {
            otherItem.style.opacity = '0.6';
            otherItem.style.fontWeight = 'Medium ';
        });
        item.style.opacity = '1';
        item.style.fontWeight = 'Medium ';
    });
    item.addEventListener('mouseleave', () => {
        navItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
            otherItem.style.fontWeight = 'Medium ';
        });
    });
});
// sidebar
const menu = document.getElementById("menu-mobile");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".sidebar-close i");
const sidebarbody = document.querySelector(".sidebar-wrapper");
menu.onclick = () => {
    sidebar.style = "left:0";
    sidebarbody.style = "transform:translateX(0%);"
}
close.onclick = () => {
    sidebar.style = "left:100%";
    sidebarbody.style = "transform:translateX(100%);"
}
// dashboard
function changeSideBar(indexSideBar) {
    let arrSideBarItem = document.querySelectorAll(".sidebar-item .subnav-box");
    let sideBarCurrent = arrSideBarItem[indexSideBar];
    if (indexSideBar > arrSideBarItem.length)
        return;
    if (sideBarCurrent.classList.contains('active')) {
        arrSideBarItem[indexSideBar].classList.remove('active');
        return;
    }
    arrSideBarItem.forEach(item => item.classList.remove('active'));
    arrSideBarItem[indexSideBar].classList.add('active');
    close.onclick = () => {
        arrSideBarItem[indexSideBar].classList.remove('active')
        sidebar.style = "left:100%";
        sidebarbody.style = "transform:translateX(100%);"
    }
}
//wrap-hidden-search
const wrapHidden = document.querySelector(".wrap-hidden");
const searchIcon = document.getElementById("menu-search");
const searchContainer = document.getElementById("search-container");
const iconOpen = document.querySelector(".btn-cancel")
searchIcon.onclick = () => {
    searchContainer.style.display = "block";
    wrapHidden.style.left = 0;
    wrapHidden.style.display = "block";
    searchContainer.style.transform = "translateX(0%)";
}

iconOpen.onclick = () => {
    searchContainer.style.transform = "translateX(100%);"
    wrapHidden.style.display = 'none';
    // searchContainer.style.display = "none";
    console.log("close search cont")
}
// footer
let icon1 = document.getElementById("toggleIcon1");
let text1 = document.querySelector(".footer-computer .footer-text");
let icon2 = document.getElementById("toggleIcon2");
let text2 = document.querySelector(".footer-customer .footer-text");

icon1.addEventListener("click", function () {
    if (text1.style.display === "none" || text1.style.display === "") {
        text1.style.display = "flex";
    } else {
        text1.style.display = "none";
    }
});

icon2.addEventListener("click", function () {
    if (text2.style.display === "none" || text2.style.display === "") {
        text2.style.display = "flex";
    } else {
        text2.style.display = "none";
    }
});




