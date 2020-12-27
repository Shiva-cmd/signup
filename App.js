import  *as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text,TouchableOpacity} from 'react-native';
import Homescreen from './screen/Homescreen';
import Detailscreen from './screen/Detailscreen';
import Loadingscreen from './screen/Loadingscreen';

const Stack=createStackNavigator();

const App=()=>{
return(
<>
<NavigationContainer>
  <Stack.Navigator  headerMode={false}>
    {/* <Stack.Screen name ="Home" component={Homescreen}/> */}
    {/* <Stack.Screen name ="Detail" component={Detailscreen}/> */}
    <Stack.Screen name ="loading" component={Loadingscreen}/>
  </Stack.Navigator>
</NavigationContainer>
</>
)
}
export default App;