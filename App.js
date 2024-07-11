import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalProvider } from './context/GlobalState';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import Header from './components/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=your_api_key`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Watchlist" component={Watchlist} />
          <Tab.Screen name="Watched" component={Watched} />
          <Tab.Screen name="Add">
            {() => <Add searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
