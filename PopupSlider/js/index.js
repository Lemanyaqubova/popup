const linkimgs = document.querySelectorAll(".row a");
const popup = document.querySelector(".popup");
const sliderImg = document.querySelector(".slider img");
const closeBtn = document.querySelector(".close-icon");
const nextBtn = document.querySelector(".next");
const prev = document.querySelector(".prev");

let nextElement;
// links.forEach((img) => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();


//     })
// })
linkimgs.forEach((img) => {
    img.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.add("showSlider");
        // this.classList.add("showSlider");
        // console.log(this);
        // nextElement = this.nextElementSibling.getAttribute("href");
        let imgSrc = this.getAttribute("href");
        popup.style.display = "flex";
        // sliderImg.setAttribute("src", imgSrc);
    })
});

nextBtn.addEventListener("click", function(e) {
    let sliderShow = document.querySelector(".showSlider");
    let changableAttribute;
    if (sliderShow.nextElementSibling !== null) {
        sliderShow.nextElementSibling.classList.add("showSlider");
        sliderShow.classList.remove("showSlider");
        changableAttribute = sliderShow.nextElementSibling.getAttribute("href");

    } else {
        sliderShow.parentElement.children[0].classList.add("showSlider");
        changableAttribute = sliderShow.parentElement.children[0].getAttribute("href");
    }
    sliderShow.classList.remove("showSlider");
    sliderImg.setAttribute("src", changableAttribute);
});

function closeSlider() {
    popup.style.display = "none"
}


document.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("popup")) {
        closeSlider();
        // popup.style.display = "none"
    }
});
// $("a").click((e) => {
//     e.preventDefault()
// })
closeBtn.addEventListener("click", function() {
    // popup.style.display = "none"
    closeSlider();

});
document.addEventListener("keydown", function(e) {
    console.log(e);
    if (e.key == "Escape") {
        closeSlider();
    }
    if (e.key === "Right") {
        Next();
    }

    if (e.key === "Left") {
        Prev();
    }
})