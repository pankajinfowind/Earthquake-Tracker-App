import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {constantImages} from '../../constants/App_Constants';

/**
 * DashboardDetail component for displaying detailed information about an earthquake.
 */
export default function DashboardDetail() {
  // Get route information from react-navigation
  const data = useRoute();

  // Get navigation object from react-navigation
  const navigation = useNavigation();

  // Extract item data from route parameters
  const item: any = data.params;

  // Render the component
  return (
    <View style={styles.container}>
      {/* Back button to navigate back to the previous screen */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image style={styles.back} source={constantImages.back} />
      </TouchableOpacity>

      {/* Display earthquake details */}
      <View style={styles.block}>
        {/* Display earthquake magnitude */}
        <Text style={styles.title}>{`Magnitude ${item?.magnitude}`}</Text>

        {/* Display earthquake datetime */}
        <Text style={styles.subtitle}>{item?.datetime}</Text>

        {/* Display earthquake depth */}
        <Text style={styles.detail}>{`Depth: ${item?.depth} km`}</Text>

        {/* Display earthquake location */}
        <Text
          style={styles.detail}>{`Location: ${item?.lat}, ${item?.lng}`}</Text>
      </View>
    </View>
  );
}
