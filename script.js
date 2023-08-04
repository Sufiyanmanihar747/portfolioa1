const open_btn = document.getElementById("open-btn");
const target = document.getElementById("ul")
open_btn.addEventListener("click", func);
function func() {
    if (open_btn.innerHTML = "&#9776;" && target.classList.toggle("active")) {
        open_btn.innerHTML = "&times;"
    }
    else {
        target.classList.toggle(!"active")
        open_btn.innerHTML = "&#9776;"
    }





}