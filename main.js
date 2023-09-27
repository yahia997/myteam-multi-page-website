let menuContent = document.querySelector(".menu-content");

// Hide Mobile Menu
document.getElementById("menu-close").onclick = () => {
    menuContent.classList.add("hide");
    document.body.style.overflowY = "auto";
}

// Show Mobile Menu
document.querySelector(".menu-btn").onclick = () => {
    menuContent.classList.remove("hide");
    menuContent.style.top = `${window.scrollY}px`;
    document.body.style.overflowY = "hidden";
}