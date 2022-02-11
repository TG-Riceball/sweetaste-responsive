let isOpen = false
const hamberger = document.getElementById('nav-hamberger');
const list = document.getElementById('nav-list');

hamberger.addEventListener("click", () => {
    isOpen = !isOpen

    if (isOpen){
        list.style.display = "block";
    } else {
        list.style.display = "none"
    }
});