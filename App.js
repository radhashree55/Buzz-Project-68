import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header} from 'react-native-elements';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FacebookScreen from "./screens/fb";
import InstagramScreen from "./screens/in";

export default class App extends React.Component {
  render(){
    return(
      <View style={{flex:1}}>
        <Header
        backgroundColor="black"
        centerComponent={{
          text: '⭐ Buzz App ⭐',
          style:{
            color: 'white',
            fontSize: 29,
            fontWeight: 'bold',
          }
        }} 
        />
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
