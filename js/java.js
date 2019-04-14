
function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);


$(document).ready(function() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#theDate").attr("value", today);
});

$.get(
    "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    {
        "appid": "5d066958a60d315387d9492393935c19"
    },
       function(data) {
           let out='';
           out +='Weather: <div class="weth">'+data.weather[0].main+'</div>';
           out +='<div class="icon"><img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></div>';
           out +='Temperature: <div class="temp"><b>'+data.main.temp+'&#176;C</b></div>';
           out +='Humidity: <div><b>'+data.main.humidity+'%</b></div>';
           out +='Pressure: <div><b>'+Math.round
           (data.main.pressure*0.00750063755419211*100)+'mmHg</b></div>';
           out +='Wind: <div><b>'+data.wind.deg+'&#176;</b></div>';
           out +='Wind: <div><b>'+data.wind.speed+'km/hour</b></div>';
           console.log(data.main);
            $('#weather').html(out);
       }
);

