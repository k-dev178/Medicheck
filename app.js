const buttons = document.querySelectorAll(".Drug_status__info__btndiv button");

buttons.forEach((btn) => {
btn.addEventListener("click", () => {
    if (btn.classList.contains("bg-red-400")) {
    // 빨강 → 초록
    btn.classList.remove("bg-red-400");
    btn.classList.add("bg-green-400");
    btn.textContent = "복용 완료";
    } else if (btn.classList.contains("bg-green-400")) {
    // 초록 → 빨강
    btn.classList.remove("bg-green-400");
    btn.classList.add("bg-red-400");
    btn.textContent = "미복용";
    }
});
});