import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Relatorios from "../pages/Relatorios";
import Juros from "../pages/Juros";
import Juros2 from "../pages/Juros2";
import Clientes from "../pages/Clientes";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Relatorios"
        component={Relatorios}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Juros"
        component={Juros}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Juros2"
        component={Juros2}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Clientes"
        component={Clientes}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
