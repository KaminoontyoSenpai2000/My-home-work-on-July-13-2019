var slide = document.querySelectorAll("#carousel .slide");
var currentSlide = 0;
function goToSlide(x){
    slide[currentSlide].className = 'slide';
    currentSlide = (x + slide.length) % slide.length;
    slide[currentSlide].className = 'slide firstSlide';
}
function nextSlide() {
	goToSlide(currentSlide + 1);
}
function prevSlide() {
	goToSlide(currentSlide - 1);
}
var next = document.getElementById("next");
var prev = document.getElementById("prev");

next.onclick = function () {
	nextSlide();
};
prev.onclick = function() {
	prevSlide();
};