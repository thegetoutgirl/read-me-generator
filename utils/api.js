const axios = require("axios");

const api = {
  getUser(githubID) {
    const queryURL = `https://api.github.com/users/${githubID}`;
    return axios
    .get(queryURL)
    .then(function(response){
      return response.data


    })
    // .catch (function(error) {
    //   console.log(error);
    // });
  }
};

module.exports = api;
