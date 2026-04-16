import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GerenciarDespesas from './screens/gerenciarDespesas';
import DespesasRecentes from './screens/despesasRecentes';
import TodasDespesas from './screens/todasDespesas';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DespesasContextProvider from './store/despesasContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottonTabScreen() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <Ionicons
            name="add"
            size={24}
            onPress={() => navigation.navigate('Gerenciar Despesas')}
            style={{ marginRight: 16 }}
          />
        )
      }}>
      <Tab.Screen
        name="Despesas Recentes"
        component={DespesasRecentes}
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="hourglass" size={size} color={color} />),
          tabBarLabel: 'Recentes',
          title: 'Despesas Recentes',
          tabBarLabelStyle: { fontSize: 12 }
        }}
      />
      <Tab.Screen
        name="Todas Despesas"
        component={TodasDespesas}
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="wallet-outline" size={size} color={color} />),
          tabBarLabel: 'Todas',
          title: 'Todas Despesas',
          tabBarLabelStyle: { fontSize: 12 }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <DespesasContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Despesas"
            component={BottonTabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Gerenciar Despesas" component={GerenciarDespesas} />
        </Stack.Navigator>
      </NavigationContainer>
    </DespesasContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
