const openBtn = document.getElementById("openAdded");
const closeBtn = document.getElementById("closeAdded");
const added = document.getElementById("Added")

openBtn.addEventListener("click", () => {
	Added.classList.add("open")
});

closeBtn.addEventListener("click", () => {
	Added.classList.remove("open")
});

/*some code from a youtube tutorial(FLorin Pop) to build a popup with JavaScript*/