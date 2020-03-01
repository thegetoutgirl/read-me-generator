const axios = require("axios");

const api = {
  getUser(username) {
  return axios
    .get("GitHub Api goes here")
    .then(function(response) {
      return response;
        console.log(response);
    });
  }

};

module.exports = api;
