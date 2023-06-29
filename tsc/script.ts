// selected nodes
const menuOpenBtn = document.querySelector(".menu-open") as HTMLButtonElement;
const menuCloseBtn = document.querySelector(".menu-close") as HTMLButtonElement;
const menu  = document.querySelector("nav") as HTMLElement;
// functions
const triggerMenu = (action : string) => {
    action === "open" ? menu.classList.add("show") : menu.classList.remove("show");
}

window.addEventListener("scroll", () => {
    let pageY = window.scrollY;
    let revealNodes : any = document.getElementsByClassName("isReveal");
    for(let controlVar = 0; controlVar < revealNodes.length; controlVar++) {
        if(revealNodes[controlVar].offsetParent == document.body) {
            if(pageY >= ((revealNodes[controlVar].offsetTop) - 400)) {
                revealNodes[controlVar].classList.add("reveal");
            }
        }else {
            if(pageY >= (revealNodes[controlVar].offsetParent.offsetTop) - 400){
                revealNodes[controlVar].classList.add("reveal");
            }
        }

    }
})


// event listeners
menuOpenBtn.addEventListener("click", () => triggerMenu("open"));
menuCloseBtn.addEventListener("click", () => triggerMenu("close"));