import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import MobileNumberList from './MobileNumberList'
import Test from './Test'
import ChangePassword from './ChangePassword'
import VerifyOTP from './VerifyOTP'
import Dashboard from './Dashboard'

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false,
            }
        },
        ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions: {
                title: 'Forgot Password',
            }
        },
        MobileNumberList: {
          screen: MobileNumberList,
          navigationOptions: {
            title: ''
          }
        },
        Test: {
            screen: Test,
            navigationOptions: {
                title: 'Test'
            }
        },
        ChangePassword: {
            screen: ChangePassword,
            navigationOptions: {
                title: 'Change Password'
            }
        },
        VerifyOTP: {
          screen: VerifyOTP,
          navigationOptions: {
            title: 'Verify OTP'
          }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
              headerShown: false
            }
          }
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#344756',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const App = createAppContainer(AppNavigator);

export default App;
