// selected nodes
const menuOpenBtn : any = document.querySelector(".menu-open");
const menuCloseBtn : any = document.querySelector(".menu-close");
const menu : any = document.querySelector(".compass");
// functions
const triggerMenu = (action : string) => {
    action === "open" ? menu.classList.add("show") : menu.classList.remove("show");
}

window.addEventListener("scroll", () => {
    let pageY = window.scrollY;
    let revealNodes : any = document.getElementsByClassName("isReveal");
    for(let controlVar = 0; controlVar < revealNodes.length; controlVar++) {
       revealNodes[controlVar].offsetParent = document.body;
        if(revealNodes[controlVar].offsetParent == document.body) {
            // console.log("yes");
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