import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'path/to/default-poster.jpg' }}
      />
      <MovieControls type={type} movie={movie} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
});

export default MovieCard;
