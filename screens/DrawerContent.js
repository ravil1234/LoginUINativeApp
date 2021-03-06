import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useTheme,Text,Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import{ AuthContext } from '../components/context';

export function DrawerContent(props)
{
const paperTheme = useTheme();
//const { signOut, toggleTheme } = React.useContext(AuthContext);
   return(
<View style={{flex: 1}}>
    <DrawerContentScrollView {...props}>
<View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
    <View style={{flexDirection:'row',marginTop:15}}>
        <Avatar.Image
        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png'}}
        
        />
        <View style={{flexDirection:'column',marginLeft:15}}>
            <Title style={styles.title}>
              Mohd Ravil
            </Title>
            <Caption style={styles.caption}>
                @ravil_shaikh
            </Caption>
        </View>
    </View>
    <View style={{marginTop: 20, flexDirection: 'row',alignItems: 'center',}}>
    <View style={styles.section}>
        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
        <Caption style={styles.caption}>Following</Caption>
    </View>
    <View style={styles.section}>
        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
        <Caption style={styles.caption}>Followers</Caption>
    </View>
    </View>
    </View>
    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="General"
                            onPress={() => {props.navigation.navigate('HomeDrawer')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Information"
                            onPress={() => {props.navigation.navigate('InfoScreen')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-helper" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
</View>
    </DrawerContentScrollView>
    <Drawer.Section styles={styles.bottomDrawerSection}>
        <DrawerItem
        icon={({color,size})=> (
            <Icon
                name="exit-to-app"
                color={color}
                size={size}
            />
        )}
        label="Sign Out"
        onPress={()=>{}}
        />
    </Drawer.Section>
</View>       
   );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });