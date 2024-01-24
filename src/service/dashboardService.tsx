// Importing networkCall_GET function and endPoints object from apiManager
import {networkCall_GET} from './apiManager';
import {endPoints} from './apiManager/EndPoints';

/**
 * Function to fetch earthquake data from the API.
 * @returns {Promise} A promise that resolves with the earthquake data or rejects with an error.
 */
export const getEarthquakes = async () => {
  return new Promise(async (resolve, reject) => {
    // Define query parameters for the API request
    const queryParams = {
      formatted: true,
      north: 44.1,
      south: -9.9,
      east: -22.4,
      west: 55.2,
      username: 'arena',
    };

    try {
      // Call the networkCall_GET function to make the API request
      const result = await networkCall_GET(endPoints.earthquakes, queryParams);

      // Resolve the promise with the fetched data
      resolve(result);
    } catch (error: any) {
      // Log the error to the console
      console.log('Earthquakes error = ', error.message);

      // Reject the promise with the error
      reject(error);
    }
  });
};
