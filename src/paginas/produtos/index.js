import * as React from 'react';
import { View,Button, Text, StyleSheet,ScrollView, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { color } from 'react-native-reanimated';
import { Feather, Fontisto, AntDesign } from '@expo/vector-icons'; 


export default function Produtos() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
        <ScrollView>
          <View style={{width: '100%', height: 230, backgroundColor: '#183E9F'}}>
              <View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btnVoltar}>
                      <AntDesign name="left" size={25} color="#FFFFFF" />
                      <Text style={styles.txtVoltar} onPress={() => navigation.navigate('Home')}
                      > Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAjuda} onPress={Link}>
                      <Text style={styles.txtAjuda}>Ajuda</Text>
                      <Feather name="help-circle" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                  
                  <Text style={styles.message2}>Farmácia</Text>
                  
                  <TextInput style={styles.input1} placeholder='Procurar em Farmácia...' />
                  <Image style={{ position: 'absolute', alignSelf: 'flex-end', top: 135, color: 'black', right:35 }} source={require('../../assets/carrinho.png')} />
                  <Image style={{ position: 'absolute', top: 147, right: 110 }} source={require('../../assets/microphone.png')} />
                  
              </View>
          </View>

          <View style={{width: '100%', height:1000, backgroundColor: '#FDFDFD'}}>
              <View style={styles.viewBody}>
              
                  <View>
                    
                      <View>

                      <Text style={styles.textTitulo}>Populares</Text>
                            <TouchableOpacity style={styles.buttonImg5}>
                              <View>
                                <Image
                                  animation="flipInY"
                                  source={require('../../assets/ImgNovalgina.jpg')}  
                                  style={styles.img2}
                                  resizeMode='contain'/>
                                  <Text style={styles.txtImage}>Novalgina  R$ 15,00</Text>
                                  <Text style={styles.txtLegenda}>Remédio Genérico 20g</Text>
                                  <Text style={styles.txtFarmacia}>Drogaria São Paulo</Text>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonImg6}>
                              <View>
                                <Image
                                  animation="flipInY"
                                  source={require('../../assets/ImgNovalgina.jpg')}  
                                  style={styles.img2}
                                  resizeMode='contain'/>
                                  <Text style={styles.txtImage}>Novalgina  R$ 15,00</Text>
                                  <Text style={styles.txtLegenda}>Remédio Genérico 20g</Text>
                                  <Text style={styles.txtFarmacia}>Drogaria São Paulo</Text>
                              </View>
                            </TouchableOpacity>
                            
                              <View style={styles.principal}>
                                <Text style={{ fontSize: 20, color: '#183E9F', fontWeight: 'bold', marginTop: 40,marginBottom:12 }}>Produtos</Text>
                                <View>

                                  <TouchableOpacity style={styles.cartao} onPress={() => navigation.navigate('AnexarReceita')} >
                                    <Image source={require('../../assets/rivotril.jpg')} style={{ width: 90, height: 90, marginRight: 7 }} />
                                    <View style={{ width: 220 }}>
                                    <Text style={{ fontSize: 12, color: 'gray',  }}>Rivotril Genérico 2mg - 30 cápsulas</Text>
                                    <Text style={{ fontSize: 12, color: 'gray',  }}>tratamento dos vários tipos de distúrbios de ansiedade – como síndrome do pânico, transtorno de ansiedade generalizado e ansiedade social</Text>
                                    <Text style={{ fontSize: 12, marginTop: 10 }}>R$ 32,00</Text>
                                    </View>
                                  </TouchableOpacity>
                                  
                                </View>
                              </View>

                          <Text style={styles.textTitulo}>Descobrir</Text>
                          <View>

                            <TouchableOpacity style={styles.buttonImg1}>
                              <View>
                                <Image
                                  animation="flipInY"
                                  source={require('../../assets/LogoLafarma.jpg')}  
                                  style={styles.img2}
                                  resizeMode='contain'/>
                                  <Text style={styles.txtImage}>La Pharma Manipulação</Text>
                                  <Text>45-55</Text>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonImg2}>
                              <View>
                                <Image
                                  animation="flipInY"
                                  source={require('../../assets/download.png')}  
                                  style={styles.img2}
                                  resizeMode='contain'/>
                                  <Text style={styles.txtImage}>Cobasi Vila</Text>
                                  <Text>45-55</Text>
                              </View>
                            </TouchableOpacity>


                            <View>
                              <TouchableOpacity style={styles.buttonImg3}>
                                  <View>
                                    <Image
                                        animation="flipInY"
                                        source={require('../../assets/petLand.jpeg')}  
                                        style={styles.img2}
                                        resizeMode='contain'/>
                                        <Text style={styles.txtImage}>Pet Land</Text>
                                        <Text>45-55</Text>
                                  </View>
                                </TouchableOpacity>

                              <TouchableOpacity style={styles.buttonImg4}>
                                <View>
                                  <Image
                                    animation="flipInY"
                                    source={require('../../assets/logoUltrafarma.jpg')}  
                                    style={styles.img2}
                                    resizeMode='contain'/>
                                    <Text style={styles.txtImage}>Ultra Farma</Text>
                                    <Text>45-55</Text>
                                </View>
                              </TouchableOpacity>

                            </View>
                      </View>
                    </View>
                </View>
              </View>
          </View>
        </ScrollView>

  </View>
    
    
  );
}

