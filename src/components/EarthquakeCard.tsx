import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

// Interface defining the props for the EarthquakeCard component
interface EarthquakeCardProps {
  item?: any;
  onPresCard?: () => void;
}

/**
 * EarthquakeCard component to display information about an earthquake.
 * @param {EarthquakeCardProps} props - The props for the component.
 */
const EarthquakeCard = ({item, onPresCard}: EarthquakeCardProps) => {
  // Extract date and time from the datetime string
  const [date, time] = item.datetime.split(' ');

  // Render the component
  return (
    <TouchableOpacity onPress={onPresCard} style={styles.card}>
      {/* Display earthquake magnitude */}
      <Text style={styles.title}>{`Magnitude ${item?.magnitude}`}</Text>

      {/* Display earthquake time */}
      <Text style={styles.subtitle}>{`Time : ${time}`}</Text>

      {/* Display earthquake depth */}
      <Text style={styles.detail}>{`Depth: ${item?.depth} km`}</Text>

      {/* Display earthquake location */}
      <Text
        style={styles.detail}>{`Location: ${item?.lat}, ${item?.lng}`}</Text>

      {/* Display earthquake date */}
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

export default EarthquakeCard;
