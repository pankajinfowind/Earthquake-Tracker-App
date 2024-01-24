// Base URL for the API
const BASE_URL = 'http://api.geonames.org';

/**
 * Function to make a GET request to the specified endpoint with optional query parameters.
 * @param {string} endPoint - The endpoint to make the GET request to.
 * @param {Record<string, string | number | boolean>} queryParams - Optional query parameters for the request.
 * @returns {Promise} A promise that resolves with the JSON response or rejects with an error.
 */
export const networkCall_GET = async (
  endPoint: string,
  queryParams: Record<string, string | number | boolean> = {},
): Promise<any> => {
  // Construct the query string by encoding the query parameters
  const queryString = Object.keys(queryParams)
    .map(
      key =>
        encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]),
    )
    .join('&');

  // Construct the full URL with parameters
  const urlWithParams = queryString
    ? `${BASE_URL}${endPoint}?${queryString}`
    : `${BASE_URL}${endPoint}`;

  // Create headers for the request
  var requestHeader = new Headers();
  requestHeader.append('Content-Type', 'application/json');

  // Return a promise for the fetch request
  return new Promise(async (resolve, reject) => {
    // Define options for the fetch request
    var requestOptions = {
      method: 'GET',
      headers: requestHeader,
    };

    // Use fetch to make the GET request
    fetch(urlWithParams, requestOptions)
      .then(response => response.json())
      .then(result => {
        // Resolve the promise with the JSON response
        resolve(result);
      })
      .catch(error => {
        // Reject the promise with the error if there is one
        reject(error);
      });
  });
};
