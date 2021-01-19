import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {ListSearchComponents,InputSearchComponets} from '../../components/Search'
import { MovieServices } from '../../api/services'
import { ScrollView } from 'react-native-gesture-handler'

class ListSearch extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataSearch:[]
        }
    }

    searchInput = async (data) =>{
        console.log(data)
        const{searchMovie}=MovieServices()
        try {
            const result = await searchMovie(data)
            .then(res =>
                this.setState({dataSearch:res.data.results}),
            )
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <ScrollView>
                <InputSearchComponets searchInput={this.searchInput}/>
                <ListSearchComponents navigation={this.props.navigation} dataListSearch={this.state.dataSearch}/>
            </ScrollView>
        )
    }
}

export default ListSearch
