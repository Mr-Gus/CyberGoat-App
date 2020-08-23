import React, {Component} from 'react';
import {AppRegistry,TextInput, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      
      <Text style={styles.welcome}>
            CyberGOAT&trade;
        </Text>
        
         <Text style={styles.symbolHeadline}>Enter a symbol:</Text>

       <TextInput autoCapitalize='none' placeholder='AAPL' maxLength={4} style={styles.input}></TextInput>
       <Button 
       title='GO' 
       color='red'
       
       />
                                
       <Text style={styles.watchlist}>Watchlist</Text>
     
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1717',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  watchlist:{
    textAlign:'center',
    color: 'white',
    fontSize: 20,
    margin: 40,
  },
  input:{
    height: 25,
    width: 150,
    backgroundColor:'grey',
    borderColor:'black',
    borderWidth:1,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
        
  },
   symbolHeadline:{
     height:20 ,
     marginTop: 30,
     color: 'white'
     
   },
   searchArea:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   }
  
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'TestApp', () => MyApp
);
