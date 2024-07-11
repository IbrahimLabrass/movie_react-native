import React from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import ResultCard from './ResultCard';

const Add = ({ searchValue, setSearchValue, movies }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a movie"
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({ item }) => <ResultCard movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Add;
