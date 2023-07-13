
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);
// Get all the list items
const listItems = document.querySelectorAll('.li');

// Loop through each list item and add a click event listener
listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all list items
    listItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add the active class to the clicked list item
    item.classList.add('active');
  });
});
const listItems_1 = document.querySelector('.li_1');
const listItems_2 = document.querySelector('.li_2');
const listItems_3 = document.querySelector('.li_3');
const listItems_4 = document.querySelector('.li_4');
const row_1 = document.querySelector('.row-1');
const row_2 = document.querySelector('.row-2');
const row_3 = document.querySelector('.row-3');
const row_4 = document.querySelector('.row-4');

listItems_1.addEventListener("click", function(){
	row_1.classList.remove("hidden");
	row_2.classList.add("hidden")
	row_3.classList.add("hidden")
	row_4.classList.add("hidden")
})
listItems_2.addEventListener("click", function(){
	row_2.classList.remove("hidden");
	row_1.classList.add("hidden")
	row_3.classList.add("hidden")
	row_4.classList.add("hidden")
})
listItems_3.addEventListener("click", function(){
	row_3.classList.remove("hidden");
	row_2.classList.add("hidden")
	row_1.classList.add("hidden")
	row_4.classList.add("hidden")
})
listItems_4.addEventListener("click", function(){
	row_4.classList.remove("hidden");
	row_2.classList.add("hidden")
	row_3.classList.add("hidden")
	row_1.classList.add("hidden")
})


