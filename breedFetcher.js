const request = require("request");
const breed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Requested breed is not found. Please check spelling");
    }
    try {
      console.log(data[0].description);
    } catch (err) {
      console.log("err", err.message);
    }
  }
);
