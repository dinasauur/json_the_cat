
// STEP 1 - REQUIRE REQUEST
const request = require('request');

// STEP 2 - REQUEST FROM SERVER
const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    // STEP 3 - CONVERT STRING TO OBJECT VIA JSON PARSE
    const data = JSON.parse(body);

    // STEP 7 - EDGE CASE: REQUEST FAILED
    if (error) {
      callback(error, null); //callback will console.log the desc or error into the terminal for the client. Using null as parameter because only error parameter applies to this if statement
      return;
    }
    
    // STEP 6 - EDGE CASE: BREED NOT FOUND
    if (data.length === 0) {
      callback(`Your desired breed is not found.`); // Instead of placing arguments in here, this automatically gets run in the first parameter of callback. So it goes to 'error
      return;
    } 
    // Happy Path
      callback(null, data[0].description);
    
  });
};

module.exports = {
  fetchBreedDescription
};

/*
Refactored code so that any console.logging required will be done using a callback and they are placed in the index.js file
this main function here is simply returning the description or an error via the provided callback.
The index.js is used to actually call this main function.
*/



