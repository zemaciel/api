const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=02fddf1243fe2697a2246315f46d5be8&units=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data)) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.wheather[0].description
            const icon = weatherData.wheather[0].icon
            const imageURL = "http://openweathermap.org//img/wn/" + icon + "@2x.png"
            res.write("The weathr is currently " + weatherDescription + "<p>")
            res.send("<h1>The temperature in Dublin is " + temp + "degrees Celcius.</h1>");
            res.write("<img scr=" + imageURL + ">")
            res.send();
        });

    res.send("Server is running");
});




// ------FOR LOCAL HOST


// app.listen(3000, function() {
//     console.log("server is running on port 3000.")
// })