function Link() {
  Linking.openURL('https://t.me/Farmapp_bot')
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  containerForm:{
    backgroundColor: '#FDFDFD',
    flex: 2,
    marginTop: 30,
    paddingStart: '5%',
    paddingEnd: '5%',
    
  },
  title:{
    fontSize: 20,
    marginTop: 2
    
  },
  banner:{
    borderRadius:25,
    width: '100%',
    height: '15%',
    marginTop:25
  },
  img1:{
    borderRadius:10,
    width: '40%',
    height: 100,
    marginTop:2
  },
  img2:{
    borderRadius:80/2,
    width: 80,
    height: 80,
    marginTop:2
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
  input1:{
    
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginLeft: 20,
    padding: 10,
    width: '70%',
    height: 55,
    
    marginTop: 15
  },

  button:{
    width: '30%',
    borderRadius: 25,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  buttonText:{
    fontSize: 18,
    color: '#183E9F',
    marginLeft: 2,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    padding: 10,
    height: 45,
    marginBottom: 10
  },
  

  buttonImg1:{
    width: '48%',
    height: 160,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    borderWidth: 0.05,
    padding: 10,
  },

  
  buttonImg2:{
    width: '48%',
    height: 160,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.05,
    position: 'absolute',
    alignSelf: 'flex-start',
    padding: 10,
    
  },

  
  buttonImg3:{
    width: '48%',
    height: 160,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    borderWidth: 0.05,
    padding: 10,
  },

  
  buttonImg4:{
    width: '48%',
    height: 160,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.05,
    position: 'absolute',
    alignSelf: 'flex-start',
    padding: 10,
  },

  buttonImg5:{
    width: '48%',
    height: 170,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.05,
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: 121
    
  },
  buttonImg6:{
    width: '48%',
    height: 170,
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.05,
    
    alignSelf: 'flex-start',
    padding: 10,
    
  },

  textTitulo:{
    color: '#183E9F',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 70,
    marginBottom: 10
  },
  message2:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    
  },
  viewBody:{
    marginRight: 15,
    marginLeft: 12
  },

  textoBemVindo:{
    fontSize: 23,
    marginTop: 10,
    marginLeft: 30,
    color: '#FFFDE4',
    fontWeight: 'bold',
  },
  textoLocalizacao: {
    marginTop: 2,
    fontSize: 12,
    color: '#DDD',
    marginLeft: 30,
  },
  txtImage:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  txtFarmacia:{
    color: '#707070',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  txtLegenda:{
    color: '#AAAAAA'
  },
  txtLegendaCateg:{
    fontSize: 18,
    color: '#707070',
    marginLeft: 30,
    marginTop: 7
  },
  btnAjuda:{
    marginLeft: 260,
    marginTop: 20,
    flexDirection: 'row',
  },
  btnVoltar:{
    flexDirection: 'row',
    marginTop: 22,
    marginLeft: 15,
  },
  txtVoltar:{
    fontSize: 20,
    position: 'absolute',
    marginRight: 30,
    marginLeft: 25,
    color: '#FFFFFF'
  },
  btnCompras:{
    
    marginRight: 20,
    marginBottom: 20,
    
  },
  principal: {
    height: 150,
    backgroundColor: 'white',
    padding: 4,
    marginBottom: 30
  },
  textoTitulo: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 24,
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    fontStyle: 'italic',
    color: '#707070',
    borderRadius: 12,
  },
  cartao: {
    marginTop: 10,
    borderWidth: 0.05,
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius: 2,
    padding: 8,
  },
  txtAjuda:{
    fontSize: 15,
    marginTop: 10,
    color: '#FFFFFF'
  }

})
