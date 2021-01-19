import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:10,
        paddingVertical:10
    },  
    container:{
        width:'100%',        
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:10,
    },
    containerImage:{
        width:100,height:150,marginRight:15
    },
    imageMovie:{
        width:undefined,height:undefined,resizeMode:'cover',flex:1,borderTopLeftRadius:10,borderBottomLeftRadius:10
    },
    containerInfo:{
        flex:1,paddingRight:10
    },
    textTitle:{
        fontWeight:'bold',fontSize:18
    },
    textDescription:{
        fontWeight:'300',fontSize:14,textAlign:'justify'
    }
    
})
