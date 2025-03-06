const textarea = document.getElementById("content");

let timeToSave;

textarea.addEventListener("input", function (e) {
  const content = textarea.value;
  clearTimeout(timeToSave); // 이전 타이머 제거

  timeToSave = setTimeout(() => {
    console.log("저장해야함 0.5초 지남 ㅋㅋ");
    localStorage.setItem("content", content);
  }, 5000);
});
