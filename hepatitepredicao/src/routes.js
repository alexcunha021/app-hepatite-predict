import {createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/Login'
import home from './pages/home'
import Predict from './pages/Predict'


const Navegacao = createStackNavigator({
    Login,
    home,
    Predict

});



const Routes = createAppContainer(Navegacao);
export default Routes;