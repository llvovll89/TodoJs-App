const input = document.querySelector(".input");
const back = document.querySelector(".back");

back.addEventListener("click", () => {
    input.value = "";
    alert("지워졌습니다");
});