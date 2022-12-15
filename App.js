import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import data_music from "./music-data.json";
import SearchBar from "./src/components/SearchBar";
import SongCard from "./src/components/SongCard";
import React, { useState } from "react";
export default function App() {
  const renderSongs = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const [list, setList] = useState(data_music);
  const handleSearch = (text) => {
    const filterList = data_music.filter((song) => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filterList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSongs}
        ItemSeparatorComponent={renderSeperator}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
});
