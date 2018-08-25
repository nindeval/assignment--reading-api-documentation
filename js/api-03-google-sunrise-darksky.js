/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then((serverRes) => {
    var JsonRes = serverRes.body.results
    // console.log(JsonRes[0].geometry.location.lat);
    // console.log(JsonRes[0].geometry.location.lng);
    answerElement_apimashup_1.innerHTML = `<p>Latitude :${JsonRes[0].geometry.location.lat} </p> <p>Longitude :${JsonRes[0].geometry.location.lng} </p>`

  })



//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

request.get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
  .then((serverRes) => {
    var JsonResLatLng = serverRes.body.results
    // console.log(JsonResLatLng.sunset);
    answerElement_apimashup_2.innerHTML = `<p>Sunset : ${JsonResLatLng.sunrise} </p>`
  })




//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

request.get('https://api.darksky.net/forecast/33817effbc75d4f90605008350d5671d/37.8267,-122.4233')
  .then((serverRes)=>{
    var JsonResWeather = serverRes.body
    //console.log(JsonResWeather.currently.summary);
    answerElement_apimashup_3.innerHTML = `<p>Weekly weather : ${JsonResWeather.currently.summary}</p>`
  })



//
