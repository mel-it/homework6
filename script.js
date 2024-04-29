function refresh(response) {
  let number = document.querySelector("#number");
  let inn = response.data.temperature.current;
  let header = document.querySelector("#h1");
  header.innerHTML = response.data.city;
  number.innerHTML = Math.round(inn);
}
function search(city) {
  let apiKey = "bc3oce1f08d78tf8ca46cbb33abcbc6d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refresh);
}

function engine(event) {
  event.preventDefault();
  let input = document.querySelector("#input");

  search(input.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", engine);

function date(event) {
  let day = document.querySelector("#day");
  let time = document.querySelector("#time");

  let now = new Date();
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let days = week[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();

  day.innerHTML = `${days}`;
  time.innerHTML = `${hour}:${min}`;
}
date();
