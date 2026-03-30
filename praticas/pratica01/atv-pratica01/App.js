import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GerenciarDespesas from './screens/gerenciarDespesas';
import DespesasRecentes from './screens/despesasRecentes';
import TodasDespesas from './screens/todasDespesas';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

  const Tab = createBottomTabNavigator();

  function BottonTabScreen() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator
        screenOptions={{
          headerRight: () => (<IconButton icon="add" size={24} onPress={() => {
            navigation.navigate('Gerenciar Despesas');
          }} />)
        }}>
        <Tab.Screen name="Despesas Recentes" component={DespesasRecentes} />
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="hourglass" size={size} color={color} />),
          tabBarLabel: 'Recentes',
          title: 'Despesas Recentes',
          tabBarLabelStyle: { fontSize: 12 }
        }},
        <Tab.Screen name="Todas Despesas" component={TodasDespesas} />
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="wallet-outline" size={size} color={color} />),
          tabBarLabel: 'Todas',
          title: 'Todas Despesas',
          tabBarLabelStyle: { fontSize: 12 }
        }},
      </Tab.Navigator>
    )
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Despesas" component={BottonTabScreen}
          options={{ headerShow: false }} />
        <Stack.Screen name="Gerenciar Despesas" component={GerenciarDespesas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

