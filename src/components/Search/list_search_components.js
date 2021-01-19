import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { POSTER_PATH } from '../../api/store'

import { styles } from './style/list_search_style'

class ListSearchComponents extends Component {
    render() {
        const{dataListSearch}=this.props
        const{navigation} = this.props
        console.log(dataListSearch)
        return (
            <View>
                {dataListSearch.map((dataSearch)=>{
                    return (
                        <View style={styles.wrapper} key={dataSearch.id}>
                            <TouchableOpacity onPress={()=>navigation.navigate('DetailMovies',{movieid:dataSearch.id})}>
                                <View style={styles.container}>
                                    <View style={styles.containerImage}>
                                        <Image source={{ uri: `${POSTER_PATH}/${dataSearch.poster_path}` }} style={styles.imageMovie} />
                                    </View>
                                    <View style={styles.containerInfo}>
                                        <Text style={styles.textTitle}>{dataSearch.original_title}</Text>
                                        <Text numberOfLines={3} style={styles.textDescription}>
                                            {dataSearch.overview}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
                
            </View>
        )
    }
}

export default ListSearchComponents
