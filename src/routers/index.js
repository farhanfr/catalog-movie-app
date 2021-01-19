import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

import {ListMovies,DetailMovies} from '../containers/Home'
import {ListSearch} from '../containers/Search'


const Stack = createStackNavigator();

function RouteHome(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="ListMovies" component={ListMovies} options={{
                title:"Home",
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name="DetailMovies" component={DetailMovies} options={{
                title:"Detail Movies",
                headerTitleAlign:'center'
            }} />
        </Stack.Navigator>
    )
}

function RouteSearch(){
    return(
        <Stack.Navigator initialRouteName="ListSearch">
            <Stack.Screen name="ListSearch" component={ListSearch} options={{
                title:"Search Movie",
                headerTitleAlign:'center'
            }}/>
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
        <Tab.Navigator
        initialRouteName='ListMovies'
        tabBarOptions={{
            activeTintColor: 'blue',
          }}
        >
            <Tab.Screen 
            name="ListMovies" 
            component={RouteHome}
            options={{
                title:"Home",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ), 
            }}
             />
            <Tab.Screen 
            name="SearchScreen" 
            component={RouteSearch}
            options={{
                title:"Search",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="movie-search" color={color} size={size} />
                  ), 
            }}
             />
        </Tab.Navigator>
    )
}

