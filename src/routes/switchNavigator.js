import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomePage from "./welcomeRoutes/welcome";
import { mainNavigator } from './mainRoutes/main';

const SwitchNavigator = createSwitchNavigator(
    {
        Welcome: WelcomePage,
        App: mainNavigator,
    },
    {
        initialRouteName: 'App'
    })


export default createAppContainer(SwitchNavigator);
