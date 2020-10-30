import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile165112Navigator from '../features/UserProfile165112/navigator';
import Settings165111Navigator from '../features/Settings165111/navigator';
import Settings165109Navigator from '../features/Settings165109/navigator';
import SignIn2165107Navigator from '../features/SignIn2165107/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile165112: { screen: UserProfile165112Navigator },
Settings165111: { screen: Settings165111Navigator },
Settings165109: { screen: Settings165109Navigator },
SignIn2165107: { screen: SignIn2165107Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
