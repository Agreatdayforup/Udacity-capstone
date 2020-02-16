// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("#countDown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";




  // // GeoNames API information and userName
    // let destCity = document.querySelector('.dest');
    // const geoUser = 'agreatdayfor';
    // const geoNamesApi = `http://api.geonames.org/searchJSON?q=${destCity}&maxRows=10&username=${geoUser}`;

    //  // Geonames API Fetch
    //  fetch(geoNamesApi)
    //  .then(response => {
    //      return response.json();
    //  })
    //  .then(data => {
    //      console.log(data);
    //      const cordData = {
    //          lat: data.geonames[0].lat,
    //          lon: data.geonames[0].lng,
    //      };

    //      geoData.coord = cordData


    // // DarkSky API information
    // const darkApi = `${proxy}https://api.darksky.net/forecast/1469add55d2500c04eddbd73805930c6/${lat},${long}`;

    // fetch(darkApi)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             const { temperature, summary, icon } = data.currently;
    //             //set Dom from API
    //             degree.textContent = temperature;
    //             tempDescription.textContent = summary;
    //             // Set Icon
    //             setIcons(icon, document.querySelector('.icon'));
    //         })

    //          // function to change icon to a gif version  from DevED youtube
    // function setIcons(icon, iconID) {
    //     const skycons = new Skycons({color: 'white'});
    //     const currentIcon = icon.replace(/-/g, '_').toUpperCase();
    //     skycons.play();
    //     return skycons.set(iconID, Skycons[currentIcon]);
    // }
