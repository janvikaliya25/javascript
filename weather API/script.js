


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
          document.getElementById("box").innerHTML=`
            
            <div id="info">
            <div>
            <h4>${res.name}</h4>
            <h5>${res.main.temp}</h5>
            <p>${res.weather[0].description}</p>
            </div>
            <div>
            <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="">
            </div>
        </div>   
          `
        })
        .catch((err) => console.log(err))
    }

view("Delhi")
