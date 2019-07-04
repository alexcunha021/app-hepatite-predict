import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../services/api';


export default class Predict extends Component {
  static navigationOptions = {
    header: null
  }   
      
  hadleGoBack = () =>{
    this.props.navigation.pop()
  } 

  state = {
    Age: null,	
    Sex:	null,
    TB: null,
    DB:	null,
    AP: null,	
    ALB: null,
    tgo: null,	
    proteins: null,
    alb:	null,
    g: null,
    lista: [],
}


handlPost = async () =>{
      Age = this.state.Age;
      Sex = this.state.Sex
      TB = this.state.TB;
      DB = this.state.DB;
      AP = this.state.AP;
      ALB = this.state.ALB;
      tgo = this.state.tgo;
      proteins = this.state.proteins;
      alb = this.state.alb;
      g = this.state.g;
      
      try{

        const result = await api.post('devs', {Age, Sex, TB, DB, AP, ALB, tgo, proteins, alb, g})
        if(result.data !== 1)
        {
          console.log('Saudavel\n Faça mais exames para confirmar!')
         Alert.alert('saudavel, faça mais exames para confirmar')
         
        }
        else 
        {
          Alert.alert('Doente\n faça mais exames\n para confirmar!')
        }


      }catch(error){
        Alert.alert('Dados incorretos')
      }
        
      
}

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header}>
        <TouchableOpacity onPress={this.hadleGoBack}>
          <Icon name='ios-arrow-back' style={styles.icon} />
        </TouchableOpacity>
            <Text style={styles.textheader}>Predição da Hepátite</Text>  
        
        <TouchableOpacity onPress={this.hadleGoBack}>
          <Icon name='ios-alert' style={styles.icon} />
        </TouchableOpacity>
        </View>
        
        <ScrollView>
        <View style={styles.content}>
        <Text style={styles.text3}>Idade</Text>
        <TextInput 
                style={styles.input}
                placeholder="Idade"
                value={this.state.Age}
                onChangeText= {Age => this.setState({ Age })}
        />
        <Text style={styles.text3}>Sexo</Text>
        <TextInput 
                style={styles.input}
                placeholder="Sexo Masculino=1 / Feminino=0"
                value={this.state.Sex}
                onChangeText= {Sex => this.setState({ Sex })}
        />
        <Text style={styles.text3}>Bilirrubina Total da TB</Text>
        <TextInput 
                style={styles.input}
                placeholder="Bilirrubina Total da TB"
                value={this.state.TB}
                onChangeText= {TB => this.setState({ TB })}
        />
        <Text style={styles.text3}>Bilirrubina Direta do DB</Text>
         <TextInput 
                style={styles.input}
                placeholder="Bilirrubina Direta do DB"
                value={this.state.DB}
                onChangeText= {DB => this.setState({ DB })}
        />
        <Text style={styles.text3}>Fosfatase Alcalina de Alkphos</Text>
        <TextInput 
                style={styles.input}
                placeholder="Fosfatase Alcalina de Alkphos"
                value={this.state.AP}
                onChangeText= {AP => this.setState({ AP })}
        />
        <Text style={styles.text3}>Sgpt Alanine Aminotransferase</Text>
        <TextInput 
                style={styles.input}
                placeholder="Sgpt Alanine Aminotransferase"
                value={this.state.ALB}
                onChangeText= {ALB => this.setState({ ALB })}
        />
        <Text style={styles.text3}>Sgot Aspartato Aminotransferase</Text>
        <TextInput 
                style={styles.input}
                placeholder="Sgot Aspartato Aminotransferase"
                value={this.state.tgo}
                onChangeText= {tgo => this.setState({ tgo })}
        />
        <Text style={styles.text3}>Proteínas Totais</Text>
        <TextInput 
                style={styles.input}
                placeholder="Proteínas Totais"
                value={this.state.proteins}
                onChangeText= {proteins => this.setState({ proteins })}
        />
        <Text style={styles.text3}>Alb albumina</Text>
        <TextInput 
                style={styles.input}
                placeholder="Alb albumina"
                value={this.state.alb}
                onChangeText= {alb => this.setState({ alb })}
        />
        <Text style={styles.text3}>Relação Albumina e Globulina A / G Ratio</Text>
        <TextInput 
                style={styles.input}
                placeholder="Relação Albumina e Globulina A / G Ratio"
                value={this.state.g}
                onChangeText= {g => this.setState({ g })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handlPost}>
            <Text styles={styles.buttonText}>RESULTADO</Text>
        </TouchableOpacity>

  
        </View>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
 textheader:{
  fontWeight: 'bold',
  fontSize: 16,
  color: "#333",
  alignItems: 'center'

 },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  
  text:{
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
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
text3:{
  fontWeight: 'bold',
  fontSize: 16,
  color: 'black',
  marginTop: 5,
  marginVertical: 10,
  alignSelf: 'center'
},
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
    alignSelf: "stretch",
    //marginTop: 10

    
  },
  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#5ED2A0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  icon: {
    color: 'black',
    fontSize: 26
  },
});





