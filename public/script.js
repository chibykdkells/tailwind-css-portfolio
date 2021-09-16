//grab the elements from html
/*here the "button" in the parentesis() is the HTML tag 
        while mobile-menu-button is the class*/
const btn = document.querySelector("button.mobile-menu-button");

        /*here we decided not to select the HTML tag 
        so we went stright to the class ".mobile-menu" by just adding a dot*/
const menu = document.querySelector(".mobile-menu");

// lets add  event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// contact button
const emailBtn = document.querySelector("button.email-box-button");
const emailBox = document.querySelector(".email-box");

emailBtn.addEventListener("click", () => {
    emailBox.classList.toggle("hidden");
});


// back2Top button
const back2Top = document.querySelector("#back2Top"); 

window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 400) {
        back2Top.classList.remove("hidden");
        back2Top.classList.add("block");
    } else {
        back2Top.classList.add("hidden");
        back2Top.classList.remove("block");
    }

});


back2Top.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({top: 0, left: 0, behavior: "smooth"});
});

