

/* Global Variables */
const searchForm = document.querySelector('form')
const cordData = {};
const geoData = {};


let degree = document.querySelector('.degree');
let tempDescription = document.querySelector('.tempDescrip');
let date = document.querySelector('#date');
let city = document.querySelector('.dest');
let resCityTitle = document.querySelector('.resCity')
    
// Helps prevent Cors error
const proxy = 'https://cors-anywhere.herokuapp.com/';

    
        

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('testing')
    

    // Destination date for user
    const destDate = date.value

    // user destination city to store value
    const destCity = city.value;
    resCityTitle.textContent = `The Weather for your trip to ${destCity} on ${destDate} will be!`
            console.log(destCity)
            console.log(destDate)

    //Geonames APIusername and api address
    const geoUser = 'agreatdayfor';
    const geoNamesApi = `http://api.geonames.org/searchJSON?q=${destCity}&maxRows=10&username=${geoUser}`;
     
    // Geonames API Fetch
     fetch(geoNamesApi)
     .then(response => {
         return response.json();
     })
     .then(data => {
         console.log(data);
         const cordData = {
             lat: data.geonames[0].lat,
             lon: data.geonames[0].lng,
             country: data.genames[0].countryName,
             countryCode: data.genames[0].countryCode
         };
        geoData.coord = cordData;
    })

    const latit = geoData.lat;
    const longi = geoData.lon;

    console.log(latit)
    console.log(longi)


    // DarkSky API information
    const darkApi = `${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${latit},${longi},${destDate}`;

    fetch(darkApi)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                const { temperature, summary, icon } = data.currently;
                //set Dom from API
                degree.textContent = temperature;
                tempDescription.textContent = summary;
                // Set Icon
                setIcons(icon, document.querySelector('.icon'));
            })

             // function to change icon to a gif version  from DevED youtube
            function setIcons(icon, iconID) {
                const skycons = new Skycons({color: 'white'});
                const currentIcon = icon.replace(/-/g, '_').toUpperCase();
                skycons.play();
                return skycons.set(iconID, Skycons[currentIcon]);
            }


            
})

    




// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


