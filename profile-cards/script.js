const like_button = document.querySelector(".like-button");
const badge_count = document.querySelector(".badge");

like_button.addEventListener("click", () => {
    let count = Number(badge_count.textContent);
    count = count + 1;
    badge_count.textContent = `${count}`;
})