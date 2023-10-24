function toggleSvg(buttonNumber) {
    const svg = document.getElementById(`colorSvg${buttonNumber}`);
    if (svg.style.display === 'none' || svg.style.display === '') {
        svg.style.display = 'block';
    } else {
        svg.style.display = 'none';
    }
}

// show filter
let showFilter = document.querySelector(".lu-products-btn");
let luDashboard = document.querySelector(".lu-products-dashboard");
let luWrapper = document.querySelector(".lu-product-wrapper");

showFilter.addEventListener("click", function () {
    if (luDashboard.style.display == "flex" || luDashboard.style.display == "") {
        luDashboard.style.display = "none";
        // luDashboard.style.transition.width = "0%"
        // luWrapper.style.transition.width = "100%";
    } else {
        luDashboard.style.display = "flex";

        // luDashboard.style.transition.width = "15%";
        // luWrapper.style.transition.width = "85%";
    }
})

// luDashboard.style.transform = "translateX(0%)"
// luDashboard.style.transform = "width:0px"

