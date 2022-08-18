function getDataApi() {
  return fetch("https://adalab-api.herokuapp.com/api/random/word/")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}
export default getDataApi;
