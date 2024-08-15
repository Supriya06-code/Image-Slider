// // Select all slides and navigation dots
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");
// const main = document.querySelector("main");

// // Initialize counter and interval for automatic sliding
// let counter = 0;
// let interval;

// // Position each slide next to each other
// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// });

// // Function to move to the previous slide
// const goPrev = () => {
//     counter--;
//     if (counter < 0) {
//         counter = slides.length - 1;  // Loop to the last slide
//     }
//     updateSlider();
// }

// // Function to move to the next slide
// const goNext = () => {
//     counter++;
//     if (counter >= slides.length) {
//         counter = 0;  // Loop to the first slide
//     }
//     updateSlider();
// }

// // Function to go to a specific slide
// const currentSlide = (index) => {
//     counter = index;
//     updateSlider();
// }

// // Function to update the slider and indicators
// const updateSlider = () => {
//     // Transform each slide based on the current counter
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });

//     // Update active dot
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[counter].classList.add("active");
// }

// // Automatic Slideshow: Change the image every 3 seconds
// const startAutoSlide = () => {
//     interval = setInterval(goNext, 3000);
// }

// // Pause the slideshow when the user hovers over the slider
// main.addEventListener("mouseover", () => clearInterval(interval));
// main.addEventListener("mouseout", startAutoSlide);

// // Start the slideshow
// startAutoSlide();
// // Initialize the slider with the first slide active
// updateSlider();

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); // Ensure you have dot elements in your HTML

let counter = 0;

// Function to show a specific slide
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
};

// Function to move to the previous slide
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;  // Loop to last slide
    }
    showSlide(counter);
};

// Function to move to the next slide
const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;  // Loop to first slide
    }
    showSlide(counter);
};

// Function to automatically move to the next slide
const autoSlide = () => {
    goNext();
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds
};

// Initialize slider
showSlide(counter);
autoSlide();

// Event listeners for navigation buttons
document.querySelector('.nav button.prev').addEventListener('click', goPrev);
document.querySelector('.nav button.next').addEventListener('click', goNext);
