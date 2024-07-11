import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const loadState = async () => {
      const watchlist = await AsyncStorage.getItem('watchlist');
      const watched = await AsyncStorage.getItem('watched');
      if (watchlist) dispatch({ type: 'SET_WATCHLIST', payload: JSON.parse(watchlist) });
      if (watched) dispatch({ type: 'SET_WATCHED', payload: JSON.parse(watched) });
    };
    loadState();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    AsyncStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
