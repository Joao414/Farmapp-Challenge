import { createNativeStackNavigator } from "@react-navigation/native-stack"

import BemVindo from "../paginas/bemVindo";
import Entrar from "../paginas/entrar";
import Cadastrar from "../paginas/cadastro";
import Home from "../paginas/home";
import Produtos from "../paginas/produtos";
import AnexarReceita from "../paginas/receita";
import Carrinho from "../paginas/carrinho";

const Stack = createNativeStackNavigator();
//Configurando as rotas
export default function Rotas(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Entrar"
        component={Entrar}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AnexarReceita"
        component={AnexarReceita}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ headerShown: false }}
      />

      

    </Stack.Navigator>
  )
}