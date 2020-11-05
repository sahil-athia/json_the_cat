const request = require('request');


const fetchBreedDescription = function(breedname, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
      //we are returning the contents of the call back in the event of an error(the callback in index and test)
    }
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0].description);
      //we want to return null as error and the data as desc in our call back
    } else {
      return callback('Breed not found');
      // if the description is undefined but there is no error, we let this message equal our error
    }

  });
};

module.exports = { fetchBreedDescription };

