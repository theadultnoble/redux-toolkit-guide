import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const DoneScreen = () => {
  const DATA = [
    {
      day: "Tue",
      date: 16,
    },
    {
      day: "Wed",
      date: 17,
    },
    {
      day: "Thur",
      date: 18,
    },
    {
      day: "Fri",
      date: 19,
    },
    {
      day: "Sat",
      date: 20,
    },
  ];

  const toDo = [
    {
      task: "finish my app",
      key: 1,
    },
    {
      task: "do the other thing",
      key: 2,
    },
    {
      task: "file notes",
      key: 3,
    },
  ];

  const renderDateItem = ({ item }) => {
    return (
      <View style={styles.FlatText}>
        <Text style={{ color: "#415DE7", marginBottom: 10, fontSize: 16 }}>
          {item.day}
        </Text>
        <Text style={{ color: "#415DE7", fontSize: 19 }}>{item.date}</Text>
      </View>
    );
  };
  const renderTaskItem = ({ item }) => {
    return (
      <View style={styles.taskView}>
        <Feather name="check-circle" size={27} color="#415DE7" />
        <Text style={{ fontSize: 17, left: 25 }}>{item.task}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: "#415DE7",
        }}
      >
        Done List
      </Text>
      <View style={styles.FlatList}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.day}
        />
      </View>
      <SafeAreaView style={styles.taskList}>
        <FlatList data={toDo} renderItem={renderTaskItem} />
      </SafeAreaView>
    </View>
  );
};

export default DoneScreen;
