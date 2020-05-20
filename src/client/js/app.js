// import timer function for countdown
import {timer} from './timer';


 

/* Global Variables */
    const searchForm = document.querySelector('form')

//geolocation data
    const cordData = {};
    let geoCountry = {};
    let geoCC = {};
    let geoLatit = {};
    let geoLongi = {};

//pixa data
    let pixaData = {};

//country data
    let countryData = {};
    let countryCurr = {};
    let countryReg = {};
    let countryLang = {};



// selections grabbed form  the DOM
    let degree = document.querySelector('.degree');
    let tempDescription = document.querySelector('.tempDescrip');
    let date = document.querySelector('#date');
    let city = document.querySelector('.dest');
    let resCityTitle = document.querySelector('.resCity');
    const bodyBack = document.getElementById("bodyMain");
    
// Destination date for user
    let destDate = date.value;
    console.log(destDate)
    


// Destination city for user
    let destCity = city.value;


// Helps prevent Cors error
    const proxy = 'https://cors-anywhere.herokuapp.com/';

// **** APIs Start ****
    
    // Geonames APIusername and api address
    const geoUser = 'agreatdayfor';
    const geoNamesApi = `http://api.geonames.org/searchJSON?q=${destCity}&maxRows=1&username=${geoUser}`;

    // Pixabay API Information
    const pixaKey = '14937162-57809441d2782a1b475398b82';
    const pixaBayApi = `https://pixabay.com/api/?key=${pixaKey}&q=${destCity}&orientation=horizontal`;

//**** APIs ends ****



// **** form submittion with API Requests inside begins ****

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('testing')
   
    resCityTitle.textContent = `The weather in ${destCity} for ${destDate} will be!`;

            console.log(destCity)
            console.log(destDate)

// Geonames API Fetch
     fetch(geoNamesApi)
     .then(response => {
         return response.json();
     }).then(data => {
            geoLatit = data.geonames[0].lat;
            geoLongi = data.geonames[0].lng;
            geoCountry = data.geonames[0].countryName;
            geoCC = data.geonames[0].countryCode;
        
        console.log(geoLatit), console.log(geoLongi)
        console.log(data);
        console.log(geoCC);
        console.log(geoCountry);

// DarkSky API Fetch
     return fetch(`${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${geoLatit},${geoLongi}`)
        .then(response => {
            return response.json();  
        }).then(data => {
            console.log(data);
            let { temperature, summary} = data.currently;
            
            //set Dom from API
            degree.textContent = temperature + "-F";
            tempDescription.textContent = summary;
            //setIcons(icon, document.querySelector('.icon'));

// pixabayApi API Fetch
     return fetch(pixaBayApi)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data.hits[0].largeImageURL);
            pixaData = data.hits[0].largeImageURL;
            let pixaImg = document.getElementById("resImg");
            pixaImg.style.backgroundImage = `url(${pixaData})`;
            pixaImg.style.filter = 'grayscale(75%)';
            pixaImg.style.opacity = '0.8';
         
            const restCountry = `https://restcountries.eu/rest/v2/alpha/${geoCC}`;
// restCountryApi API Fetch
     return fetch(restCountry)
        .then(response => {
            return response.json();
        }).then(data => {
            countryData = data.population;
            countryCurr = data.currencies[0].name;
            countryReg = data.region;
            countryLang = data.languages[0].name;

// Adding the Rest country info to the DOM
        document.getElementById("countryDes").innerHTML = geoCountry + "'s population is " + countryData + ", there currency is the " + countryCurr + " and the language spoken is " + countryLang;
            console.log(countryLang);
            console.log(countryData);
        })
        })
            
       
    })
        
    })

// Timer function for countdown
    timer(destDate)
    
});




