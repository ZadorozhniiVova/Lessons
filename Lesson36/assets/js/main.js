$(function () {
    let cityName = ["Lisbon", "Paris", "Belgrade", "Venice", "Piraeus", "Caire", "Odesa", "Kyiv", "Rome", "Tokyo", "Sydney", "Rio"];

    if (document.cookie === "") {
        console.log('Empty Cookies')
        getWeather()
        createCookie()
    } else {
        console.log('Full cookies')
        getWeatherLOCAL()
        
    }
    // window.cookie.onChanged.addListener(getWeather(),createCookie())
    
    async function getWeather() {
        
        for (let i = 0; i <= cityName.length - 1; i++) {

            $('.weather').append(`<div class="weather-type weather-type-${cityName[i]}"></div>`)
            $(`.weather-type-${cityName[i]}`).append(`<div class="weather_inside weather_inside-${cityName[i]}"></div>`)
            $(`.weather-type-${cityName[i]}`).css('overflow', `hidden`)
            $(`.weather_inside-${cityName[i]}`).append(`<p class="cityName">${cityName[i]}</p>`)
            $(`.weather_inside-${cityName[i]}`).append(`<div class="weather_info weather_info-${cityName[i]}"></div>`)
            $(`.weather_info-${cityName[i]}`).append(`<p class="cels cels-${cityName[i]}"></p>`)
            $(`.weather_info-${cityName[i]}`).append(`<div class="icon_box icon_box-${cityName[i]}"></div>`)

            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName[i]}&units=metric&lang=ua&appid=3b1e8a5b6b2113eaca0f80e605f25ce9`)
                .then(function retJson(resp) {
                    return resp.json()
                })
                .then(function (data) {
                    window.localStorage.setItem(`data${cityName[i]}`, JSON.stringify(data));
                    $(`.cels-${data.name}`).html(`${Math.floor(data.main.temp)}°C`)
                    $(`.icon_box-${data.name}`).append(`<img class="animate__animated animate__zoomInDown weather_icon weather_icon-${data.name}" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`)
                })
        }
    }

    async function getWeatherLOCAL() {
        for (let i = 0; i <= cityName.length - 1; i++) {

            $('.weather').append(`<div class="weather-type weather-type-${cityName[i]}"></div>`)
            $(`.weather-type-${cityName[i]}`).append(`<div class="weather_inside weather_inside-${cityName[i]}"></div>`)
            $(`.weather-type-${cityName[i]}`).css('overflow', `hidden`)
            $(`.weather_inside-${cityName[i]}`).append(`<p class="animate__animated animate__zoomIn cityName">${cityName[i]}</p>`)
            $(`.weather_inside-${cityName[i]}`).append(`<div class="weather_info weather_info-${cityName[i]}"></div>`)
            $(`.weather_info-${cityName[i]}`).append(`<p class="animate__animated animate__zoomInDown cels cels-${cityName[i]}"></p>`)
            $(`.weather_info-${cityName[i]}`).append(`<div class="icon_box icon_box-${cityName[i]}"></div>`)

            async function getData() {
                let valu = localStorage.getItem(`data${cityName[i]}`);
                let valuJson = await JSON.parse(valu)
                $(`.cels-${cityName[i]}`).html(`${Math.floor(valuJson.main.temp)}°C`)
                $(`.icon_box-${cityName[i]}`).append(`<img class="animate__animated animate__zoomInDown weather_icon weather_icon-${cityName[i]}" src="http://openweathermap.org/img/wn/${valuJson.weather[0].icon}.png"/>`)
            }
            getData()
        }
    }
    function createCookie() {
        let fisrtTime = new Date().getTime();
        // let expTime = new Date(fisrtTime + (2000)).toUTCString()
        let expTime = new Date(fisrtTime + (2 * 60 * 60 * 1000)).toUTCString()
        document.cookie = `user=anonym;expires=${expTime}`;
    }
})

