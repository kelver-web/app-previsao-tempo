const buttonSearch = document.querySelector(".btn-search")




function putDataInSreem(data) {
    const city = document.querySelector(".city")
    const temperature = document.querySelector(".temp")
    const weatherDescription = document.querySelector(".weather")
    const umidityDescription = document.querySelector(".umidity")
    const cloudDescription = document.querySelector(".cloud")

    city.innerHTML = "Tempo em " + data.name
    temperature.innerHTML = Math.floor(data.main.temp) + "ºC"
    weatherDescription.innerHTML = data.weather[0].description
    umidityDescription.innerHTML = "Umidade " + data.main.humidity + "%"
    cloudDescription.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    console.log(data)
}


async function showCity(city){
    const apikey = '6a4070a09dfe767e9559baf621897ce6'

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pt_br&units=metric`)
    .then( element => element.json())

    putDataInSreem(data)
    
}

function searchCity(){
    const inputCity = document.querySelector(".input-city").value
    
    showCity(inputCity)
}

buttonSearch.addEventListener("click", searchCity)
