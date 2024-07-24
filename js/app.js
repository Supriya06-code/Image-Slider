const slides = document.querySelectorAll(".slide")
//console.log(slides,"slides")

let counter = 0;

//Postion each slide next to each other

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
//Function to move to the previous slide
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;  // Loop to last slide
    } 
    slideImage();
}
//Function to move to the next slide
const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;  // Loop to first slide
    }
    slideImage();
}
//Function to slide images
const slideImage = () => {
    // Transform each slide based on the current counter
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};