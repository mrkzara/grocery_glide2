import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';



export default function index() {
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleLoginPress = () => {
    navigation.navigate('(tabs)'); // Navigate to the Login screen
  }

  const handleSignupPress =() =>{
    navigation.navigate('signup');
  }
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
      style={{
        width:'100%',
        height:500,
      }}
      />

      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center',
      }}>
        <Text style={styles.title}>Grocery Glide</Text>
        <Text style={styles.subtitle}>Enhance the speed of acquiring your items with Grocery Glide.</Text>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[
                styles.loginButtonWrapper,
                {backgroundColor:'#a62639'}
            ]}
            onPress={handleLoginPress}
            >  
                <Text style={styles.loginButtonText}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButtonWrapper}
            onPress={handleSignupPress}
            >
                <Text style={styles.signupButtonText}>SignUp</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles =StyleSheet.create({
   
    title:{
    
        fontSize:30,
        textAlign:'center',
    },
    subtitle:{
       
        fontSize:14,
        textAlign:'center',
        color:'gray',
        marginVertical: 20,
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:30,
        borderWidth: 1,
        borderColor:'black',
        width:"100%",
        height:70,
        borderRadius:100,
    },
    loginButtonWrapper:{
        justifyContent:'center',
        alignItems:'center',
        width: '50%',
        borderRadius:100,
    },
    loginButtonText:{
        color:'white',
        fontSize:18,
       
    },
    signupButtonText:{
        fontSize:18,
       
    }
})