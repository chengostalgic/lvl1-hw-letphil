const changeColorBtn = document.querySelector("button");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
    body.classList.toggle("changing");
    console.log("Background changed");
})