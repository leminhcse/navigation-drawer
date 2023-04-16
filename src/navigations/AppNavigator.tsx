import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import FirstPage from "../screens/FirstPage";
import SecondPage from "../screens/SecondPage";

const Drawer = createDrawerNavigator();
const Stack =  createNativeStackNavigator();

const FirstScreenStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="FirstPage"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
          />
        </Stack.Navigator>
    );
  }
  
  const SecondScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="SecondPage"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}/>
      </Stack.Navigator>
    );
  }

  function DrawerStack() {
    return(
        <Drawer.Navigator screenOptions={{drawerStyle: { 
            backgroundColor: '$c6cbef', width: 250,}, 
            headerStyle: { 
                backgroundColor: '#f4511e',},
            headerTintColor: '#fff',
            headerTitleStyle: { 
                fontWeight: 'bold',}
            }}>
            <Drawer.Screen name="FirstPage" options={{drawerLabel: 'First page option', title: 'First Stack'
            }} component={FirstScreenStack}/>
    
            <Drawer.Screen name="SecondPage" options={{drawerLabel: 'Second page option', title: 'Second Stack'
            }} component={SecondScreenStack}/>
    
        </Drawer.Navigator>
    );
  }

export default function AppContainer() {
    return(
        <NavigationContainer>
            <DrawerStack/>
        </NavigationContainer>
    );
}