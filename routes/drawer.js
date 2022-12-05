import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import About from '../screens/about';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Gamezone" component={Home} />
        <Drawer.Screen name="About Gamezone" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
