
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'react-native-firebase';
import {StackActions,  NavigationActions} from 'react-navigation'




export default class Login extends Component {
    static navigationOptions = {
        header: null
      }
      


state = {
    email: '',
    senha: '',
    isAuthenticated: false,
    errorMessage: null
    
}




handleLogin = async () =>{
  
try{
const {  email, senha }  = this.state ;  
        if(email == "" || senha == "") {

          Alert.alert('Informações incorretas')

        }else{

          const user = await firebase.auth().signInWithEmailAndPassword(email.trim(), senha)
          console.log('teste')
           this.navigateToLogin();
            
        } 

        

  }catch(error){
    console.log(error)
  }
}



navigateToLogin = () =>{
  const resetAction = StackActions.reset({
    index: 0, 
    actions: [NavigationActions.navigate({routeName: 'home'})]
  })
  
  this.props.navigation.dispatch(resetAction);
}



  render() {
    return (
      <View style={styles.container} >
        <View style={styles.content}>
        <Image 
         style={styles.avatar}
         source={require('../img/doctor.png')}
        
        
        />
        <Text style={styles.text}>APLICATIVO PARA AUXÍLIO NO DIAGNÓSTICO DE DOENÇA HEPATICA</Text>
        {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
        {this.state.errorMessage}
        </Text>}
        <TextInput 
                style={styles.input}
                placeholder="E-MAIL"
                value={this.state.email}
                onChangeText= {email => this.setState({ email })}
        />
        <TextInput 
                style={styles.input}
                placeholder="SENHA"
                value={this.state.senha}
                onChangeText= {senha => this.setState({ senha })}
                secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text styles={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ED2A0'
    
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  text:{
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      marginTop: 30,
      alignSelf: 'center'
  },
  text2:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop: 20,
    alignSelf: 'center'
},
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 20
  },
  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#5ED2A0",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold"
  }
});
