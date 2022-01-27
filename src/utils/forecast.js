const request = require("request");

const forecast = (latitude, Longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5997c8b028c5bb4e8460bc662d4f9e6f&query=${latitude},${Longitude}`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("cannot connect");
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      callback(
        undefined,
        `its currently ${body.current.temperature} degrees out.its feels like ${body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
