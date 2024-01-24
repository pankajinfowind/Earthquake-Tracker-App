import {ActivityIndicator, Alert, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppConstants} from '../../constants/App_Constants';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import EarthquakeCard from '../../components/EarthquakeCard';
import {getEarthquakes} from '../../service/dashboardService';

/**
 * Dashboard component for displaying earthquake data.
 */
export default function Dashboard() {
  // Get navigation object from react-navigation
  const navigation = useNavigation<any>();

  // State to hold earthquake data
  const [data, setData] = useState<[any]>();

  // State to hold screen loading view
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch earthquake data from the API
  const getEarthquakesData = async () => {
    try {
      // Call the service function to get earthquake data
      const result: any = await getEarthquakes();

      // Update state with the earthquake data or an empty array if not available
      setData(result?.earthquakes ?? []);

      setIsLoading(false); // Update state to stop laoder
    } catch (error: any) {
      setIsLoading(false); // Update state to stop laoder

      // Display an alert if there's an error fetching data
      Alert.alert(error.message);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getEarthquakesData();
  }, []);

  // Render individual EarthquakeCard component
  const renderCard = ({item}: {item: any; index: number}) => {
    return (
      <EarthquakeCard
        item={item}
        onPresCard={() => {
          // Navigate to DashboardDetail screen with the selected item
          navigation.navigate('DashboardDetail', item);
        }}
      />
    );
  };

  // Render the main component
  return (
    <View style={styles.container}>
      <View>
        {/* Display the heading from AppConstants */}
        <Text style={styles.heading}>{AppConstants.Dashboard.heading}</Text>
      </View>

      {/* Conditionally render content based on loading state and data availability */}
      {isLoading ? (
        // Display loading indicator if data is still being fetched
        <View style={styles.contentView}>
          <ActivityIndicator />
        </View>
      ) : data && data?.length > 0 ? (
        // Display a FlatList if data is available
        <FlatList data={data} renderItem={renderCard} />
      ) : (
        // Display a message if no records are found
        <View style={styles.contentView}>
          <Text style={styles.screenLabel}>
            {AppConstants.Dashboard.noRecordFound}
          </Text>
        </View>
      )}
    </View>
  );
}
