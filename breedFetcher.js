const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Requested breed is not found. Please check spelling");
      }
      try {
        console.log(data[0].description);
      } catch (err) {
        callback(err, null);
      }
    });
};

module.exports = { fetchBreedDescription };
