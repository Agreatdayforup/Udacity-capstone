
// listens to user inputs and submittion of the form 
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // sets variables from user inputs
    const zipcode = searchZip.value
    const fs = feelingSearch.value

    // grabs temperature data from weather api
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db&units=imperial').then(response => response.json()).then(data => {
        userTemp.textContent = 'It is currently ' + data['main']['temp'] + ' degrees F outside'
        
        console.log(data['main']['temp'])

    })
        userContent.textContent = fs
    
    console.log(zipcode)
    console.log(fs)
    
    
    
    
})
\\
    
// const request = require('request')

// const pixabay = (cityName, callback) => {
//     const url = 'https://pixabay.com/api/?key=14937162-57809441d2782a1b475398b82&q='

//     request({ url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('unable to connect to Pixabay!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body,daily.data[0].summary + 'There is a ' + response.body.currently.precipProbability + '% chance of rain' +  ' It is currently ' + response.body.currently.temperature + ' degrees out!')
//         }
//     })
// }

// module.exports = pixabay