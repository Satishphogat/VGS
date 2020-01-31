import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import ForgotPassword from './ForgotPassword';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },
        ForgotPassword: { 
            screen: ForgotPassword,
            navigationOptions: {
                title: 'Forgot Password',
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