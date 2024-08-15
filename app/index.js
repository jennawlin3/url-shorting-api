// Input validation
const $form = document.querySelector("#url-form");
const $inputURL = document.querySelector("input[type='url']");
const $error = document.querySelector(".error-msg");

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

// Shorten links

const $urlSection = document.querySelector("#urls");
const $urlLinks = document.querySelector(".url-container").content;
const $fragment = document.createDocumentFragment();
const $errorShortenURL = document.querySelector("#urls .error");

$form.addEventListener("submit", e => {
    e.preventDefault();

            //Connecting API
            if(url !== undefined && url !== "") {
                const apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
                
                fetch(apiURL) 
                .then(response => response.text())
                .then(data => {
                    $urlLinks.querySelector(".url").textContent = url;
                    $urlLinks.querySelector(".url-shorter").textContent = data;
                    
                    let $clone = document.importNode($urlLinks, true);
                    $fragment.appendChild($clone);
                    $urlSection.appendChild($fragment);

                    const $copyBtn = document.querySelectorAll(".copy-btn");
                    let info = "";
                    url = "";
                    $copyBtn.forEach((btn, i) => {
                        btn.addEventListener(("click"), e => {
                            for(let i = 0; i < $copyBtn.length; i++) {
                                $copyBtn[i].classList.remove("active");
                                $copyBtn[i].textContent = "Copy";      
                            }


                            const urls = document.querySelectorAll(".url-shorter");
                            info = "";
                            if(e.currentTarget) {
                                e.currentTarget.classList.add("active");
                                e.currentTarget.textContent = "Copied";
                                info = urls[i].textContent;
                                try {
                                     navigator.clipboard.writeText(info);
                                } catch (err) {
                                    console.error("Error al copiar");
                                }
                            }
                        })
                    })
                })
                }
                   else {
                    $error.classList.remove("hide");
                    $inputURL.classList.add("error");  
                }
            })
           /*
                $urlLinks.querySelector(".url").textContent = url;
                let $clone = document.importNode($urlLinks, true);
                $fragment.appendChild($clone);
                $urlSection.appendChild($fragment);
                
                const $copyBtn = document.querySelectorAll(".copy-btn");
                let info = "";
                url = "";
                $copyBtn.forEach((btn, i) => {
                    btn.addEventListener(("click"), e => {
                        const urls = document.querySelectorAll(".url");
                        info = "";
                        if(e.currentTarget) {
                            info = urls[i].textContent;
                            try {
                                 navigator.clipboard.writeText(info);
                            } catch (err) {
                                console.error("Error al copiar");
                            }
                        }
                    })
                })
            } else {
                $error.classList.remove("hide");
                $inputURL.classList.add("error");
            }
            
        })*/

// Menu

const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav_container");

menuIcon.addEventListener("click", e => {
    if(e) {
        mobileNav.classList.toggle("hide");
    }
})


