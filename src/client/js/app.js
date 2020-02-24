/* Global Variables */
const searchForm = document.querySelector('form')
const cordData = {};
let geoCountry = {};
let geoCC = {};
let geoLatit = {};
let geoLongi = {};
let pixaData = {};
let countryData = {};



let degree = document.querySelector('.degree');
let tempDescription = document.querySelector('.tempDescrip');
let date = document.querySelector('#date');
let city = document.querySelector('.dest');
let resCityTitle = document.querySelector('.resCity')
    


// darkAPI function

//const getDarkSky = (geoLatit, geoLongi) => {

    // Helps prevent Cors error
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    // DarkSky API information
    const darkApi = `${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${geoLatit},${geoLongi}`;



// Destination date for user
    const destDate = date.value
// Destination city for user
    const destCity = city.value;

//form submittion with API Requests inside

//function handleSubmit(event) {
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('testing')
   

    resCityTitle.textContent = `The current weather in ${destCity} is!`
            console.log(destCity)
            console.log(destDate)



    //Geonames APIusername and api address
    const geoUser = 'agreatdayfor';
    const geoNamesApi = `http://api.geonames.org/searchJSON?q=${destCity}&maxRows=1&username=${geoUser}`;
     
// Geonames API Fetch
     fetch(geoNamesApi)
     .then(response => {
         return response.json();
     })
     .then(data => {
            geoLatit = data.geonames[0].lat;
            geoLongi = data.geonames[0].lng;
            geoCountry = data.geonames[0].countryName;
            geoCC = data.geonames[0].countryCode;
        
        
        console.log(geoLatit)
        console.log(geoLongi)
        console.log(data);
        console.log(geoCC);
        console.log(geoCountry);

     return fetch(`${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${geoLatit},${geoLongi}`).then(response => {
            return response.json();
        
        }).then(data => {
            console.log(data);
            const { temperature, summary, icon } = data.currently;
            
            //set Dom from API
            degree.textContent = temperature;
            tempDescription.textContent = summary;
            // Set Icon
            setIcons(icon, document.querySelector('.icon'));


            // Pixabay API Information
            const pixaKey = '14937162-57809441d2782a1b475398b82';
            const pixabayApi = `https://pixabay.com/api/?key=${pixaKey}&q=${destCity}&orientation=horizontal`

            return fetch(pixabayApi)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.hits[0].largeImageURL);
                pixaData = data.hits[0].largeImageURL;
                document.getElementById("resImg").style.backgroundImage = `url(${pixaData})`;
                
                const restCountry = `https://restcountries.eu/rest/v2/alpha/${geoCC}`

                return fetch(restCountry)
                .then(response => {
                    return response.json();
                }).then(data => {
                    countryData = data.population;
                    console.log(countryData);
                })
            })
            
            // function to change icon to a gif version  from DevED youtube
            function setIcons(icon, iconID) {
            const skycons = new Skycons({color: 'white'});
            const currentIcon = icon.replace(/-/g, '_').toUpperCase();
                skycons.play();
                return skycons.set(iconID, Skycons[currentIcon]);
            }
    })
        
    })

    
    
 


            


    




// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

   //             // Pixabay API Information
    // const pixaKey = '14937162-57809441d2782a1b475398b82';
    // const pixabayApi = `https://pixabay.com/api/?key=${pixaKey}&q=${destCity}&orientation=horizontal`

    // fetch(pixabayApi)
    //  .then(response => {
    //      return response.json();
    //  })
    //  .then(data => {
    //     document.getElementById(".response").style.backgroundImage = data.largeImageURL;
            


})
