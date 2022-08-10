
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Home from './src/Home'
import Details from './src/Details'


export default function App() {



//Navigator
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


