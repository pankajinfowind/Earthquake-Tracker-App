import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard/Dashboard';
import DashboardDetail from '../screens/DashboardDetail/DashboardDetail';

// Create a stack navigator using React Navigation
const Stack = createStackNavigator();

/**
 * RootNavigation component to define the navigation stack for the app.
 * Uses createStackNavigator from @react-navigation/stack to set up navigation.
 */
export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      {/* Dashboard screen with no header */}
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />

      {/* DashboardDetail screen with no header */}
      <Stack.Screen
        name="DashboardDetail"
        component={DashboardDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
