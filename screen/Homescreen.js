import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


const  Homescreen=(props)=>{
    return (
      <View>
        <Text style={{fontSize:25}}>
          this is home screen shiva
        </Text>
        <TouchableOpacity>
            <Text onPress={()=>props.navigation.navigate('Detail')}>
                already have account
            </Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default Homescreen;
  