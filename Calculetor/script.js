let themetoggle=document.getElementById("themetoggle");
let powerbtn=document.getElementById("powerbtn");
let display=document.getElementById("display");
let equal=document.getElementById("equal");
let buttons = document.querySelectorAll('.btn');
let html = document.documentElement;

let poweron=true;

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
}

themetoggle.addEventListener("click",()=>{
    html.classList.toggle("dark");
    localStorage.setItem("theme",html.classList.contains('dark')?'dark':'light');
});

function setPower(state) {
    poweron = state;
    display.value = "";
    display.disabled = !state;
    buttons.forEach(btn => {
      btn.disabled = !state;
      btn.classList.toggle("opacity-50", !state);
      btn.classList.toggle("cursor-not-allowed", !state);
    });
    powerbtn.innerText = state ? "OFF" : "ON";
    powerbtn.className = state 
      ? "text-xs sm:text-sm bg-red-600 px-2 py-1 rounded text-white transition hover:scale-105 hover:bg-red-700"
      : "text-xs sm:text-sm bg-green-500 px-2 py-1 rounded text-white transition hover:scale-105 hover:bg-green-600";
  }

  buttons.forEach(btn => {
    btn.classList.add(
      "bg-gray-300", "dark:bg-gray-600", "text-gray-900", "dark:text-white", "py-2",
      "rounded", "transition", "hover:scale-105", "active:scale-95", "text-lg", "sm:text-xl"
    );
    btn.addEventListener('click', () => {
      const val = btn.innerText;
      if (!poweron) return;

      switch (val) {
        case "AC":
          display.value = "";
          break;
        case "%":
          display.value = parseFloat(display.value) / 100;
          break;
        case "⌫":
          display.value = display.value.slice(0, -1);
          break;
        case "=":
          break;
        default:
          display.value += val;
      }
    });
  });

  equal.addEventListener('click', () => {
    if (!poweron) return;
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  });

  poweron.addEventListener('click', () => {
    setPower(!poweron);
  });

  setPower(true);