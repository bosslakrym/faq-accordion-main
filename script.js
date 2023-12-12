document.addEventListener("DOMContentLoaded", function () {
	// Get all FAQ accordion titles
	var accordionTitles = document.querySelectorAll(".faq-accordion-title")

	// Add click event listener to each accordion title
	accordionTitles.forEach(function (title) {
		title.addEventListener("click", function () {
			// Toggle the visibility of the corresponding FAQ content
			var content = title.nextElementSibling
			content.style.display =
				content.style.display === "none" ? "block" : "none"

			// Toggle the minus/plus icon
			var icon = title.querySelector("img")
			icon.src =
				content.style.display === "none"
					? "./assets/images/icon-plus.svg"
					: "./assets/images/icon-minus.svg"
		})
	})
})
