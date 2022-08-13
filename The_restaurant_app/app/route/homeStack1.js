import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Manager_home from "../Screens/Manager_home";
import Waitinglist from '../Screens/Waiting_list';
import Manager_Menu from '../Screens/Manager_menu'
import Menu_input from '../Screens/Menu_input'
import Revenue from '../Screens/Revenue';
import Menu_edit from '../Screens/Menu_edit';


const screens = {
  Manager_home: {
    screen: Manager_home 
  },
  Manager_Menu:{
    screen: Manager_Menu
  },
  Menu_input :{
    screen: Menu_input 
  },
  Menu_edit:{
    screen: Menu_edit
  },
  Waitinglist : {
    screen: Waitinglist
  },
  Revenue: {
    screen: Revenue
  }
}
const HomeStack = createStackNavigator (screens);

export default createAppContainer (HomeStack);
//HomeStack;

