import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Watched Movies</Text>
      <Text style={styles.count}>{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</Text>
      {watched.length > 0 ? (
        <FlatList
          data={watched}
          keyExtractor={item => item.imdbID}
          renderItem={({ item }) => <MovieCard movie={item} type="watched" />}
        />
      ) : (
        <Text style={styles.noMovies}>No movies in your list! Add some!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
    color: '#555',
  },
  noMovies: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Watched;
