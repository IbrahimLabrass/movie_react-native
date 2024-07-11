import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);
  let storedMovieWatched = watched.find(o => o.imdbID === movie.imdbID);

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'path/to/default-poster.jpg' }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
        <View style={styles.buttons}>
          <Button
            title="Add to Watchlist"
            disabled={watchlistDisabled}
            onPress={() => addMovieToWatchlist(movie)}
          />
          <Button
            title="Add to Watched"
            disabled={watchedDisabled}
            onPress={() => addMovieToWatched(movie)}
          />
        </View>
      </View>
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
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 16,
    color: '#555',
  },
  buttons: {
    marginTop: 10,
  },
});

export default ResultCard;
