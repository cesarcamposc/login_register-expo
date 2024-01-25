import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LoginScreen = () => {
    return (
        <SafeAreaView style = {{flex: 1 , justifyContent: 'center'}}>
            <View style = {{paddingHorizontal :  25}}>
                <View style = {{alignItems: 'center'}}>
                    <LoginSVG
                    height = {300}
                    width = {300}
                    style = {{transform: [{rotate: '-5deg'}]}}                    
                    />
                    
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginBottom: 30,
                        color: 'purple',
                    }}>Login</Text>
                </View>

                <View style = {{
                    flexDirection: 'row',
                    borderBottomColor: 'purple',
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    marginBottom: 25,
                    }}>
                    <MaterialIcons 
                    name='alternate-email' 
                    size = {25} 
                    color='purple'
                    style ={{marginRight:5}}
                    />
                    <TextInput 
                    placeholder='Email ID'
                    style={{flex: 1, paddingVertical: 5}}
                    keyboardType='email-address'
                    />
                </View>

                <View style = {{
                    flexDirection: 'row',
                    borderBottomColor: 'purple',
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    marginBottom: 25,
                    }}>
                    <MaterialIcons 
                    name='lock' 
                    size = {25} 
                    color='purple'
                    style ={{marginRight:5}}
                    />
                    <TextInput 
                    placeholder='Password'
                    style={{flex: 1, paddingVertical: 5}}
                    secureTextEntry = {true}                    
                    />
                </View>

                <TouchableOpacity style={{
                    backgroundColor: 'purple',
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 30,
                }} onPress={{}}>
                    <Text style={{
                        textAlign:'center', 
                        fontWeight: 'bold', 
                        fontSize: 20, 
                        color: 'white'}}>
                        Login</Text>                   
                </TouchableOpacity>

                <Text style={{textAlign: 'center', color: 'grey', marginBottom:30}}>Or, Login With ....</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
                    <TouchableOpacity style={{
                        borderColor: '#ddd',
                        borderWidth: 3,
                        borderRadius: 10,
                        paddingHorizontal: 30,
                        paddingVertical: 10
                    }}
                    >
                        <GoogleSVG height={25} width={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderColor: '#ddd',
                        borderWidth: 3,
                        borderRadius: 10,
                        paddingHorizontal: 30,
                        paddingVertical: 10
                    }}
                    >
                        <FacebookSVG height={25} width={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderColor: '#ddd',
                        borderWidth: 3,
                        borderRadius: 10,
                        paddingHorizontal: 30,
                        paddingVertical: 10
                    }}
                    >
                        <TwitterSVG height={25} width={25} />
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
                    <Text>New to the App?</Text>
                    <TouchableOpacity onPress={()=>{}} >
                        <Text style={{ color: 'purple', fontWeight: 'bold' }}>  Register</Text>
                    </TouchableOpacity>
                </View>
                               
            </View>
        </SafeAreaView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({})