import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
import SettingsScreen from './SettingsScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
 
const HomeScreenstack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <Icon name="shopping-bag" size={15} color="white" style={{paddingRight: 10}} />
          ),
          headerStyle: {
            backgroundColor: '#900C3F', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
 
const SettingScreenstack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <Icon name="shopping-bag" size={15} color="white" style={{paddingRight: 10}} />
        ),
        headerStyle: {
          backgroundColor: '#900C3F', //Set Header color
        },
        headerTintColor: 'white', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
 
const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator

    screenOptions={{
        drawerType:"slide",
        activeTintColor: '#FC6666',
        color: 'white',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: 'white',
        },
        headerShown: false
      }}
      
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenstack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={SettingScreenstack}
      />
    </Drawer.Navigator>
  );
};
 
export default DrawerNavigatorRoutes;
