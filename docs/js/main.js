"use strict";
let toggle = document.getElementById("toggle");
let htmltag = document.documentElement;
console.log(toggle, typeof toggle);
htmltag.classList.toggle("dark", localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches));
if (localStorage.theme ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    toggle.checked = true;
}
else {
    toggle.checked = false;
}
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
        console.log("checked");
        htmltag.classList.toggle("dark", true);
        localStorage.theme = "dark";
    }
    else {
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
