import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const DATA = [
    {
      day: "Mon",
      date: 15,
    },
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
    {
      day: "Sun",
      date: 21,
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
  const [task, setTask] = useState("");

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
      <View style={styles.stackIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AntDesign name="left" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Done")}>
          <Octicons name="three-bars" size={24} style={{ marginLeft: 275 }} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "#415DE7",
          marginTop: 15,
        }}
      >
        To-do List
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
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.add}>
            <MaterialIcons name="add" size={50} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
