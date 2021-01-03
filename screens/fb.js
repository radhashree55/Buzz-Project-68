import React from 'react';
import { Text, View } from 'react-native';

export default class FacebookScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight:'bold',fontSize:20 }}>
          <Text style={{color:"#4267B2",fontSize:30,fontWeight:'bold'}}>Facebook</Text>
        </View>
      );
    }
  }