import {it, expect, beforeEach, jest, describe} from '@jest/globals';
import {getEarthquakes} from '../dashboardService';

// Mock the networkCall_GET function and endPoints object
jest.mock('../apiManager', () => ({
  networkCall_GET: jest.fn(),
  endPoints: {
    earthquakes:
      'http://api.geonames.org/earthquakesJSON?formatted=true&north=44.1&south=-9.9&east=-22.4&west=55.2&username=arena',
  }, // Update with the correct endpoint
}));

describe('getEarthquakes', () => {
  beforeEach(() => {
    // Clear the mock calls before each test
    jest.clearAllMocks();
  });

  it('fetches earthquake data from the API', async () => {
    // Mock response data
    const mockResponse = {
      earthquakes: [
        {
          datetime: '2011-03-11 05:46:23',
          depth: 24.4,
          lng: 142.369,
          src: 'us',
          eqid: 'c0001xgp',
          magnitude: 8.8,
          lat: 38.322,
        },
        {
          datetime: '2012-04-11 08:38:37',
          depth: 22.9,
          lng: 93.0632,
          src: 'us',
          eqid: 'c000905e',
          magnitude: 8.6,
          lat: 2.311,
        },
        {
          datetime: '2007-09-12 11:10:26',
          depth: 30,
          lng: 101.3815,
          src: 'us',
          eqid: '2007hear',
          magnitude: 8.4,
          lat: -4.5172,
        },
        {
          datetime: '2012-04-11 10:43:09',
          depth: 16.4,
          lng: 92.4522,
          src: 'us',
          eqid: 'c00090da',
          magnitude: 8.2,
          lat: 0.7731,
        },
        {
          datetime: '2007-04-01 20:39:56',
          depth: 10,
          lng: 156.9567,
          src: 'us',
          eqid: '2007aqbk',
          magnitude: 8,
          lat: -8.4528,
        },
        {
          datetime: '2019-05-26 09:41:44',
          depth: 109.88,
          lng: -75.2975,
          src: 'us',
          eqid: 'us60003sc0',
          magnitude: 8,
          lat: -5.796,
        },
        {
          datetime: '2017-01-22 05:32:20',
          depth: 136,
          lng: 155.1224,
          src: 'us',
          eqid: 'us10007uph',
          magnitude: 7.9,
          lat: -6.2137,
        },
        {
          datetime: '2016-12-17 12:00:30',
          depth: 103.19,
          lng: 153.4495,
          src: 'us',
          eqid: 'us200081v8',
          magnitude: 7.9,
          lat: -4.5091,
        },
        {
          datetime: '2015-04-25 08:13:40',
          depth: 15,
          lng: 84.6493,
          src: 'us',
          eqid: 'us20002926',
          magnitude: 7.9,
          lat: 28.1306,
        },
        {
          datetime: '2013-04-16 10:44:20',
          depth: 82,
          lng: 62.0532,
          src: 'us',
          eqid: 'b000g7x7',
          magnitude: 7.8,
          lat: 28.1069,
        },
      ],
    };

    // Mock the networkCall_GET function to return the mockResponse
    require('../apiManager').networkCall_GET.mockResolvedValue(mockResponse);

    // Call the function and await the result
    const result = await getEarthquakes();

    // // Expect the result to be the mock response data
    expect(result).toEqual(mockResponse);
  });

  it('handles errors when fetching earthquake data', async () => {
    // Mock error response
    const mockError = new Error('Network error');

    // Mock the networkCall_GET function to throw the mockError
    require('../apiManager').networkCall_GET.mockRejectedValue(mockError);

    // Call the function and expect it to throw an error
    await expect(getEarthquakes()).rejects.toThrowError('Network error');
  });
});
