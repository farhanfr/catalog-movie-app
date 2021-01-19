import React, { Component } from 'react'
import axios from 'axios'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import {ListMoviesComponents}  from '../../components/Home'

import { MovieServices } from '../../api/services'

class ListMovies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listMovie:[],
            timeout:null,
            isLoading:true
        }
    }

     getAllMovie = async () => {
        const{getAll}=MovieServices()
        let loadTimeout
        try {
            const result = await getAll()
            .then(res=>
            this.setState({listMovie:res.data.results}),
            loadTimeout =  setTimeout(() => {
                this.setState({isLoading:false})    
            }, 2000))
            this.setState({timeout:loadTimeout})
        } catch (error) {
            console.log(error)
        }
        
    }

    componentDidMount() {
        this.getAllMovie()

    }

    componentWillUnmount(){
        clearTimeout(this.state.timeoutsad)
        console.log("unmount")
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator 
            size="large" color='amber' style={{justifyContent:'center',flex:1}}/> :
            <ScrollView>
                <ListMoviesComponents listmoviedata={this.state.listMovie} navigation={this.props.navigation}/>
            </ScrollView>
           
        )
    }
}

export default ListMovies
