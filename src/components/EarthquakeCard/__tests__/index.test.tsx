import React from 'react';
import {it} from '@jest/globals';
import EarthquakeCard from '..';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Earthquakes card renders correctly', () => {
  const mockItem = {
    datetime: '2011-03-11 05:46:23',
    depth: 24.4,
    lng: 142.369,
    src: 'us',
    eqid: 'c0001xgp',
    magnitude: 8.8,
    lat: 38.322,
  };
  renderer.create(<EarthquakeCard item={mockItem} />);
});
