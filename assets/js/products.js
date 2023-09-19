function toggleSvg(buttonNumber) {
    const svg = document.getElementById(`colorSvg${buttonNumber}`);
    if (svg.style.display === 'none' || svg.style.display === '') {
        svg.style.display = 'block';
    } else {
        svg.style.display = 'none';
    }
}