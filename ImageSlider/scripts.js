
let array = ["image1.jpg", "image2.jpg", "image3.jpg"]

let x;
let i = 0;

function next() {

    img = document.getElementById("img")

    img.src = array[i]

    // let x = array[i];
    i ++;

    if(i >= array.length){
        i = 0;
    }
    // console.log(x)

}
// next()
// next()
// next()
// next()

function prev() {

    img = document.getElementById("img")
    img.src = array[i]

    // let x = array[i];
    i --;
    if (i < 0){
        i = array.length-1
    }
    // console.log(x)
    
}

// prev()
// prev()
// prev()
// prev()

// let slider = document.querySelectorAll("slider")
// slider.style.transfrom(array[1])

// let curretSlide = 0;
// nextSlide = document.querySelector(".btn-next");

// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });