import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './src/screens/Users';
import DetailScreen from './src/screens/Details';
import PostsScreen from './src/screens/Posts';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
},{
  initialRouteName: 'Users',
});

export default createAppContainer(AppNavigator);
