import { View, StyleSheet } from "react-native";
import Lesson1 from "./Lesson1";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    < >
      <StatusBar style="light" />
      {/* <Lesson0/> */}
      <Lesson1/>
    </>
  );
}

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});