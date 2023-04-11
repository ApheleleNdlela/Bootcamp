
let array = ["image1.jpg", "image2.jpg", "image4.jpg", "image5.jpg",]

img = document.getElementById("img")
let x;
let i = 0;
img.src = array[i]

function next() {


    // let x = array[i];
    i ++;

    if(i >= array.length){
        i = 0;
    }
    img.src = array[i]
    // console.log(x)

}

// next()
// next()
// next()
// next()

function prev() {


    // let x = array[i];
    i --;
    if (i < 0){
        i = array.length -1
    }
    // console.log(x)
    img.src = array[i]
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