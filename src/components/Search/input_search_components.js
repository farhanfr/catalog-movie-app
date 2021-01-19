import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { Styles } from './style/input_search_style'

class InputSearchComponets extends Component {

    constructor(props) {
        super(props)
        this.state={
            searchInput:""
        }
    }

    render() {
        return (
            <View style={Styles.wrapper}>
                <TextInput placeholder="Search Movie" 
                onChangeText={(value)=>this.setState({searchInput:value})} 
                style={Styles.input}
                value={this.state.searchInput === "" ? null : this.state.searchInput}
                // onSubmitEditing={()=>{
                //     this.setState({
                //         searchInput:""
                //     })
                // }}
                 />
                <Button title="Search Movie" 
                onPress={()=>{this.props.searchInput(this.state.searchInput),this.setState({
                    searchInput:""
                })}} />
            </View>
        )
    }
}

export default InputSearchComponets
