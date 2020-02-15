

/* Global Variables */

window.addEventListener('load', () => {
    let long;
    let lat;
    let degree = document.querySelector('.degree');
    let tempDescription = document.querySelector('.tempDescrip');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // Helps prevent Cors error
            const proxy = 'https://cors-anywhere.herokuapp.com/';

            // GeoNames API information and userName
            let destCity = document.querySelector('.dest');
            const geoUser = agreatdayfor
            const geoNamesApi = `http://api.geonames.org/searchJSON?q=${destCity}&maxRows=10&username=${geoUser}`;

            // DarkSky API information
            const darkApi = `${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${lat},${long}`;

        // Geonames API Fetch
        fetch(geoNamesApi)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary, icon } = data.currently;


        fetch(darkApi)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary, icon } = data.currently;
                //set Dom from API
                degree.textContent = temperature;
                tempDescription.textContent = summary;
                // Set Icon
                setIcons(icon, document.querySelector('.icon'));
            })
        })
    }

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


