import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

import { FontAwesome5 } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons'; 

export default function Entrar() {
  const navigation = useNavigation();
  return(
    
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <TouchableOpacity style={styles.btnVoltar}>
        <AntDesign name="left" size={25} color="black" />
        <Text style={styles.txtVoltar} onPress={() => navigation.navigate('BemVindo')}
        > Voltar</Text>
      </TouchableOpacity>
      
      </Animatable.View>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Login </Text>
        <Text style={styles.text}>Entre no aplicativo para fazer suas compras sem sair de casa! </Text>
      </Animatable.View>
      
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.message2}>Farmapp </Text>
        <Text style={styles.title}></Text>
        <TextInput placeholder='Nome do Usuário' style={styles.input}/>

        <Text style={styles.title}></Text>
        <TextInput placeholder='Senha do Usuário'
        style={styles.input}/>
        
        <TouchableOpacity>
          <Text style={styles.txtSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Link}>
          <Text style={styles.txtAjuda}>Precisa de Ajuda?</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.btnFacebook}>
        <FontAwesome5 style={styles.logo} name="facebook" size={35} color="blue" />
          <Text style={styles.buttonText}>Entrar com Facebook</Text>
          <AntDesign style={styles.btnSeta} name="arrowright" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFacebook}>
        <AntDesign style={styles.logo} name="google" size={35} color="black" />
          <Text style={styles.buttonText}>Entrar com o Google</Text>
          <AntDesign style={styles.btnSeta} name="arrowright" size={24} color="black" />
        </TouchableOpacity>



      </Animatable.View>

    </View>
  );
}


function Link() {
  Linking.openURL('https://t.me/Farmapp_bot')
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FFFFFF"
  },
  containerHeader:{
    marginTop: '3%',
    marginBottom: '8%',
    paddingStart: '5%',
    
  },
  registrar:{
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  txtVoltar:{
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btnVoltar:{
    flexDirection: 'row'
  },
  message:{
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  message2:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 30
  },
  containerForm:{
    backgroundColor: '#183E9F',
    flex: 1,
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '5%',
    paddingEnd: '5%',
    
  },
  title:{
    fontSize: 20,
    marginTop: 2
    
  },
  input:{
    
    fontSize: 16,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 55,
    

  },
  btnFacebook:{
    width: '100%',
    borderRadius: 25,
    paddingVertical: 5,
    marginTop: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  logo:{
    marginLeft: 5
  },

  btnSeta:{
    marginLeft: 80
  },

  buttonText:{
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#FFFFFF',
    width: '50%',
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'

  },
  txtSenha:{
    alignSelf: 'flex-end',
    color: '#FFFFFF'
  },  

  txtAjuda:{
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 10
  },

  text:{
    color: '#000000',
    fontSize: 20,
    marginTop: 10
  },

})