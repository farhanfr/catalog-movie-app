import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import ReadMore from 'react-native-read-more-text'

import {POSTER_PATH} from '../../api/store'
import {Styles} from './style/detail_movies_styles'

class DetailMoviesComponents extends Component {
    render() {
        const{dataDetailMovie}=this.props
        console.log(dataDetailMovie)
        return (
            <View>
                <View style={Styles.header}>
                    <Image source={{uri: `${POSTER_PATH}/${dataDetailMovie.poster_path}`}} style={{width:undefined,height:undefined,resizeMode:'repeat',flex:1}}/>
                    <View style={Styles.headerBlack}></View>
                    <View style={Styles.headerBottom}>
                        <Text style={Styles.headerText}>{dataDetailMovie.original_title}</Text>
                    </View>
                </View>
                <View style={Styles.body}>
                    <View style={{paddingHorizontal:15}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Synopsis</Text>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={this._renderTruncatedFooter} renderRevealedFooter={this._renderRevealedFooter} onReady={this._handleTextReady}>
                        <Text style={{color:'black',fontWeight:'400',fontSize:15,textAlign:'justify'}}>{dataDetailMovie.overview}</Text>
                    </ReadMore>
                    </View>
                </View>
            </View>
        )
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
     
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: 'red', marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
     
      _handleTextReady = () => {
        // ...
      }
}

export default DetailMoviesComponents
