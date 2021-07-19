const items = document.querySelectorAll("ol li");

for (const item of items) {
	item.addEventListener("click", function () {
		item.style.textDecoration = "line-through";
	});
}

const items2 = document.querySelectorAll("ul li");

for (const item of items2) {
	item.addEventListener("click", function () {
		item.style.opacity = "0";
	});
}

const images = document.querySelectorAll("img");

for (const pic of images) {
	pic.addEventListener("click", function () {
		console.log("clicked", pic);
		pic.style.width = "0";
	});
}

const button = document.querySelector("#destroy-all");
button.addEventListener("click", meteor);

function meteor() {
	const items = document.querySelectorAll("ol li");
	const items2 = document.querySelectorAll("ul li");
	const images = document.querySelectorAll("img");

	for (const item of items) {
		item.style.textDecoration = "line-through";
	}

	for (const item2 of items2) {
		item2.style.opacity = "0";
	}

	for (const pic of images) {
		pic.style.width = "0";
	}
}
