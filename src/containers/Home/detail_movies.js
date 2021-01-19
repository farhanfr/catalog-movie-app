import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import {DetailMoviesComponents} from '../../components/Home'

import {MovieServices} from '../../api/services'
import { ScrollView } from 'react-native-gesture-handler'

class DetailMovies extends Component {

    constructor(props) {
        super(props)
        this.state={            
            detailMovie:"",
            isLoading:true
        }
    }

    getDetailMovie = async (id) => {
        console.log(id)
        const{getAllById}=MovieServices()
        try {
            const result = await getAllById(id)
            .then(res=>this.setState({detailMovie:res.data}),this.setState({isLoading:false}))
        } catch (error) {
            console.log(error)
        }
        

    }

    componentDidMount(){
        const{movieid}=this.props.route.params
        this.getDetailMovie(movieid)
    }

    render() {
        return (
            // this.state.isLoading ?  :
            this.state.isLoading ? <ActivityIndicator size="large" color='amber' style={{justifyContent:'center',flex:1,zIndex:999}}/>:
            <ScrollView style={{backgroundColor:'white'}}>
            <View>
                <DetailMoviesComponents dataDetailMovie={this.state.detailMovie} />
            </View>
            </ScrollView>
            
        )
    }
}

export default DetailMovies
