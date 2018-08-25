/*
##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/ */

/* 1. How many types of Chevrolet models are registered with the NHTSA? */

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/chevrolet?format=json')
  .then(function(serverRes){
   // console.log(serverRes.body.Results.length);
   answerElement_nhtsa_1.innerHTML = serverRes.body.Results.length
  })


/* 2. What are the vehicle types that Nissan has? */

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
  .then(function(serverRes){
  //console.log(serverRes.body.Results);
  var varOfCarTypes = serverRes.body.Results
  // console.log(varOfCarTypes);

    varOfCarTypes.forEach(function(types){
    //  console.log(types.VehicleTypeName);
      answerElement_nhtsa_2.innerHTML += `<li>${types.VehicleTypeName}</li>`
    })
  })


/* 3. What are the types of models that exist for Toyota trucks in 2017? */

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
  .then (function(serverRes){
  var typesOfTrucks2017 = serverRes.body.Results
  //  console.log(typesOfTrucks2017);
    typesOfTrucks2017.forEach((trucks)=>{
      // console.log(trucks.Model_Name);
      answerElement_nhtsa_3.innerHTML += `<li>${trucks.Model_Name}`
    })
  })
//answerElement_nhtsa_1.innerHTML = serverRes.body.Results
