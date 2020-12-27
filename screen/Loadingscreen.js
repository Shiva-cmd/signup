import * as React from 'react';
import { ActivityIndicator,StyleSheet} from 'react-native';


const  Loadingscreen=(props)=>{
    return (
      <ActivityIndicator size="large" color="black" style={styles.container}/>
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems:"center"
    },
   
  });
  
  export default Loadingscreen;