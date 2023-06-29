// selected nodes
var menuOpenBtn = document.querySelector(".menu-open");
var menuCloseBtn = document.querySelector(".menu-close");
var menu = document.querySelector("nav");
// functions
var triggerMenu = function (action) {
    action === "open" ? menu.classList.add("show") : menu.classList.remove("show");
};
window.addEventListener("scroll", function () {
    var pageY = window.scrollY;
    var revealNodes = document.getElementsByClassName("isReveal");
    for (var controlVar = 0; controlVar < revealNodes.length; controlVar++) {
        if (revealNodes[controlVar].offsetParent == document.body) {
            if (pageY >= ((revealNodes[controlVar].offsetTop) - 400)) {
                revealNodes[controlVar].classList.add("reveal");
            }
        }
        else {
            if (pageY >= (revealNodes[controlVar].offsetParent.offsetTop) - 400) {
                revealNodes[controlVar].classList.add("reveal");
            }
        }
    }
});
// event listeners
menuOpenBtn.addEventListener("click", function () { return triggerMenu("open"); });
menuCloseBtn.addEventListener("click", function () { return triggerMenu("close"); });
