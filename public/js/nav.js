let lastScrollPosition = window.scrollY;

window.onscroll = function () {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition + 10) {
        document.querySelector(".box").style.display = "flex";
        document.querySelector(".box").style.position = "fixed";
        document.querySelector(".box1").style.display = "flex";
        document.querySelector(".box1").style.position = "fixed";
    } else if (lastScrollPosition > currentScrollPosition + 10) {
        document.querySelector(".box").style.display = "none";
        document.querySelector(".box1").style.display = "none";
    }

    lastScrollPosition = currentScrollPosition;
}
