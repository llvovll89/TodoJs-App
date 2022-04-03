
function addItem(){
    // ul값 가져오기
    const list = document.getElementById("todolist");
    // 입력값 읽어오기
    const todo = document.getElementById("todo-input");
    // 새로우 li요소 생성
    const li = document.createElement("li");
    // li에 들어갈 삭제 버튼
    const btn = document.createElement("button");
    //  li요소 생성 이름
    li.className = "item";
    // 삭제 버튼 이름
    btn.className = "close-btn"

    // 삭제 버튼 이벤트
    btn.onclick = function(e) {
        const pnode = e.target.parentNode;
        list.removeChild(pnode);
    }

    // li 요소 구성
    li.innerText = todo.value;
    li.appendChild(btn);
    btn.innerText = "❌";

    // ul에 li 요소 추가
    list.appendChild(li);

    // 입력칸 비우기 및 포커스 이동
    todo.value = "";
    todo.focus();
}

