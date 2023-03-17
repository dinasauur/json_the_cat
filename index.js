
const {fetchBreedDescription} = require('./breedFetcher');

// STEP 5 - Allow the user to specify the breed name using command-line arguments.
const breedName = process.argv[2];


// STEP 4 - Access the first entry in the data array and print out the description for the user.

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});