
document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("input");
    let result = document.getElementById("result");
    let restart = document.getElementById("restart");
    let submit = document.getElementById("submit");

    let starttime = null;

    function starttest() {
        input.value = "";
        input.disabled = false;
        input.focus();
        result.textContent = "Start typing your sentence...";
        starttime = null;
    }

    input.addEventListener("click", () => {
        if (!starttime) {
            starttime = new Date().getTime();
        }
    });

    input.addEventListener("keydown", () => {
        if (!starttime) {
            starttime = new Date().getTime(); // Ensures starttime is set
        }
    });

    function speedtester() {
        if (input.value.trim() === "") {
            result.textContent = "Please type something before submitting!";
            return;
        }

        if (!starttime) {
            result.textContent = "Start typing first!";
            return;
        }

        let endtime = new Date().getTime();
        let timetaken = (endtime - starttime) / 1000;
        let words = input.value.trim().split(/\s+/).length;
        let wpm = Math.round((words / timetaken) * 60);

        result.textContent = `Typing Speed: ${wpm} WPM`;
        input.disabled = true;
    }

    submit.addEventListener("click", speedtester);
    restart.addEventListener("click", starttest);
    starttest();
});
