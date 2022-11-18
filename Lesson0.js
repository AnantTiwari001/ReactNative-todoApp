import { StyleSheet, Text, View, Button } from "react-native";

export default function Lesson0() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Text</Text>
      </View>
      <Text>Hello World!</Text>
      <Button title="Tap me!" />
      {/* // inline style */}
      <Text
        style={{
          margin: 16,
          borderWidth: 3,
          borderColor: "blue",
          borderRadius: 10,
          padding: 16
        }}
      >
        hello world
      </Text>
      {/* Style Object */}
      <Text style={styles.TextBaby}>Style Object Baby</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextBaby:{
    margin:16,
    borderWidth:3,
    borderColor:'blue',
    borderRadius:10,
    padding:16
  }
});
