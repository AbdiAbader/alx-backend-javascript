function getPaymentTokenFromAPI(success) {
    return success
      ? Promise.resolve({ data: 'Successful response from the API' })
      : Promise.reject('Cannot connect to API');
}
module.exports = getPaymentTokenFromAPI;