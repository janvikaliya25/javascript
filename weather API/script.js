


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
  let a = document.querySelector("input").value;
  view(a)

  
});
function view(a){

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=f24667af4ec2b50ec217d815ff0682a2&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          document.getElementById("box").innerHTML=`
            
            <div id="info">
            <div id="i">
            <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="">
            <h1>${res.main.temp} °C</h1>
             <p>${res.weather[0].description}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${res.name}</p>
            </div>
        </div>   
          `
        })
        .catch((err) => console.log(err))
    }

view("Delhi")
