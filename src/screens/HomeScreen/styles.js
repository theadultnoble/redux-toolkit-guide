import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  stackIcon: {
    flexDirection: "row",
  },
  FlatList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  FlatText: {
    height: 100,
    width: 65,
    borderRadius: 25,
    backgroundColor: "#D4D4D8",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  taskList: {
    justifyContent: "center",
    marginTop: 50,
  },
  taskView: {
    flexDirection: "row",
    paddingTop: 20,
    marginBottom: 10,
    borderTopWidth: 1,
    borderColor: "#D4D4D8",
  },
  formContainer: {
    position: "absolute",
    bottom: 25,
    right: 20,
    alignItems: "center",
  },
  add: {
    width: 50,
    height: 50,
    backgroundColor: "#415DE7",
    borderRadius: 73,
    justifyContent: "center",
    alignItems: "center",
  },
});
