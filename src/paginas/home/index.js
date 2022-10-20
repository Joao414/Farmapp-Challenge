import * as React from 'react';
import { View,Button, Text, StyleSheet,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import { Feather } from '@expo/vector-icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { color } from 'react-native-reanimated';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width: '100%', height: 230, backgroundColor: '#183E9F'}}>
          <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textoBemVindo}>Olá, Luan Oliveira.</Text>
                <Image style={{ position: 'absolute', right: 75, marginTop: 10 }} source={require('../../assets/bell.png')} />
                <Image style={{ position: 'absolute', marginLeft: 320, marginTop: 10 }} source={require('../../assets/profile.png')} />
              </View>
              <Text style={styles.textoLocalizacao}><SimpleLineIcons name='location-pin' /> R. Dr. Oswaldo Cruz, 586 {' '}<SimpleLineIcons name='arrow-down' /></Text>
              
              <Text style={styles.message2}>Farmapp</Text>
              
              <TextInput style={styles.input1} placeholder='Digite alguma coisa...' />
              <Image style={{ position: 'absolute', top: 156, right: 52, alignContent: "center" }} source={require('../../assets/microphone.png')} />
          
          </View>
          </View>
          <View style={{width: '100%', height:1250, backgroundColor: '#FDFDFD'}}>
          <View style={styles.viewBody}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Farmacia</Text>
            </TouchableOpacity>
              <View>
                <Image
                  animation="flipInY"
                  source={require('../../assets/banner.png')}  
                  style={styles.banner}
                  resizeMode='contain'/>
              <Text style={styles.textTitulo}>Categorias</Text>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
              <Image
                animation="flipInY"
                source={require('../../assets/remedios.jpg')}  
                style={styles.img1}
                resizeMode='contain'/>
                
                    <Text style={styles.txtLegendaCateg} onPress={() => navigation.navigate('BemVindo')}>Farmácia</Text>
                </TouchableOpacity>

              <Text style={styles.textTitulo}>Meus Favoritos</Text>
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
                      <Text style={styles.txtImage}>Cobasi Vila</Text>
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

              

              

            </View>
            </View>
            
            </View>
            

          </View>
          </View>
        </ScrollView>

      </View>
    
    
  );
}

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} ></Drawer.Screen>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
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
    padding: 10,
    width: '80%',
    height: 55,
    alignSelf: 'center',
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
    marginTop: 450
    
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
    marginTop: 50,
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
  }

})