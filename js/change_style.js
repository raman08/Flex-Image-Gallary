// Selecting all of the pannel elements.
const panels = document.querySelectorAll(".panel");

// Function to toggle class open.
function toggleOpen() {
	this.classList.toggle("open")
}

// Function to toggle class open-active after flex transition complete.
function toggleActive(e) {

	if (e.propertyName.includes("flex"))
		this.classList.toggle("open-active");

}

// Calling function toggleOpen when the pannel is clicked
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Calling function toggleActive when the transition is end.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
