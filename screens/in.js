import React from 'react';
import { Text, View } from 'react-native';

export default class InstagramScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color:"#8a3ab9",fontSize:30,fontWeight:'bold'}}>Instagram</Text>
        </View>
      );
    }
  }