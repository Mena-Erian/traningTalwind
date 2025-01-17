let toggle = document.getElementById("toggle") as HTMLInputElement;
let htmltag = document.documentElement;
console.log(toggle, typeof toggle);
htmltag.classList.toggle(
	"dark",
	localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
);
if (
	localStorage.theme ||
	(!("theme" in localStorage) &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	toggle.checked = true;
} else {
	toggle.checked = false;
}
toggle?.addEventListener("change", (e) => {
	const target = e.target as HTMLInputElement;
	if (target.checked) {
		console.log("checked");
		htmltag.classList.toggle("dark", true);
		localStorage.theme = "dark";
	} else {
		console.log("unchecked");
		htmltag.classList.toggle("dark", false);
		localStorage.theme = "light";
	}
});

// let elem = document.getElementById("elem");

// function test() {
// 	console.log(toggle, typeof toggle);
// }

// test();
