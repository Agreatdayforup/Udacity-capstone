import { request } from "http";
const request = require('request')
const https = require('https')

/* Global Variables */

// function to take user zipcode
function btnfun() {
    const input = document.getElementById('zip').value
    console.log('value in text box is:' +btnfun)
}


const zipcode = '06483'
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=06483,us&APPID=31ccdce38d7be8cba4e13d567e1d43db'

31ccdce38d7be8cba4e13d567e1d43db
request({url: weatherURL, json: true}, (error, response) => {
    console.log(response.body.weather.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees outside. There is a ' + response.body.currently.percipProbability + '% chance of rain')
})


// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//used to get forecast from weather api
// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast