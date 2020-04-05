import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';
import Profile from './screens/Profile';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
      <View style={styles.container}>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={CreateEmployee} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
    </View>
  );
}
export default () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </Provider>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Contants.statusBarHeight,
    backgroundColor: '#e0e0e0',
  },
});
