import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Watchlist Details</Text>
      <Text style={styles.count}>{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}</Text>
      {watchlist.length > 0 ? (
        <FlatList
          data={watchlist}
          keyExtractor={item => item.imdbID}
          renderItem={({ item }) => <MovieCard movie={item} type="watchlist" />}
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

export default Watchlist;
