export function createHtmlToday() {
    document.querySelector('body').innerHTML = `
    <style>
        @import url(https://fonts.googleapis.com/css?family=Montserrat);
        @import url(https://fonts.googleapis.com/css?family=Advent+Pro:400,200);
        * {
            margin: 0;
            padding: 0;
        }
        body {
            background: #919191;
            font-family: Montserrat, Arial, sans-serif;
        }
        h2 {
            font-size: 14px;
        }
        .widget {
            box-shadow: 0 40px 10px 5px rgba(0, 0, 0, 0.4);
            margin: 50px;
            position: absolute;
            width: 500px;
            height: 330px;
        }
        .upper {
            border-radius: 5px 5px 0 0;
            background: #cccccc;
            height: 200px;
            padding: 20px;
        }
        .lower {
            background: #6875c0;
            border-radius: 0 0 5px 5px;
            font-family: 'Advent Pro';
            font-weight: 200;
            height: 130px;
            width: 100%;
        }
        .date {
            font-size: 40px;
        }
        .year {
            font-size: 30px;
            color: #757575;
        }
        .place {
            font-size: 40px;
            color: #222;
        }
        .infos_1 {
            list-style: none;
            position: absolute;
            bottom: 30%;
        }
        .infos_2 {
            list-style: none;
            position: absolute;
            left: 65%;
            bottom: 80%;
        }
        .temp_update {
            font-size: 40px;
        }
        .weather_update {
            font-size: 20px;
        }
        .wind_update {
            font-size: 20px;
        }
        .humidity_update {
            font-size: 20px;
        }
        .title {
            font-size: 15px;
        }
        .info_temp,
        .info_weather,
        .info_humidity,
        .info_wind {
            display: inline-block;
            text-align: center;
            margin-right: 10px;
        }
        .weather_1,
        .weather_2,
        .weather_3 {
            font-size: 14px;
        }
        .title_forecast_1,
        .title_forecast_2,
        .title_forecast_3 {
            text-align: left;
        }
        .forecast li {
            display: inline-block;
            list-style: none;
            text-align: center;
            margin-top: 15px;
            margin-right: 15px;
            margin-left: 25px;
            font-size: 20px;
        }
        .forecast li span {
            display: table;
        }
        .image_0 {
            position: absolute;
            left: 80%;
            top: 45%;
            width: 20%;
        }
        .image_1,
        .image_2,
        .image_3 {
            position: absolute;
            width: 8%;
        }
        .show_button {
            margin: 20px 20px;
            border-radius: 15px;
            background-color: #707471;
            border: none;
            color: white;
            padding: 5px 15px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
        }
        .close_button {
            position: absolute;
            bottom: 315px;
            left: 485px;
            border-radius: 15px;
            background-color: #707471;
            border: none;
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
        }
        .forecast_button {
            position: absolute;
            left: 190px;
            bottom: 20px;
            border-radius: 15px;
            background-color: #707471;
            border: none;
            color: white;
            padding: 5px 10px;
            text-align: center;
        }
        .forecast_close_button {
            position: absolute;
            left: 377px;
            bottom: 80px;
            border-radius: 15px;
            background-color: #707471;
            border: none;
            color: white;
            padding: 5px 10px;
            text-align: center;
        }
        .forecast_button:hover,
        .forecast_close_button:hover {
            background-color: #969696;
            color: white;
        }
        .show_button:hover,
        .close_button:hover {
            background-color: #6875c0;
            color: white;
        }

    </style>

    <div class="widget">
        <div class="upper">
            <input value="x" type="button" class="close_button" />

            <div class="date">Loading</div>
            <div class="year">Loading</div>
            <div class="place">Loading</div>

            <div class="image_insert"></div>

            <ul class="infos_1">
                <li class="info_temp">
                    <span class="temp_update">Loading</span>
                </li>
                <li class="info_weather">
                    <span class="weather_update">Loading</span>
                </li>
            </ul>

            <ul class="infos_2">
                <li class="info_wind">
                    <h2 class="title">Ветер</h2>
                    <span class="wind_update">Loading</span>
                </li>
                <li class="info_humidity">
                    <h2 class="title">Влажность</h2>
                    <span class="humidity_update">Loading</span>
                </li>
            </ul>
 
        </div>

        <div class="lower">
            <input value="Прогноз на 3 дня" type="button" class="forecast_button" />          
        </div>

        
    </div>`
}
