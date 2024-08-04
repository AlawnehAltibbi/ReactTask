import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/searchScreen";
import EventsScreen from "./src/screens/EventsScreen";
import homeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(

  {
    Search: SearchScreen,
    Events:EventsScreen,
      Home : homeScreen


  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Market',
    },
  }

);

export default createAppContainer(navigator);
