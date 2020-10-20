import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage'

export const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      title: "Login"
    }
  }
})