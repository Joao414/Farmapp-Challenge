import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { color } from 'react-native-reanimated';
import { Feather, Fontisto, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function AnexarReceita() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      Alert.alert('Receita', 'Receita anexada com sucesso')
    }
  };

  return (

    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('Produtos')}>
          <AntDesign name="left" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.textoTitulo}>Drogaria São Paulo - Jardins</Text>
        <Text style={{ fontSize: 12, textAlign: 'center', color: 'gray', marginTop: 2 }}>45-55m</Text>
        <Text style={{ fontSize: 14, textAlign: 'center', color: 'white', marginTop: 15 }}><SimpleLineIcons name='location-pin' /> R. Estados Unidos, 624</Text>
      </View>

      <View style={styles.principal}>
        <Image source={require('../../assets/rivotril.jpg')} />
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rivotril Generico 2mg - 30 cápsulas</Text>
        <Text style={{ marginTop: 8, color: 'gray' }}>tratamento dos vários tipos de distúrbios de ansiedade - como sindrome do pânico, transtorno de
          ansiedade generalizada e ansiedade social</Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 14 }}>R$ 32,00</Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 14 }}>Informações sobre o medicamento</Text>
        <Text style={{ fontSize: 11, color: 'gray' }}>Produto genérico 2mg - COMPRIMIDO</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 13 }}>Requer receita médica digital?</Text>
          <Text style={{ fontSize: 13, color: '#183E9F' }} onPress={Link}>Como funciona?</Text>
        </View>
        <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 4 }}>Sim</Text>
        <TouchableOpacity onPress={pickImage}>
          <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 15, color: '#183E9F' }}>Anexar receita digital</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/obs.png')} style={{ width: 280, height: 100, alignSelf: 'center', marginTop: 12 }} resizeMode='center' />
      </View>
      <TouchableOpacity style={{ backgroundColor: '#183E9F', padding: 12, marginTop: 30 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }} onPress={() => navigation.navigate('Carrinho')}>ADICIONAR AO CARRINHO</Text>
      </TouchableOpacity>
    </View>

  );
}

function Link() {
  Linking.openURL('https://t.me/Farmapp_bot')
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1200
  },
  cabecalho: {
    flex: 1,
    padding: 16,
    backgroundColor: '#183E9F',
  },
  principal: {
    flex: 5,
    backgroundColor: 'white',
    padding: 8,
  },
  textoTitulo: {
    marginTop: 6,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnVoltar: {
    flexDirection: 'row',
    marginTop: -4,
    marginLeft: 1,
  },
  txtVoltar: {
    fontSize: 20,
    position: 'absolute',
    marginRight: 30,
    marginLeft: 25,
    color: '#FFFFFF'
  },

})