const request = require('request');
const args = process.argv.slice(2);
let breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw new Error("Request could not be made");
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    throw new Error("Breed could not be found");
  }

  console.log(data[0].description);
});