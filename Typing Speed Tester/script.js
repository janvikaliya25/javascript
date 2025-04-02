
let input = document.getElementById("input");
let result = document.getElementById("result");
let restart = document.getElementById("restart");

let starttime;

function starttest() {
    input.value = "";
    input.disabled = false;
    input.focus();
    result.textContent = "Start typing your sentence...";
    starttime = null;
}

input.addEventListener("input", () => {
    if (!starttime) {
        starttime = new Date().getTime();
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        if (input.value.trim() === "") return;

        let endtime = new Date().getTime();
        let timetaken = (endtime - starttime) / 1000;
        let words = input.value.trim().split(/\s+/).length;   
        let wpm = Math.round((words / timetaken) * 60); 

        result.textContent = `Typing Speed: ${wpm} WPM`;
        input.disabled = true;
    }
});

restart.addEventListener("click", starttest);
document.addEventListener("DOMContentLoaded", starttest);

