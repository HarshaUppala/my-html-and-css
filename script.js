const layout = document.getElementById('layout');
const list = document.getElementById('list');
const iconDropDown = document.getElementById('iconDropDown');
const grid = document.getElementById('grid');
// let display = list.style.display;
layout.addEventListener('click', () => {
    if (list.style.display === "none") {
        list.style.display = "block";
        iconDropDown.style.transform = "rotate(180deg)"
        layout.style.borderBottom = "0"
        grid.style.borderBottom = "1px solid rgba(161, 161, 161, 0.397)"
    }
    else {
        list.style.display = "none";
        iconDropDown.style.transform = "rotate(0deg)"
        layout.style.borderBottom = "1px solid rgba(161, 161, 161, 0.397)"
    }
})


