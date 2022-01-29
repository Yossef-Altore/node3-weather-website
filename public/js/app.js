const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
searchElement.focus();
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");
const img = document.querySelector("img");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchElement.value;
  messageOne.textContent = "Loading";
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        console.log(data);
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent =
          "the temperature is " + data.forecast.current.temperature + "℃";
        messageThree.textContent =
          data.forecast.current.weather_descriptions[0];
        img.src = data.forecast.current.weather_icons[0];
      }
    });
  });
});
