import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <View style={styles.controls}>
      {type === 'watchlist' && (
        <>
          <Button title="Watch" onPress={() => addMovieToWatched(movie)} />
          <Button title="Remove" onPress={() => removeMovieFromWatchlist(movie.imdbID)} />
        </>
      )}
      {type === 'watched' && (
        <>
          <Button title="Unwatch" onPress={() => moveToWatchlist(movie)} />
          <Button title="Remove" onPress={() => removeFromWatched(movie.imdbID)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default MovieControls;
