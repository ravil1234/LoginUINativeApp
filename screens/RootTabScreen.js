import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { DrawerContent } from './DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingScreen';
import BookmarkScreen from './BookmarkScreen';
import  InfoScreen from './InfoScreen';
const Drawer = createDrawerNavigator();

const RootTabScreen = () => {
      return(
         <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="InfoScreen" component={InfoScreen} />
        </Drawer.Navigator>
      );
}
export default RootTabScreen;