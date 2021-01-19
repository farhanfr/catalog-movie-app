import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { POSTER_PATH } from '../../api/store'
import { styles } from './style/list_movies_style'

class ListMoviesComponents extends Component {
    render() {
        const {listmoviedata} = this.props
        const {navigation} = this.props
        // console.log(listmoviedata)
        return (
            <View >
                {listmoviedata.map((movie) => {
                    return (
                        <View style={styles.wrapper} key={movie.id}>
                            <TouchableOpacity onPress={()=>navigation.navigate('DetailMovies',{movieid:movie.id})}>
                                <View style={styles.container}>
                                    <View style={styles.containerImage}>
                                        <Image source={{ uri: `${POSTER_PATH}/${movie.poster_path}` }} style={styles.imageMovie} />
                                    </View>
                                    <View style={styles.containerInfo}>
                                        <Text style={styles.textTitle}>{movie.original_title}</Text>
                                        <Text numberOfLines={3} style={styles.textDescription}>
                                            {movie.overview}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    )
                }
                )}
            </View>
        )
    }
}

export default ListMoviesComponents
