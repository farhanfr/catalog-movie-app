import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Styles = StyleSheet.create({
    header:{
        width:'100%',
        height:250,
        backgroundColor:'red',
        position:'relative'
    },
    headerBlack:{
        position:'absolute',width:'100%',height:'100%',backgroundColor: 'black', opacity: 0.4
    },
    headerBottom:{
        position:'absolute',width:'100%',bottom:0,left:0,paddingVertical:20,paddingHorizontal:20
    },
    headerText:{
        color:'white',fontWeight:'bold',fontSize:20
    },
    body:{
        //
    }
})
