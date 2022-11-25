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
        callback(null, "Requested breed is not found. Please check spelling");
        return;
      }
      try {
        callback(null, data[0].description);
      } catch (err) {
        callback(err, null);
      }
    });
};

module.exports = { fetchBreedDescription };
