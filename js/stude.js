const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
btn.addEventListener("click", () => {
  if (confirm("확인 눌러주세요") === true) {
    alert("니얼굴 존못");
  } else {
    alert("그래도 존못");
  }
    modal.classList.toggle("modalshow");
});

function sayHello() {
  btn.classList.toggle("show");
}

setInterval(sayHello, 1000);
