const $urlsContainer = document.querySelector("#urls").content;
const $form = document.querySelector("#url-form");
const $inputURL = document.querySelector("input[type='url']");
const $error = document.querySelector(".error");

const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
let url;

$inputURL.addEventListener("input", e => {
    if(e) {
        if(pattern.test(e.target.value)) {
            url = e.target.value;
            $error.classList.add("hide");
            $inputURL.classList.remove("error");
        } else {
            $error.classList.remove("hide");
            $inputURL.classList.add("error");
        }       
    }

})

$form.addEventListener("submit", e => {
    e.preventDefault();

    if(url !== undefined) {

    } else {
        $error.classList.remove("hide");
        $inputURL.classList.add("error");        
    }
})
 
// Menu

const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav_container");

menuIcon.addEventListener("click", e => {
    if(e) {
        mobileNav.classList.toggle("hide");
    }
})


