import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class home extends Component {
  static navigationOptions = {
    header: null
  }
  
  handSegunda = () =>{
    this.props.navigation.navigate('Predict')
  }

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerText}>HOME</Text>
        </View >
        <Text style={styles.headerText}>O aplicativo está em desenvolvimento</Text>
        <Text style={styles.headerText}>Os resultados não substituem a análise médica</Text>
           <View style={styles.containerButton}>
              <TouchableOpacity style={styles.button} onPress={this.handSegunda}>
                  <Text style={styles.buttonText}>Predição Hepátite</Text>
              </TouchableOpacity>
            </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
    
  },
  header:{
    height: 60,
    paddingTop:20,
    paddingHorizontal: 20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5ED2A0',
    borderBottomWidth: 1,
    
    
   },
 headerText:{
    fontWeight: 'bold',
    fontSize: 16,
    color: "#333",
    alignSelf: 'center',
    marginTop: 10
    

  },
  containerButton:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'center',
    alignSelf: 'center',
    marginTop:50
  },
  button: {
    
    height: 100,
    width: 100,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#5ED2A0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 1,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:  20,
  }
});
