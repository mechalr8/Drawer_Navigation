import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gamezone">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
