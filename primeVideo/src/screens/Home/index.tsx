import * as C from './styles'
import { FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import PrimeVideoLogo from '../../assets/prime_video.png'
import AmazonLogo from '../../assets/amazon_logo.png'
import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png'
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MovieCards } from '../../components/MovieCards';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';

export const Home = () => {
    return (
        <C.Container>
            <C.Header>
                <Image source={PrimeVideoLogo}/>
                <C.AmazonLogoImg source={AmazonLogo}/>
            </C.Header>
            <C.Category>
                <TouchableOpacity>
                    <C.CategoryText>Home</C.CategoryText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <C.CategoryText>TV Shows</C.CategoryText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <C.CategoryText>Movies</C.CategoryText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <C.CategoryText>Kids</C.CategoryText>
                </TouchableOpacity>
            </C.Category>
            <ScrollView showsVerticalScrollIndicator={false}>
            <C.MovieImgThumbnail>
                <Image source={MovieTheWheel}/>
            </C.MovieImgThumbnail>
            <C.MovieText>Continue Watching</C.MovieText>
            <FlatList 
                data={MOVIESWATCHING}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MovieCards movieURL={item.moviesURL} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <C.MovieText>Crime Movies</C.MovieText>
            <FlatList 
                data={MOVIESCRIME}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MovieCards movieURL={item.moviesURL} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <C.MovieText>Watch in your language</C.MovieText>
            <FlatList 
                data={MOVIESWATCH}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MovieCards movieURL={item.moviesURL} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </ScrollView>
        </C.Container>
    )
}