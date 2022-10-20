import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function BemVindo() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
          source={require('../../assets/IMGFarmapp.png')}  
          style={{ width: '100%' }}
          resizeMode='contain'
          
        />
      </View>

      <Animatable.View delay={2000} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Bem-Vindo </Text>
        <Text style={styles.text}>Somos um delivery de produtos farmacêuticos com ou sem prescrição médica </Text>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}
          onPress={() => navigation.navigate('Entrar')}
          >Login</Text>
          

        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Cadastrar')}>Cadastrar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#183E9F'
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#183E9F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: '#000000',
    fontSize: 20,
  },
  button1:{
    position: 'absolute',
    backgroundColor: '#183E9F',
    borderRadius: 50,
    paddingVertical: 8,
    width: '50%',
    alignSelf: 'flex-start',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },

  button2:{
    position: 'absolute',
    backgroundColor: '#183E9F',
    borderRadius: 50,
    paddingVertical: 8,
    width: '50%',
    alignSelf: 'flex-start',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 205
  },

  buttonText:{
    fontSize: 18,
    color: '#FFFFFF'
  }
})