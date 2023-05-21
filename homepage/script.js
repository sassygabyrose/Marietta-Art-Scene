// for the carousel, I used a video by CodingNepal which was really helpful
// I learned a lot from watching tthis video and am amazed with all the possibilities in web development

// We begin with the javascript for the slideshow
const carousel = document.querySelector(".carousel");

const arrowBtns = document.querySelectorAll(".wrapper i");

const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(button => {
    button.addEventListener("click", () => {
        //if first card clicked is left, subtract. else add to it. the ? is like if else.
        console.log(button.id);
        carousel.scrollLeft += button.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragstart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
    //pageX returns x coordinate of mouse
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragstop = (e) => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragstop);