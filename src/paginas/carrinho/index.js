import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { color } from 'react-native-reanimated';
import { Feather, Fontisto, AntDesign } from '@expo/vector-icons';



export default function Carrinho() {
  const navigation = useNavigation();
  const [qtd, setQtd] = useState(0)
  return (

    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('AnexarReceita')}>
          <AntDesign name="left" size={25} color="#FFFFFF" />

        </TouchableOpacity>
        <Text style={styles.textoTitulo}>Meu Carrinho de Compras</Text>
        <Text style={{ fontSize: 12, textAlign: 'center', color: 'gray', marginTop: 8 }}>45-55m</Text>
        <Text style={{ fontSize: 14, textAlign: 'center', color: 'white', marginTop: 15 }}><SimpleLineIcons name='location-pin' /> R. Estados Unidos, 624</Text>
      </View>

      <View style={styles.principal}>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, color: '#183E9F', marginTop: 60, marginBottom: 12, alignSelf: 'flex-end', marginRight: 10 }} onPress={Link}>PRECISO DE AJUDA</Text>
        </TouchableOpacity>
        <View>

          <TouchableOpacity style={styles.cartao}  >
            <Image source={require('../../assets/rivotril.jpg')} style={{ width: 90, height: 90, marginRight: 7 }} />
            <View style={{ width: 220 }}>
              <Text style={{ fontSize: 12, color: 'gray', }}>Rivotril Genérico 2mg - 30 cápsulas</Text>
              <Text style={{ fontSize: 12, color: 'gray', }}>tratamento dos vários tipos de distúrbios de ansiedade – como síndrome do pânico, transtorno de ansiedade generalizado e ansiedade social</Text>
              <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>R$ 32,00</Text>
              <Text style={{ color: '#183E9F', fontWeight: 'bold' }}>RECEITA DIGITAL</Text>
              <TouchableOpacity style={styles.btnQuantidade}><Text style={{ color: '#183E9F', fontWeight: 'bold' }}><Text onPress={() => setQtd(qtd + 1)}>+</Text>  {qtd}  <Text onPress={() => setQtd(qtd - 1)}>-</Text></Text></TouchableOpacity>
            </View>
          </TouchableOpacity>

        </View>


      </View>
      <TouchableOpacity style={{ backgroundColor: '#183E9F', padding: 12, marginTop: 30 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>IR PARA PAGAMENTO</Text>
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
    marginTop: -10,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnVoltar: {
    flexDirection: 'row',
    marginTop: -2,
    marginLeft: 1,
  },
  txtVoltar: {
    fontSize: 20,
    position: 'absolute',
    marginRight: 30,
    marginLeft: 25,
    color: '#FFFFFF'
  },
  cartao: {
    marginTop: 10,
    borderWidth: 0.05,
    flexDirection: 'row',
    borderRadius: 2,
    padding: 8,
    height: 150,
  },
  btnQuantidade: {
    borderWidth: 0.05,
    alignSelf: 'flex-end',
    borderRadius: 2,
    padding: 8,
    height: '25%',
    width: '35%',
    alignItems: 'center',
    marginTop: -30,

  }

})
