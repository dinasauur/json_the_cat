
// STEP 1 - REQUIRE REQUEST
const request = require('request');

// STEP 5 - Allow the user to specify the breed name using command-line arguments.
const search = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;


// STEP 2 - REQUEST FROM SERVER
const breedFetcher = function() {
  request(URL, (error, response, body) => {

    // STEP 3 - CONVERT STRING TO OBJECT VIA PARSE
    const data = JSON.parse(body);

    // STEP 7 - EDGE CASE: REQUEST FAILED
    if (error) {
      console.log(`Something went wrong.`);
      return;
    }

    // STEP 6 - EDGE CASE: BREED NOT FOUND
    if (data.length === 0) {
      console.log(`Error your desired breed is not found.`);
      return;
    }
    // STEP 4 - Access the first entry in the data array and print out the description for the user.
    const getBreedDescription = data[0].description;
    console.log(getBreedDescription);
  });
};

breedFetcher();

/*

const getBreedDescription = function(breedInfo) {
  if(error) {
    console.log(`Error retrieving information: ${error}. Please type in correct breed name`);
  }
  console.log(breedInfo);
};

breedFetcher(getBreedDescription);


*/