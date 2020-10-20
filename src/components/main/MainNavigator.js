import { createBottomTabNavigator } from 'react-navigation'
import ProfilePage from '../profile/ProfilePage'
import ShopPage from '../shop/ShopPage'

export const MainNavigator = createBottomTabNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  },
  Shop: {
    screen: ShopPage,
    navigationOptions: {
      tabBarLabel: 'Shop'
    }
  }
})