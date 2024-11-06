import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import { AuthenticationContext } from './services/auth';
import { fetchUserDataFromStorage } from './services/asyncStorageHelper';
import globalStyles from './assets/styles/Styles';
import CustomTopBar from './components/CustomTopBar';
import CustomBottomBar from './components/CustomBottomBar';
import Home from './screens/home/Home';
import AccountMain from './screens/account/AccountMain';
import { AccountLoggedIn, AccountLoggedOut, AccountMaintain } from './screens/account/AccountComponents';
import ItemsMain from './screens/items/ItemsMain';
import Credits from './screens/credits/Credits';
import MessagesMain from './screens/messages/MessagesMain';
import { ItemsFromThisUser, QueuesOfThisUser, ItemAddView } from './screens/items/ItemComponents';

const Stack = createStackNavigator();

export default function App() {
  const [authState, setAuthState] = useState(fetchUserDataFromStorage());
 
  return (
    <Provider>
      <AuthenticationContext.Provider value={{ authState, setAuthState}}>
        <NavigationContainer>
          <CustomTopBar />
            <View style={globalStyles.container}>
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="AccountMain" component={AccountMain} options={{ headerShown: false }} />
                <Stack.Screen name="AccountLoggedIn" component={AccountLoggedIn} options={{ headerShown: false }} />
                <Stack.Screen name="AccountLoggedOut" component={AccountLoggedOut} options={{ headerShown: false }} />
                <Stack.Screen name="ItemsMain" component={ItemsMain} options={{ headerShown: false }} />
                <Stack.Screen name="Credits" component={Credits} options={{ headerShown: false }} />
                <Stack.Screen name="MessagesMain" component={MessagesMain} options={{ headerShown: false }} />
                <Stack.Screen name="AccountMaintain" component={AccountMaintain} options={{ headerShown: false }} />
                <Stack.Screen name="MyItems" component={ItemsFromThisUser} options={{ headerShown: false }} />
                <Stack.Screen name="MyQueues" component={QueuesOfThisUser} options={{ headerShown: false }} />
                <Stack.Screen name="ItemAddView" component={ItemAddView} options={{ headerShown: false }} />
              </Stack.Navigator>
            </View>
          <CustomBottomBar />
        </NavigationContainer>
      </AuthenticationContext.Provider>
    </Provider>
  );
}
